module RongWebIMWidget.conversation {
    var UploadImageDomain = "http://7xogjk.com1.z0.glb.clouddn.com/"

    interface ConversationScope extends ng.IScope {

        emojiList: any
        showSelf: boolean
        showemoji: boolean
        _inputPanelState: number
        messageList: any[]
        scroll: RongWebIMWidget.Scroll

        conversation: {
            title: string
            targetType: number
            targetId: string
            messageContent: string
        }

        evaluate: {
            type: number
            showSelf: boolean
            valid: boolean
            onConfirm: Function
            onCancle: Function
        }

        scrollBar(): void
        minimize(): void
        getHistory(): void
        getMoreMessage(): void
        switchPerson(): void
        send(): void
        close(): void
        minimize(): void
    }

    class ConversationController {
        static $inject: string[] = ["$scope",
            "ConversationServer",
            "WebIMWidget",
            "ConversationListServer",
            "WidgetConfig",
            "ProviderData",
            "RongIMSDKServer",
            "SelfCustomerService"]

        constructor(private $scope: ConversationScope,
            private conversationServer: RongWebIMWidget.conversation.IConversationService,
            private WebIMWidget: RongWebIMWidget.WebIMWidget,
            private conversationListServer: any,
            private widgetConfig: RongWebIMWidget.WidgetConfig,
            private providerdata: RongWebIMWidget.ProviderData,
            private RongIMSDKServer: RongWebIMWidget.RongIMSDKServer,
            private SelfCustomerService: RongWebIMWidget.SelfCustomerService) {

            var that = this;

            conversationServer.changeConversation = function(obj) {
                that.changeConversation(obj);
            }
            conversationServer.handleMessage = function(msg) {
                that.handleMessage(msg);
            }

            conversationServer._handleConnectSuccess = function() {
                updateUploadToken();
            }
            function updateUploadToken() {
                RongIMSDKServer.getFileToken().then(function(token) {
                    conversationServer._uploadToken = token;
                    uploadFileRefresh();
                })
            }

            $scope.evaluate = <any>{
                type: 1,
                showevaluate: false,
                valid: false,
                onConfirm: function(data) {
                    //发评价
                    if (data) {
                        if ($scope.evaluate.type == RongWebIMWidget.EnumCustomerStatus.person) {
                            RongIMSDKServer.evaluateHumanCustomService(conversationServer.current.targetId, data.stars, data.describe).then(function() {

                            }, function() {

                            });
                        } else {
                            RongIMSDKServer.evaluateRebotCustomService(conversationServer.current.targetId, data.value, data.describe).then(function() {

                            }, function() {

                            });
                        }
                    }
                    that.conversationServer._customService.connected = false;
                    RongIMLib.RongIMClient.getInstance().stopCustomeService(conversationServer.current.targetId, {
                        onSuccess: function() {

                        },
                        onError: function() {

                        }
                    });

                    that.closeState();
                },
                onCancle: function() {
                    $scope.evaluate.showSelf = false;
                }
            };


            $scope._inputPanelState = RongWebIMWidget.EnumInputPanelType.person;
            $scope.$watch("showemoji", function(newVal, oldVal) {
                if (newVal === oldVal)
                    return;
                if (!$scope.emojiList || $scope.emojiList.length == 0) {
                    $scope.emojiList = RongIMLib.RongIMEmoji.emojis.slice(0, 70);
                }
            });
            document.addEventListener("click", function(e: any) {
                if ($scope.showemoji && e.target.className.indexOf("iconfont-smile") == -1) {
                    $scope.$apply(function() {
                        $scope.showemoji = false;
                    });
                }
            });
            $scope.$watch("showSelf", function(newVal: string, oldVal: string) {
                if (newVal === oldVal)
                    return;
                if (newVal && conversationServer._uploadToken) {
                    uploadFileRefresh();
                } else {
                    qiniuuploader && qiniuuploader.destroy();
                }
            })
            $scope.$watch("_inputPanelState", function(newVal: any, oldVal: any) {
                if (newVal === oldVal)
                    return;
                if (newVal == RongWebIMWidget.EnumInputPanelType.person && conversationServer._uploadToken) {
                    uploadFileRefresh();
                } else {
                    qiniuuploader && qiniuuploader.destroy();
                }
            })
            $scope.$watch("conversation.messageContent", function(newVal: string, oldVal: string) {
                if (newVal === oldVal)
                    return;
                if ($scope.conversation) {
                    RongIMLib.RongIMClient.getInstance().saveTextMessageDraft(+$scope.conversation.targetType, $scope.conversation.targetId, newVal)
                }
            });

            $scope.getHistory = function() {
                var key = $scope.conversation.targetType + "_" + $scope.conversation.targetId;
                var arr = conversationServer._cacheHistory[key];
                arr.splice(0, arr.length);
                // 自建客服 分组信息显示。
                if ($scope.conversation.targetType == RongWebIMWidget.EnumConversationType.CUSTOMER_SERVICE && !conversationServer._customService.connected) {
                    that.SelfCustomerService.selfCustomerServiceShowGroup(true);
                }
                $scope.scroll.recordedPosition();
                conversationServer._getHistoryMessages(+$scope.conversation.targetType, $scope.conversation.targetId, 20).then(function(data) {
                    if (data.has) {
                        conversationServer._cacheHistory[key].unshift(new RongWebIMWidget.GetMoreMessagePanel());
                    }
                    setTimeout(function() {
                        $scope.scroll.scrollToRecordPosition();
                    }, 100);
                });
            }

            $scope.getMoreMessage = function() {
                var key = $scope.conversation.targetType + "_" + $scope.conversation.targetId;
                conversationServer._cacheHistory[key].shift();
                conversationServer._cacheHistory[key].shift();

                conversationServer._getHistoryMessages(+$scope.conversation.targetType, $scope.conversation.targetId, 20).then(function(data) {
                    if (data.has) {
                        conversationServer._cacheHistory[key].unshift(new RongWebIMWidget.GetMoreMessagePanel());
                    }
                });
            }

            $scope.switchPerson = function() {
                RongIMLib.RongIMClient.getInstance().switchToHumanMode(conversationServer.current.targetId, {
                    onSuccess: function() {

                    },
                    onError: function() {

                    }
                })
            }

            $scope.send = function() {
                if (!$scope.conversation.targetId || !$scope.conversation.targetType) {
                    alert("请先选择一个会话目标。")
                    return;
                }
                if ($scope.conversation.messageContent == "") {
                    return;
                }


                var con = RongIMLib.RongIMEmoji.symbolToEmoji($scope.conversation.messageContent);

                var msg = RongIMLib.TextMessage.obtain(con);
                var userinfo = new RongIMLib.UserInfo(providerdata.currentUserInfo.userId, providerdata.currentUserInfo.name, providerdata.currentUserInfo.portraitUri);

                msg.user = userinfo;

                // 自建客服有分组是要带上分组 Id
                if ($scope.conversation.targetType == RongWebIMWidget.EnumConversationType.CUSTOMER_SERVICE) {
                    SelfCustomerService.sendMessageHandle(msg);
                }

                RongIMSDKServer.sendMessage(+$scope.conversation.targetType, $scope.conversation.targetId, msg);



                var content = that.packDisplaySendMessage(msg, RongWebIMWidget.MessageType.TextMessage);

                var cmsg = RongWebIMWidget.Message.convert(content);
                conversationServer._addHistoryMessages(cmsg);

                $scope.scrollBar();
                $scope.conversation.messageContent = ""
                var obj = document.getElementById("inputMsg");
                RongWebIMWidget.Helper.getFocus(obj);
            }



            var qiniuuploader: any
            function uploadFileRefresh() {

                qiniuuploader && qiniuuploader.destroy();
                qiniuuploader = Qiniu.uploader({
                    runtimes: 'html5,html4',
                    browse_button: 'upload-file',
                    container: 'funcPanel',
                    drop_element: 'inputMsg',
                    max_file_size: '100mb',
                    dragdrop: true,
                    chunk_size: '4mb',
                    unique_names: true,
                    uptoken: conversationServer._uploadToken,
                    domain: UploadImageDomain,
                    get_new_uptoken: false,
                    filters: {
                        mime_types: [{ title: "Image files", extensions: "jpg,gif,png,jpeg,bmp" }],
                        prevent_duplicates: false
                    },
                    multi_selection: false,
                    auto_start: true,
                    init: {
                        'FilesAdded': function(up: any, files: any) {
                        },
                        'BeforeUpload': function(up: any, file: any) {
                        },
                        'UploadProgress': function(up: any, file: any) {
                        },
                        'UploadComplete': function() {
                        },
                        'FileUploaded': function(up: any, file: any, info: any) {
                            if (!$scope.conversation.targetId || !$scope.conversation.targetType) {
                                alert("请先选择一个会话目标。")
                                return;
                            }
                            info = info.replace(/'/g, "\"");
                            info = JSON.parse(info);
                            RongIMLib.RongIMClient.getInstance()
                                .getFileUrl(RongIMLib.FileType.IMAGE,
                                file.target_name,
                                {
                                    onSuccess: function(url) {
                                        RongWebIMWidget.Helper.ImageHelper.getThumbnail(file.getNative(), 60000, function(obj: any, data: any) {
                                            var im = RongIMLib.ImageMessage.obtain(data, url.downloadUrl);
                                            if ($scope.conversation.targetType == RongWebIMWidget.EnumConversationType.CUSTOMER_SERVICE) {
                                                SelfCustomerService.sendMessageHandle(im);
                                            }
                                            var content = that.packDisplaySendMessage(im, RongWebIMWidget.MessageType.ImageMessage);
                                            RongIMLib.RongIMClient.getInstance()
                                                .sendMessage($scope.conversation.targetType,
                                                $scope.conversation.targetId,
                                                im,
                                                {
                                                    onSuccess: function() {
                                                        conversationListServer.updateConversations().then(function() {

                                                        });
                                                    },
                                                    onError: function() {

                                                    }
                                                })
                                            conversationServer._addHistoryMessages(RongWebIMWidget.Message.convert(content));
                                            $scope.$apply(function() {
                                                $scope.scrollBar();
                                            });

                                            updateUploadToken();
                                        })

                                    },
                                    onError: function() {

                                    }
                                });
                        },
                        'Error': function(up: any, err: any, errTip: any) {
                            console.log(err);
                            updateUploadToken();
                        }
                    }
                });
            }

            $scope.close = function() {
                if (WebIMWidget.onCloseBefore && typeof WebIMWidget.onCloseBefore === "function") {
                    var isClose = WebIMWidget.onCloseBefore({
                        close: function(data) {
                            if (conversationServer.current.targetType == RongWebIMWidget.EnumConversationType.CUSTOMER_SERVICE) {
                                if ($scope.evaluate.valid) {
                                    $scope.evaluate.showSelf = true;
                                } else {
                                    RongIMLib.RongIMClient.getInstance().stopCustomeService(conversationServer.current.targetId, {
                                        onSuccess: function() {

                                        },
                                        onError: function() {

                                        }
                                    });
                                    conversationServer._customService.connected = false;
                                    that.closeState();
                                }
                            } else {
                                that.closeState();
                            }
                        }
                    });
                } else {
                    if (conversationServer.current.targetType == RongWebIMWidget.EnumConversationType.CUSTOMER_SERVICE) {
                        if ($scope.evaluate.valid) {
                            $scope.evaluate.showSelf = true;
                        } else {
                            RongIMLib.RongIMClient.getInstance().stopCustomeService(conversationServer.current.targetId, {
                                onSuccess: function() {

                                },
                                onError: function() {

                                }
                            });
                            conversationServer._customService.connected = false;
                            that.closeState();
                        }
                    } else {
                        that.closeState();
                    }
                }
            }

            $scope.minimize = function() {
                WebIMWidget.display = false;
            }
        }

        closeState() {
            if (this.conversationServer.current && this.conversationServer.current.targetType == RongWebIMWidget.EnumConversationType.CUSTOMER_SERVICE) {
                var targetId = this.conversationServer.current.targetId;
                this.conversationServer._cacheHistory[RongWebIMWidget.EnumConversationType.CUSTOMER_SERVICE + '_' + targetId] = [];
            }
            var _this = this;
            if (this.WebIMWidget.onClose && typeof this.WebIMWidget.onClose === "function") {
                setTimeout(function() { _this.WebIMWidget.onClose(_this.$scope.conversation) }, 1);
            }
            if (this.widgetConfig.displayConversationList) {
                this.$scope.showSelf = false;
            } else {
                this.WebIMWidget.display = false;
            }
            this.$scope.messageList = [];
            this.$scope.conversation = null;
            this.conversationServer.current = null;
            _this.$scope.evaluate.showSelf = false;
        }

        changeConversation(obj: RongWebIMWidget.Conversation) {
            var that = this;

            if (that.widgetConfig.displayConversationList) {
                that.$scope.showSelf = true;
            } else {
                that.$scope.showSelf = true;
                that.WebIMWidget.display = true;
            }

            if (!obj || !obj.targetId) {
                that.$scope.conversation = <any>{};
                that.$scope.messageList = [];
                that.conversationServer.current = null;
                setTimeout(function() {
                    that.$scope.$apply();
                });
                return;
            }
            var key = obj.targetType + "_" + obj.targetId;

            if (obj.targetType == RongWebIMWidget.EnumConversationType.CUSTOMER_SERVICE
                && (!that.conversationServer.current || that.conversationServer.current.targetId != obj.targetId)
                && !that.conversationServer._customService.connected) {

                that.conversationServer.current = obj;
                that.$scope.conversation = <any>obj;
                that.$scope.messageList = that.conversationServer._cacheHistory[key] = that.conversationServer._cacheHistory[key] || []

                that.conversationServer._customService.connected = false;

                // 自建客服在发起握手时有分组需要传入 groupid
                if (!that.SelfCustomerService.group || that.SelfCustomerService.group.length === 0) {
                    that.RongIMSDKServer.startCustomService(obj.targetId);
                } else {
                    that.SelfCustomerService.currentGroupId = "";
                    that.SelfCustomerService.selfCustomerServiceShowGroup();
                }
            }

            that.conversationServer.current = obj;
            that.$scope.conversation = <any>obj;
            that.$scope.messageList = that.conversationServer._cacheHistory[key] = that.conversationServer._cacheHistory[key] || []
            that.$scope.conversation.messageContent = RongIMLib.RongIMClient.getInstance().getTextMessageDraft(obj.targetType, obj.targetId) || "";


            if (that.$scope.messageList.length == 0 && that.conversationServer.current.targetType !== RongWebIMWidget.EnumConversationType.CUSTOMER_SERVICE) {
                that.conversationServer._getHistoryMessages(obj.targetType, obj.targetId, 3)
                    .then(function(data) {
                        if (that.$scope.messageList.length > 0) {
                            that.$scope.messageList.unshift(new RongWebIMWidget.TimePanl(that.$scope.messageList[0].sentTime));
                            if (data.has) {
                                that.$scope.messageList.unshift(new RongWebIMWidget.GetMoreMessagePanel());
                            }
                            setTimeout(function() {
                                that.$scope.$apply();
                            })
                            that.$scope.scrollBar();
                        }
                    })
            } else {
                setTimeout(function() {
                    that.$scope.$apply();
                })
                that.$scope.scrollBar();
            }

        }

        handleMessage(msg: RongWebIMWidget.Message) {
            var that = this;
            if (that.$scope.conversation
                && msg.targetId == that.$scope.conversation.targetId
                && msg.conversationType == that.$scope.conversation.targetType) {
                that.$scope.$apply();
                var systemMsg = null;
                switch (msg.messageType) {
                    case RongWebIMWidget.MessageType.HandShakeResponseMessage://客服握手响应，保存附带客服信息（机器人需要自己提示欢迎语）
                        that.conversationServer._customService.type = msg.content.data.serviceType;
                        that.conversationServer._customService.connected = true;
                        that.conversationServer._customService.companyName = msg.content.data.companyName;
                        that.conversationServer._customService.robotName = msg.content.data.robotName;
                        that.conversationServer._customService.robotIcon = msg.content.data.robotIcon;
                        that.conversationServer._customService.robotWelcome = msg.content.data.robotWelcome;
                        that.conversationServer._customService.humanWelcome = msg.content.data.humanWelcome;
                        that.conversationServer._customService.noOneOnlineTip = msg.content.data.noOneOnlineTip;

                        if (msg.content.data.serviceType == "1") {//仅机器人
                            that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.robot);
                            msg.content.data.robotWelcome
                                && (systemMsg = this.conversationServer.packReceiveMessage(RongIMLib.TextMessage.obtain(msg.content.data.robotWelcome)));
                        } else if (msg.content.data.serviceType == "3") {
                            msg.content.data.robotWelcome
                                && (systemMsg = this.conversationServer.packReceiveMessage(RongIMLib.TextMessage.obtain(msg.content.data.robotWelcome)));
                            that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.robotSwitchPerson);
                        } else {
                            that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.person);
                        }
                        //会话一分钟评价有效，显示评价
                        that.$scope.evaluate.valid = false;
                        that.$scope.evaluate.showSelf = false;
                        setTimeout(function() {
                            that.$scope.evaluate.valid = true;
                        }, 60 * 1000);
                        that.SelfCustomerService.sendProductInfo();
                        break;
                    case RongWebIMWidget.MessageType.ChangeModeResponseMessage:
                        switch (msg.content.data.status) {
                            case 1:
                                that.conversationServer._customService.human.name = msg.content.data.name || "客服人员";
                                that.conversationServer._customService.human.headimgurl = msg.content.data.headimgurl;
                                that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.person);
                                break;
                            case 2:
                                if (that.conversationServer._customService.type == "2") {
                                    that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.person);
                                } else if (that.conversationServer._customService.type == "1" || that.conversationServer._customService.type == "3") {
                                    that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.robotSwitchPerson);
                                }
                                break;
                            case 3:
                                that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.robot);
                                systemMsg = this.conversationServer.packReceiveMessage(RongIMLib.InformationNotificationMessage.obtain("你被拉黑了"));
                                break;
                            case 4:
                                that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.person);
                                systemMsg = that.conversationServer.packReceiveMessage(RongIMLib.InformationNotificationMessage.obtain("已经是人工了"));
                                break;
                            default:
                                break;
                        }
                        break;
                    case RongWebIMWidget.MessageType.TerminateMessage:
                        //关闭客服
                        that.conversationServer._customService.connected = false;
                        if (msg.content.code == 0) {
                            that.$scope.evaluate.valid = true;
                            that.$scope.close();
                        } else {
                            if (that.conversationServer._customService.type == "1") {
                                that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.robot);
                            } else {
                                that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.robotSwitchPerson);
                            }
                        }

                        break;
                    case RongWebIMWidget.MessageType.SuspendMessage:
                        if (msg.messageDirection == RongWebIMWidget.MessageDirection.SEND) {
                            that.conversationServer._customService.connected = false;
                            that.closeState();
                        }
                        break;
                    case RongWebIMWidget.MessageType.CustomerStatusUpdateMessage:
                        switch (Number(msg.content.serviceStatus)) {
                            case 1:
                                if (that.conversationServer._customService.type == "1") {
                                    that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.robot);
                                } else {
                                    that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.robotSwitchPerson);
                                }
                                break;
                            case 2:
                                that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.person);
                                break;
                            case 3:
                                that.changeCustomerState(RongWebIMWidget.EnumInputPanelType.notService);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }

                if (systemMsg) {
                    var wmsg = RongWebIMWidget.Message.convert(systemMsg);
                    that.conversationServer.addCustomServiceInfo(wmsg);
                    that.conversationServer._addHistoryMessages(wmsg);
                }

                that.conversationServer.addCustomServiceInfo(msg);

                setTimeout(function() {
                    that.$scope.$apply();
                    that.$scope.scrollBar();
                }, 200);
            }

            if (msg.messageType === RongWebIMWidget.MessageType.ImageMessage) {
                setTimeout(function() {
                    that.$scope.$apply();
                    that.$scope.scrollBar();
                }, 800);
            }


        }



        changeCustomerState(type) {
            this.$scope._inputPanelState = type;
            if (type == RongWebIMWidget.EnumInputPanelType.person) {
                this.$scope.evaluate.type = RongWebIMWidget.EnumCustomerStatus.person;
                this.conversationServer._customService.currentType = RongWebIMWidget.EnumCustomerStatus.person;
                this.conversationServer.current.title = this.conversationServer._customService.human.name || "客服人员";
            } else {
                this.$scope.evaluate.type = RongWebIMWidget.EnumCustomerStatus.robot;
                this.conversationServer._customService.currentType = RongWebIMWidget.EnumCustomerStatus.robot;
                this.conversationServer.current.title = this.conversationServer._customService.robotName;
            }
        }

        packDisplaySendMessage(msg: any, messageType: string) {


            var ret = new RongIMLib.Message();
            var userinfo = new RongIMLib.UserInfo(this.providerdata.currentUserInfo.userId, this.providerdata.currentUserInfo.name || "我", this.providerdata.currentUserInfo.portraitUri);
            msg.user = userinfo;
            ret.content = msg;
            ret.conversationType = this.$scope.conversation.targetType;
            ret.targetId = this.$scope.conversation.targetId;
            ret.senderUserId = this.providerdata.currentUserInfo.userId;

            ret.messageDirection = RongIMLib.MessageDirection.SEND;
            ret.sentTime = (new Date()).getTime() - (RongIMLib.RongIMClient.getInstance().getDeltaTime() || 0);
            ret.messageType = messageType;

            return ret;
        }

    }


    angular.module("RongWebIMWidget.conversation")
        .controller("conversationController", ConversationController)
}
