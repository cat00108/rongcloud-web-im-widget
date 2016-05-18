var RongWebIMWidget;
(function (RongWebIMWidget) {
    var conversation;
    (function (conversation) {
        angular.module("RongWebIMWidget.conversation", []);
    })(conversation = RongWebIMWidget.conversation || (RongWebIMWidget.conversation = {}));
})(RongWebIMWidget || (RongWebIMWidget = {}));
var RongWebIMWidget;
(function (RongWebIMWidget) {
    var conversationlist;
    (function (conversationlist) {
        angular.module("RongWebIMWidget.conversationlist", []);
    })(conversationlist = RongWebIMWidget.conversationlist || (RongWebIMWidget.conversationlist = {}));
})(RongWebIMWidget || (RongWebIMWidget = {}));
var RongWebIMWidget;
(function (RongWebIMWidget) {
    angular.module("RongWebIMWidget", [
        "RongWebIMWidget.conversation",
        "RongWebIMWidget.conversationlist",
    ]);
})(RongWebIMWidget || (RongWebIMWidget = {}));
var RongWebIMWidget;
(function (RongWebIMWidget) {
    var DirectiveFactory = (function () {
        function DirectiveFactory() {
        }
        DirectiveFactory.GetFactoryFor = function (classType) {
            var factory = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                var newInstance = Object.create(classType.prototype);
                newInstance.constructor.apply(newInstance, args);
                return newInstance;
            };
            factory.$inject = classType.$inject;
            return factory;
        };
        return DirectiveFactory;
    })();
    RongWebIMWidget.DirectiveFactory = DirectiveFactory;
    var errSrc = (function () {
        function errSrc() {
        }
        errSrc.instance = function () {
            return new errSrc();
        };
        errSrc.prototype.link = function (scope, element, attrs) {
            if (!attrs["ngSrc"]) {
                attrs.$set('src', attrs["errSrc"]);
            }
            element.bind('error', function () {
                if (attrs["src"] != attrs["errSrc"]) {
                    attrs.$set('src', attrs["errSrc"]);
                }
            });
        };
        return errSrc;
    })();
    angular.module("RongWebIMWidget")
        .directive('errSrc', errSrc.instance)
        .filter('trustHtml', ["$sce", function ($sce) {
            return function (str) {
                return $sce.trustAsHtml(str);
            };
        }]).filter("historyTime", ["$filter", function ($filter) {
            return function (time) {
                var today = new Date();
                if (time.toDateString() === today.toDateString()) {
                    return $filter("date")(time, "HH:mm");
                }
                else if (time.toDateString() === new Date(today.setTime(today.getTime() - 1)).toDateString()) {
                    return "昨天" + $filter("date")(time, "HH:mm");
                }
                else {
                    return $filter("date")(time, "yyyy-MM-dd HH:mm");
                }
            };
        }]);
})(RongWebIMWidget || (RongWebIMWidget = {}));
var RongWebIMWidget;
(function (RongWebIMWidget) {
    var conversation;
    (function (conversation) {
        var ConversationController = (function () {
            function ConversationController($scope, conversationServer, WebIMWidget, conversationListServer, widgetConfig, providerdata) {
                this.$scope = $scope;
                this.conversationServer = conversationServer;
                this.WebIMWidget = WebIMWidget;
                this.conversationListServer = conversationListServer;
                this.widgetConfig = widgetConfig;
                this.providerdata = providerdata;
            }
            ConversationController.$inject = ["$scope",
                "conversationServer",
                "WebIMWidget",
                "conversationListServer",
                "widgetConfig",
                "providerdata",];
            return ConversationController;
        })();
    })(conversation = RongWebIMWidget.conversation || (RongWebIMWidget.conversation = {}));
})(RongWebIMWidget || (RongWebIMWidget = {}));
/// <reference path="../../../typings/tsd.d.ts"/>
/// <reference path="../../lib/RongIMLib.d.ts"/>
var RongWebIMWidget;
(function (RongWebIMWidget) {
    var conversation;
    (function (conversation_1) {
        var conversationServer = (function () {
            function conversationServer($q, providerdata) {
                this.$q = $q;
                this.providerdata = providerdata;
                this.current = new RongWebIMWidget.Conversation;
                this._cacheHistory = {};
            }
            conversationServer.prototype.unshiftHistoryMessages = function (id, type, item) {
                var arr = this._cacheHistory[type + "_" + id] = this._cacheHistory[type + "_" + id] || [];
                if (arr[0] && arr[0].sentTime && arr[0].panelType != RongWebIMWidget.PanelType.Time && item.sentTime) {
                    if (!RongWebIMWidget.Helper.timeCompare(arr[0].sentTime, item.sentTime)) {
                        arr.unshift(new RongWebIMWidget.TimePanl(arr[0].sentTime));
                    }
                }
                arr.unshift(item);
            };
            conversationServer.prototype._getHistoryMessages = function (targetType, targetId, number, reset) {
                var defer = this.$q.defer();
                RongIMLib.RongIMClient.getInstance().getHistoryMessages(targetType, targetId, reset ? 0 : null, number, {
                    onSuccess: function (data, has) {
                        var msglen = data.length;
                        while (msglen--) {
                            var msg = RongWebIMWidget.Message.convert(data[msglen]);
                            this.unshiftHistoryMessages(targetId, targetType, msg);
                            if (msg.content && this.providerdata.getUserInfo) {
                                (function (msg) {
                                    this.providerdata.getUserInfo(msg.senderUserId, {
                                        onSuccess: function (obj) {
                                            msg.content.userInfo = new RongWebIMWidget.UserInfo(obj.userId, obj.name, obj.portraitUri);
                                        }
                                    });
                                })(msg);
                            }
                        }
                        defer.resolve({ data: data, has: has });
                    },
                    onError: function (error) {
                        defer.reject(error);
                    }
                });
                return defer.promise;
            };
            conversationServer.prototype._addHistoryMessages = function (item) {
                var key = item.conversationType + "_" + item.targetId;
                var arr = this._cacheHistory[key]
                    = this._cacheHistory[key] || [];
                if (arr[arr.length - 1]
                    && arr[arr.length - 1].panelType != RongWebIMWidget.PanelType.Time
                    && arr[arr.length - 1].sentTime
                    && item.sentTime) {
                    if (!RongWebIMWidget.Helper.timeCompare(arr[arr.length - 1].sentTime, item.sentTime)) {
                        arr.push(new RongWebIMWidget.TimePanl(item.sentTime));
                    }
                }
                arr.push(item);
            };
            conversationServer.$inject = ["$q", "ProviderData"];
            return conversationServer;
        })();
        angular.module("RongWebIMWidget.conversation")
            .service("conversationServer", conversationServer);
    })(conversation = RongWebIMWidget.conversation || (RongWebIMWidget.conversation = {}));
})(RongWebIMWidget || (RongWebIMWidget = {}));
var RongWebIMWidget;
(function (RongWebIMWidget) {
    var conversationlist;
    (function (conversationlist) {
        var conversationListController = (function () {
            function conversationListController() {
            }
            return conversationListController;
        })();
        angular.module("RongWebIMWidget.conversationlist")
            .controller("conversationListController", conversationListController);
    })(conversationlist = RongWebIMWidget.conversationlist || (RongWebIMWidget.conversationlist = {}));
})(RongWebIMWidget || (RongWebIMWidget = {}));
/// <reference path="../../lib/window.d.ts"/>
var RongWebIMWidget;
(function (RongWebIMWidget) {
    var conversationlist;
    (function (conversationlist) {
        var rongConversationList = (function () {
            function rongConversationList() {
                this.restrict = "E";
                this.templateUrl = "./src/ts/conversationlist/conversationList.tpl.html";
                this.controller = "conversationListController";
            }
            rongConversationList.instance = function () {
                return new rongConversationList;
            };
            rongConversationList.prototype.link = function (scope, ele) {
                if (window["jQuery"] && window["jQuery"].nicescroll) {
                    $(ele).find(".rongcloud-content").niceScroll({
                        'cursorcolor': "#0099ff",
                        'cursoropacitymax': 1,
                        'touchbehavior': false,
                        'cursorwidth': "8px",
                        'cursorborder': "0",
                        'cursorborderradius': "5px"
                    });
                }
            };
            return rongConversationList;
        })();
        var conversationItem = (function () {
            function conversationItem(conversationServer, conversationListServer, RongIMSDKServer) {
                this.conversationServer = conversationServer;
                this.conversationListServer = conversationListServer;
                this.RongIMSDKServer = RongIMSDKServer;
                this.restrict = "E";
                this.scope = { item: "=" };
                this.template = '<div class="rongcloud-chatList">' +
                    '<div class="rongcloud-chat_item " ng-class="{\'online\':item.onLine}">' +
                    '<div class="rongcloud-ext">' +
                    '<p class="rongcloud-attr clearfix">' +
                    '<span class="rongcloud-badge" ng-show="item.unreadMessageCount>0">{{item.unreadMessageCount>99?"99+":item.unreadMessageCount}}</span>' +
                    '<i class="rongcloud-sprite rongcloud-no-remind" ng-click="remove($event)"></i>' +
                    '</p>' +
                    '</div>' +
                    '<div class="rongcloud-photo">' +
                    '<img class="rongcloud-img" ng-src="{{item.portraitUri}}" err-src="http://7xo1cb.com1.z0.glb.clouddn.com/rongcloudkefu2.png" alt="">' +
                    '<i ng-show="!!$parent.data.getOnlineStatus" class="rongcloud-Presence rongcloud-Presence--stacked rongcloud-Presence--mainBox"></i>' +
                    '</div>' +
                    '<div class="rongcloud-info">' +
                    '<h3 class="rongcloud-nickname">' +
                    '<span class="rongcloud-nickname_text" title="{{item.title}}">{{item.title}}</span>' +
                    '</h3>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
            conversationItem.prototype.link = function (scope, ele, attr) {
                var that = this;
                ele.on("click", function () {
                    that.conversationServer
                        .ChangeConversation(new RongWebIMWidget.Conversation(scope.item.targetType, scope.item.targetId, scope.item.title));
                    if (scope.item.unreadMessageCount > 0) {
                        that.RongIMSDKServer.clearUnreadCount(scope.item.targetType, scope.item.targetId);
                        that.RongIMSDKServer.sendReadReceiptMessage(scope.item.targetId, Number(scope.item.targetType));
                        that.conversationListServer.updateConversations();
                    }
                });
                scope.remove = function (e) {
                    e.stopPropagation();
                    that.RongIMSDKServer.removeConversation(scope.item.targetType, scope.item.targetId).then(function () {
                        if (that.conversationServer.current.targetType == scope.item.targetType
                            && that.conversationServer.current.targetId == scope.item.targetId) {
                        }
                        that.conversationListServer.updateConversations();
                    }, function (error) {
                        console.log(error);
                    });
                };
            };
            conversationItem.$inject = ["conversationServer",
                "conversationListServer",
                "RongIMSDKServer"];
            return conversationItem;
        })();
        angular.module("RongWebIMWidget.conversationlist")
            .directive("rongConversationList", rongConversationList.instance)
            .directive("conversationItem", RongWebIMWidget.DirectiveFactory.GetFactoryFor(conversationItem));
    })(conversationlist = RongWebIMWidget.conversationlist || (RongWebIMWidget.conversationlist = {}));
})(RongWebIMWidget || (RongWebIMWidget = {}));
var RongWebIMWidget;
(function (RongWebIMWidget) {
    var conversationlist;
    (function (conversationlist) {
        var ConversationListServer = (function () {
            function ConversationListServer($q, providerdata, widgetConfig, RongIMSDKServer, conversationServer) {
                this.$q = $q;
                this.providerdata = providerdata;
                this.widgetConfig = widgetConfig;
                this.RongIMSDKServer = RongIMSDKServer;
                this.conversationServer = conversationServer;
                this._conversationList = [];
                this._onlineStatus = [];
            }
            ConversationListServer.prototype.updateConversations = function () {
                var defer = this.$q.defer();
                var _this = this;
                RongIMLib.RongIMClient.getInstance().getConversationList({
                    onSuccess: function (data) {
                        _this._conversationList.splice(0, _this._conversationList.length);
                        for (var i = 0, len = data.length; i < len; i++) {
                            var con = RongWebIMWidget.Conversation.onvert(data[i]);
                            switch (con.targetType) {
                                case RongIMLib.ConversationType.PRIVATE:
                                    if (RongWebIMWidget.Helper.checkType(_this.providerdata.getUserInfo) == "function") {
                                        (function (a, b) {
                                            _this.providerdata.getUserInfo(a.targetId, {
                                                onSuccess: function (data) {
                                                    a.title = data.name;
                                                    a.portraitUri = data.portraitUri;
                                                    b.conversationTitle = data.name;
                                                    b.portraitUri = data.portraitUri;
                                                }
                                            });
                                        }(con, data[i]));
                                    }
                                    break;
                                case RongIMLib.ConversationType.GROUP:
                                    if (RongWebIMWidget.Helper.checkType(_this.providerdata.getGroupInfo) == "function") {
                                        (function (a, b) {
                                            _this.providerdata.getGroupInfo(a.targetId, {
                                                onSuccess: function (data) {
                                                    a.title = data.name;
                                                    a.portraitUri = data.portraitUri;
                                                    b.conversationTitle = data.name;
                                                    b.portraitUri = data.portraitUri;
                                                }
                                            });
                                        }(con, data[i]));
                                    }
                                    break;
                                case RongIMLib.ConversationType.CHATROOM:
                                    break;
                            }
                            _this._conversationList.push(con);
                        }
                        _this._onlineStatus.forEach(function (item) {
                            var conv = this.getConversation(RongWebIMWidget.EnumConversationType.PRIVATE, item.id);
                            conv && (conv.onLine = item.status);
                        });
                        if (_this.widgetConfig.displayConversationList) {
                            RongIMLib.RongIMClient.getInstance().getTotalUnreadCount({
                                onSuccess: function (num) {
                                    _this.providerdata.totalUnreadCount = num || 0;
                                    defer.resolve();
                                    _this._refreshConversationList();
                                },
                                onError: function () {
                                }
                            });
                        }
                        else {
                            var cu = _this.conversationServer.current;
                            cu && _this.RongIMSDKServer.getConversation(cu.targetType, cu.targetId).then(function (conv) {
                                if (conv && conv.unreadMessageCount) {
                                    _this.providerdata.totalUnreadCount = conv.unreadMessageCount || 0;
                                    defer.resolve();
                                    _this._refreshConversationList();
                                }
                                else {
                                    _this.providerdata.totalUnreadCount = 0;
                                    defer.resolve();
                                    _this._refreshConversationList();
                                }
                            });
                        }
                    },
                    onError: function (error) {
                        defer.reject(error);
                    }
                }, null);
                return defer.promise;
            };
            ConversationListServer.prototype._refreshConversationList = function () {
                //TODO: 暂时不实现 updateConversation 时不改变数据源
            };
            ConversationListServer.prototype._getConversation = function (type, id) {
                for (var i = 0, len = this._conversationList.length; i < len; i++) {
                    if (this._conversationList[i].targetType == type && this._conversationList[i].targetId == id) {
                        return this._conversationList[i];
                    }
                }
                return null;
            };
            ConversationListServer.$inject = ["$q",
                "ProviderData",
                "WidgetConfig",
                "RongIMSDKServer",
                "conversationServer"];
            return ConversationListServer;
        })();
        angular.module("RongWebIMWidget.conversationlist")
            .service("ConversationListServer", ConversationListServer);
    })(conversationlist = RongWebIMWidget.conversationlist || (RongWebIMWidget.conversationlist = {}));
})(RongWebIMWidget || (RongWebIMWidget = {}));
var RongWebIMWidget;
(function (RongWebIMWidget) {
    // var eleConversationListWidth = 195,
    //     eleminbtnHeight = 50,
    //     eleminbtnWidth = 195,
    //     spacing = 3;
    var WebIMWidget = (function () {
        function WebIMWidget() {
            // static $inject: string[] = ["$q",
            //     // "conversationServer",
            //     // "conversationListServer",
            //     // "ProviderData",
            //     // "WidgetConfig",
            //     "RongIMSDKServer"];
            this.display = false;
            this.EnumConversationListPosition = RongWebIMWidget.EnumConversationListPosition;
        }
        // constructor(private $q:ng.IQService,
        //   private conversationServer:conversationServer) {
        //
        // }
        WebIMWidget.prototype.init = function (config) {
        };
        return WebIMWidget;
    })();
    RongWebIMWidget.WebIMWidget = WebIMWidget;
    angular.module("RongWebIMWidget")
        .service("WebIMWidget", WebIMWidget);
})(RongWebIMWidget || (RongWebIMWidget = {}));
/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../lib/window.d.ts"/>
var RongWebIMWidget;
(function (RongWebIMWidget) {
    runApp.$inject = ["$http", "WebIMWidget", "WidgetConfig"];
    function runApp($http, WebIMWidget, WidgetConfig) {
        var protocol = location.protocol === "https:" ? "https:" : "http:";
        $script.get(protocol + "//cdn.ronghub.com/RongIMLib-2.1.0.min.js", function () {
            $script.get(protocol + "//cdn.ronghub.com/RongEmoji-2.0.15.min.js", function () {
                RongIMLib.RongIMEmoji && RongIMLib.RongIMEmoji.init();
            });
            $script.get(protocol + "//cdn.ronghub.com/RongIMVoice-2.0.15.min.js", function () {
                RongIMLib.RongIMVoice && RongIMLib.RongIMVoice.init();
            });
            if (WidgetConfig._config) {
                WebIMWidget.init(WidgetConfig._config);
            }
        });
        $script.get(protocol + "//cdn.bootcss.com/plupload/2.1.8/plupload.full.min.js", function () { });
    }
    angular.module("RongWebIMWidget").run(runApp);
})(RongWebIMWidget || (RongWebIMWidget = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/tsd.d.ts"/>
var RongWebIMWidget;
(function (RongWebIMWidget) {
    (function (EnumConversationListPosition) {
        EnumConversationListPosition[EnumConversationListPosition["left"] = 0] = "left";
        EnumConversationListPosition[EnumConversationListPosition["right"] = 1] = "right";
    })(RongWebIMWidget.EnumConversationListPosition || (RongWebIMWidget.EnumConversationListPosition = {}));
    var EnumConversationListPosition = RongWebIMWidget.EnumConversationListPosition;
    (function (EnumConversationType) {
        EnumConversationType[EnumConversationType["PRIVATE"] = 1] = "PRIVATE";
        EnumConversationType[EnumConversationType["DISCUSSION"] = 2] = "DISCUSSION";
        EnumConversationType[EnumConversationType["GROUP"] = 3] = "GROUP";
        EnumConversationType[EnumConversationType["CHATROOM"] = 4] = "CHATROOM";
        EnumConversationType[EnumConversationType["CUSTOMER_SERVICE"] = 5] = "CUSTOMER_SERVICE";
        EnumConversationType[EnumConversationType["SYSTEM"] = 6] = "SYSTEM";
        EnumConversationType[EnumConversationType["APP_PUBLIC_SERVICE"] = 7] = "APP_PUBLIC_SERVICE";
        EnumConversationType[EnumConversationType["PUBLIC_SERVICE"] = 8] = "PUBLIC_SERVICE";
    })(RongWebIMWidget.EnumConversationType || (RongWebIMWidget.EnumConversationType = {}));
    var EnumConversationType = RongWebIMWidget.EnumConversationType;
    (function (MessageDirection) {
        MessageDirection[MessageDirection["SEND"] = 1] = "SEND";
        MessageDirection[MessageDirection["RECEIVE"] = 2] = "RECEIVE";
    })(RongWebIMWidget.MessageDirection || (RongWebIMWidget.MessageDirection = {}));
    var MessageDirection = RongWebIMWidget.MessageDirection;
    (function (ReceivedStatus) {
        ReceivedStatus[ReceivedStatus["READ"] = 1] = "READ";
        ReceivedStatus[ReceivedStatus["LISTENED"] = 2] = "LISTENED";
        ReceivedStatus[ReceivedStatus["DOWNLOADED"] = 4] = "DOWNLOADED";
    })(RongWebIMWidget.ReceivedStatus || (RongWebIMWidget.ReceivedStatus = {}));
    var ReceivedStatus = RongWebIMWidget.ReceivedStatus;
    (function (SentStatus) {
        /**
         * 发送中。
         */
        SentStatus[SentStatus["SENDING"] = 10] = "SENDING";
        /**
         * 发送失败。
         */
        SentStatus[SentStatus["FAILED"] = 20] = "FAILED";
        /**
         * 已发送。
         */
        SentStatus[SentStatus["SENT"] = 30] = "SENT";
        /**
         * 对方已接收。
         */
        SentStatus[SentStatus["RECEIVED"] = 40] = "RECEIVED";
        /**
         * 对方已读。
         */
        SentStatus[SentStatus["READ"] = 50] = "READ";
        /**
         * 对方已销毁。
         */
        SentStatus[SentStatus["DESTROYED"] = 60] = "DESTROYED";
    })(RongWebIMWidget.SentStatus || (RongWebIMWidget.SentStatus = {}));
    var SentStatus = RongWebIMWidget.SentStatus;
    var AnimationType;
    (function (AnimationType) {
        AnimationType[AnimationType["left"] = 1] = "left";
        AnimationType[AnimationType["right"] = 2] = "right";
        AnimationType[AnimationType["top"] = 3] = "top";
        AnimationType[AnimationType["bottom"] = 4] = "bottom";
    })(AnimationType || (AnimationType = {}));
    (function (InputPanelType) {
        InputPanelType[InputPanelType["person"] = 0] = "person";
        InputPanelType[InputPanelType["robot"] = 1] = "robot";
        InputPanelType[InputPanelType["robotSwitchPerson"] = 2] = "robotSwitchPerson";
        InputPanelType[InputPanelType["notService"] = 4] = "notService";
    })(RongWebIMWidget.InputPanelType || (RongWebIMWidget.InputPanelType = {}));
    var InputPanelType = RongWebIMWidget.InputPanelType;
    RongWebIMWidget.MessageType = {
        DiscussionNotificationMessage: "DiscussionNotificationMessage ",
        TextMessage: "TextMessage",
        ImageMessage: "ImageMessage",
        VoiceMessage: "VoiceMessage",
        RichContentMessage: "RichContentMessage",
        HandshakeMessage: "HandshakeMessage",
        UnknownMessage: "UnknownMessage",
        SuspendMessage: "SuspendMessage",
        LocationMessage: "LocationMessage",
        InformationNotificationMessage: "InformationNotificationMessage",
        ContactNotificationMessage: "ContactNotificationMessage",
        ProfileNotificationMessage: "ProfileNotificationMessage",
        CommandNotificationMessage: "CommandNotificationMessage",
        HandShakeResponseMessage: "HandShakeResponseMessage",
        ChangeModeResponseMessage: "ChangeModeResponseMessage",
        TerminateMessage: "TerminateMessage",
        CustomerStatusUpdateMessage: "CustomerStatusUpdateMessage",
        ReadReceiptMessage: "ReadReceiptMessage"
    };
    (function (PanelType) {
        PanelType[PanelType["Message"] = 1] = "Message";
        PanelType[PanelType["InformationNotification"] = 2] = "InformationNotification";
        PanelType[PanelType["System"] = 103] = "System";
        PanelType[PanelType["Time"] = 104] = "Time";
        PanelType[PanelType["getHistory"] = 105] = "getHistory";
        PanelType[PanelType["getMore"] = 106] = "getMore";
        PanelType[PanelType["Other"] = 0] = "Other";
    })(RongWebIMWidget.PanelType || (RongWebIMWidget.PanelType = {}));
    var PanelType = RongWebIMWidget.PanelType;
    var ChatPanel = (function () {
        function ChatPanel(type) {
            this.panelType = type;
        }
        return ChatPanel;
    })();
    RongWebIMWidget.ChatPanel = ChatPanel;
    var TimePanl = (function (_super) {
        __extends(TimePanl, _super);
        function TimePanl(date) {
            _super.call(this, PanelType.Time);
            this.sentTime = date;
        }
        return TimePanl;
    })(ChatPanel);
    RongWebIMWidget.TimePanl = TimePanl;
    var GetHistoryPanel = (function (_super) {
        __extends(GetHistoryPanel, _super);
        function GetHistoryPanel() {
            _super.call(this, PanelType.getHistory);
        }
        return GetHistoryPanel;
    })(ChatPanel);
    RongWebIMWidget.GetHistoryPanel = GetHistoryPanel;
    var GetMoreMessagePanel = (function (_super) {
        __extends(GetMoreMessagePanel, _super);
        function GetMoreMessagePanel() {
            _super.call(this, PanelType.getMore);
        }
        return GetMoreMessagePanel;
    })(ChatPanel);
    RongWebIMWidget.GetMoreMessagePanel = GetMoreMessagePanel;
    var TimePanel = (function (_super) {
        __extends(TimePanel, _super);
        function TimePanel(time) {
            _super.call(this, PanelType.Time);
            this.sentTime = time;
        }
        return TimePanel;
    })(ChatPanel);
    RongWebIMWidget.TimePanel = TimePanel;
    var Message = (function (_super) {
        __extends(Message, _super);
        function Message(content, conversationType, extra, objectName, messageDirection, messageId, receivedStatus, receivedTime, senderUserId, sentStatus, sentTime, targetId, messageType) {
            _super.call(this, PanelType.Message);
        }
        Message.convert = function (SDKmsg) {
            var msg = new Message();
            msg.conversationType = SDKmsg.conversationType;
            msg.extra = SDKmsg.extra;
            msg.objectName = SDKmsg.objectName;
            msg.messageDirection = SDKmsg.messageDirection;
            msg.messageId = SDKmsg.messageId;
            msg.receivedStatus = SDKmsg.receivedStatus;
            msg.receivedTime = new Date(SDKmsg.receivedTime);
            msg.senderUserId = SDKmsg.senderUserId;
            msg.sentStatus = SDKmsg.sendStatusMessage;
            msg.sentTime = new Date(SDKmsg.sentTime);
            msg.targetId = SDKmsg.targetId;
            msg.messageType = SDKmsg.messageType;
            switch (msg.messageType) {
                case RongWebIMWidget.MessageType.TextMessage:
                    var texmsg = new TextMessage();
                    var content = SDKmsg.content.content;
                    if (RongIMLib.RongIMEmoji && RongIMLib.RongIMEmoji.emojiToHTML) {
                        content = RongIMLib.RongIMEmoji.emojiToHTML(content);
                    }
                    texmsg.content = content;
                    msg.content = texmsg;
                    break;
                case RongWebIMWidget.MessageType.ImageMessage:
                    var image = new ImageMessage();
                    var content = SDKmsg.content.content || "";
                    if (content.indexOf("base64,") == -1) {
                        content = "data:image/png;base64," + content;
                    }
                    image.content = content;
                    image.imageUri = SDKmsg.content.imageUri;
                    msg.content = image;
                    break;
                case RongWebIMWidget.MessageType.VoiceMessage:
                    var voice = new VoiceMessage();
                    voice.content = SDKmsg.content.content;
                    voice.duration = SDKmsg.content.duration;
                    msg.content = voice;
                    break;
                case RongWebIMWidget.MessageType.RichContentMessage:
                    var rich = new RichContentMessage();
                    rich.content = SDKmsg.content.content;
                    rich.title = SDKmsg.content.title;
                    rich.imageUri = SDKmsg.content.imageUri;
                    msg.content = rich;
                    break;
                case RongWebIMWidget.MessageType.LocationMessage:
                    var location = new LocationMessage();
                    var content = SDKmsg.content.content || "";
                    if (content.indexOf("base64,") == -1) {
                        content = "data:image/png;base64," + content;
                    }
                    location.content = content;
                    location.latiude = SDKmsg.content.latiude;
                    location.longitude = SDKmsg.content.longitude;
                    location.poi = SDKmsg.content.poi;
                    msg.content = location;
                    break;
                case RongWebIMWidget.MessageType.InformationNotificationMessage:
                    var info = new InformationNotificationMessage();
                    msg.panelType = 2; //灰条消息
                    info.content = SDKmsg.content.message;
                    msg.content = info;
                    break;
                case RongWebIMWidget.MessageType.DiscussionNotificationMessage:
                    var discussion = new DiscussionNotificationMessage();
                    discussion.extension = SDKmsg.content.extension;
                    discussion.operation = SDKmsg.content.operation;
                    discussion.type = SDKmsg.content.type;
                    discussion.isHasReceived = SDKmsg.content.isHasReceived;
                    msg.content = discussion;
                case RongWebIMWidget.MessageType.HandShakeResponseMessage:
                    var handshak = new HandShakeResponseMessage();
                    handshak.status = SDKmsg.content.status;
                    handshak.msg = SDKmsg.content.msg;
                    handshak.data = SDKmsg.content.data;
                    msg.content = handshak;
                    break;
                case RongWebIMWidget.MessageType.ChangeModeResponseMessage:
                    var change = new ChangeModeResponseMessage();
                    change.code = SDKmsg.content.code;
                    change.data = SDKmsg.content.data;
                    change.status = SDKmsg.content.status;
                    msg.content = change;
                    break;
                case RongWebIMWidget.MessageType.CustomerStatusUpdateMessage:
                    var up = new CustomerStatusUpdateMessage();
                    up.serviceStatus = SDKmsg.content.serviceStatus;
                    msg.content = up;
                    break;
                case RongWebIMWidget.MessageType.TerminateMessage:
                    var ter = new TerminateMessage();
                    ter.code = SDKmsg.content.code;
                    msg.content = ter;
                    break;
                default:
                    console.log("未处理消息类型:" + SDKmsg.messageType);
                    break;
            }
            if (msg.content) {
                msg.content.userInfo = SDKmsg.content.user;
            }
            return msg;
        };
        Message.messageToNotification = function (msg) {
            if (!msg)
                return null;
            var msgtype = msg.messageType, msgContent;
            if (msgtype == RongWebIMWidget.MessageType.ImageMessage) {
                msgContent = "[图片]";
            }
            else if (msgtype == RongWebIMWidget.MessageType.LocationMessage) {
                msgContent = "[位置]";
            }
            else if (msgtype == RongWebIMWidget.MessageType.VoiceMessage) {
                msgContent = "[语音]";
            }
            else if (msgtype == RongWebIMWidget.MessageType.ContactNotificationMessage || msgtype == RongWebIMWidget.MessageType.CommandNotificationMessage) {
                msgContent = "[通知消息]";
            }
            else if (msg.objectName == "RC:GrpNtf") {
                var data = msg.content.message.content.data.data;
                switch (msg.content.message.content.operation) {
                    case "Add":
                        msgContent = data.targetUserDisplayNames ? (data.targetUserDisplayNames.join("、") + " 加入了群组") : "加入群组";
                        break;
                    case "Quit":
                        msgContent = data.operatorNickname + " 退出了群组";
                        break;
                    case "Kicked":
                        //由于之前数据问题
                        msgContent = data.targetUserDisplayNames ? (data.targetUserDisplayNames.join("、") + " 被剔出群组") : "移除群组";
                        break;
                    case "Rename":
                        msgContent = data.operatorNickname + " 修改了群名称";
                        break;
                    case "Create":
                        msgContent = data.operatorNickname + " 创建了群组";
                        break;
                    case "Dismiss":
                        msgContent = data.operatorNickname + " 解散了群组 " + data.targetGroupName;
                        break;
                    default:
                        break;
                }
            }
            else {
                msgContent = msg.content ? msg.content.content : "";
                msgContent = RongIMLib.RongIMEmoji.emojiToSymbol(msgContent);
                msgContent = msgContent.replace(/\n/g, " ");
                msgContent = msgContent.replace(/([\w]{49,50})/g, "$1 ");
            }
            return msgContent;
        };
        return Message;
    })(ChatPanel);
    RongWebIMWidget.Message = Message;
    var UserInfo = (function () {
        function UserInfo(userId, name, portraitUri) {
            this.userId = userId;
            this.name = name;
            this.portraitUri = portraitUri;
        }
        return UserInfo;
    })();
    RongWebIMWidget.UserInfo = UserInfo;
    var GroupInfo = (function () {
        function GroupInfo(userId, name, portraitUri) {
            this.userId = userId;
            this.name = name;
            this.portraitUri = portraitUri;
        }
        return GroupInfo;
    })();
    RongWebIMWidget.GroupInfo = GroupInfo;
    var TextMessage = (function () {
        function TextMessage(msg) {
            msg = msg || {};
            this.content = msg.content;
            this.userInfo = msg.userInfo;
        }
        return TextMessage;
    })();
    RongWebIMWidget.TextMessage = TextMessage;
    var HandShakeResponseMessage = (function () {
        function HandShakeResponseMessage() {
        }
        return HandShakeResponseMessage;
    })();
    RongWebIMWidget.HandShakeResponseMessage = HandShakeResponseMessage;
    var ChangeModeResponseMessage = (function () {
        function ChangeModeResponseMessage() {
        }
        return ChangeModeResponseMessage;
    })();
    RongWebIMWidget.ChangeModeResponseMessage = ChangeModeResponseMessage;
    var TerminateMessage = (function () {
        function TerminateMessage() {
        }
        return TerminateMessage;
    })();
    RongWebIMWidget.TerminateMessage = TerminateMessage;
    var CustomerStatusUpdateMessage = (function () {
        function CustomerStatusUpdateMessage() {
        }
        return CustomerStatusUpdateMessage;
    })();
    RongWebIMWidget.CustomerStatusUpdateMessage = CustomerStatusUpdateMessage;
    var InformationNotificationMessage = (function () {
        function InformationNotificationMessage() {
        }
        return InformationNotificationMessage;
    })();
    RongWebIMWidget.InformationNotificationMessage = InformationNotificationMessage;
    var ImageMessage = (function () {
        function ImageMessage() {
        }
        return ImageMessage;
    })();
    RongWebIMWidget.ImageMessage = ImageMessage;
    var VoiceMessage = (function () {
        function VoiceMessage() {
        }
        return VoiceMessage;
    })();
    RongWebIMWidget.VoiceMessage = VoiceMessage;
    var LocationMessage = (function () {
        function LocationMessage() {
        }
        return LocationMessage;
    })();
    RongWebIMWidget.LocationMessage = LocationMessage;
    var RichContentMessage = (function () {
        function RichContentMessage() {
        }
        return RichContentMessage;
    })();
    RongWebIMWidget.RichContentMessage = RichContentMessage;
    var DiscussionNotificationMessage = (function () {
        function DiscussionNotificationMessage() {
        }
        return DiscussionNotificationMessage;
    })();
    RongWebIMWidget.DiscussionNotificationMessage = DiscussionNotificationMessage;
    var Conversation = (function () {
        function Conversation(targetType, targetId, title) {
            this.targetType = targetType;
            this.targetId = targetId;
            this.title = title || "";
        }
        Conversation.onvert = function (item) {
            var conver = new Conversation();
            conver.targetId = item.targetId;
            conver.targetType = item.conversationType;
            conver.title = item.conversationTitle;
            conver.portraitUri = item.senderPortraitUri;
            conver.unreadMessageCount = item.unreadMessageCount;
            return conver;
        };
        return Conversation;
    })();
    RongWebIMWidget.Conversation = Conversation;
    var userAgent = window.navigator.userAgent;
    var Helper = (function () {
        function Helper() {
        }
        Helper.timeCompare = function (first, second) {
            var pre = first.toString();
            var cur = second.toString();
            return pre.substring(0, pre.lastIndexOf(":")) == cur.substring(0, cur.lastIndexOf(":"));
        };
        Helper.checkType = function (obj) {
            var type = Object.prototype.toString.call(obj);
            return type.substring(8, type.length - 1).toLowerCase();
        };
        Helper.browser = {
            version: (userAgent.match(/.+(?:rv|it|ra|chrome|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
            safari: /webkit/.test(userAgent),
            opera: /opera|opr/.test(userAgent),
            msie: /msie|trident/.test(userAgent) && !/opera/.test(userAgent),
            chrome: /chrome/.test(userAgent),
            mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit|like gecko)/.test(userAgent)
        };
        Helper.getFocus = function (obj) {
            obj.focus();
            if (obj.createTextRange) {
                var rtextRange = obj.createTextRange();
                rtextRange.moveStart('character', obj.value.length);
                rtextRange.collapse(true);
                rtextRange.select();
            }
            else if (obj.selectionStart) {
                obj.selectionStart = obj.value.length;
            }
            else if (window.getSelection && obj.lastChild) {
                var sel = window.getSelection();
                var tempRange = document.createRange();
                if (Helper.browser.msie) {
                    tempRange.setStart(obj.lastChild, obj.lastChild.length);
                }
                else {
                    tempRange.setStart(obj.firstChild, obj.firstChild.length);
                }
                sel.removeAllRanges();
                sel.addRange(tempRange);
            }
        };
        Helper.ImageHelper = {
            getThumbnail: function (obj, area, callback) {
                var canvas = document.createElement("canvas"), context = canvas.getContext('2d');
                var img = new Image();
                img.onload = function () {
                    var target_w;
                    var target_h;
                    var imgarea = img.width * img.height;
                    if (imgarea > area) {
                        var scale = Math.sqrt(imgarea / area);
                        scale = Math.ceil(scale * 100) / 100;
                        target_w = img.width / scale;
                        target_h = img.height / scale;
                    }
                    else {
                        target_w = img.width;
                        target_h = img.height;
                    }
                    canvas.width = target_w;
                    canvas.height = target_h;
                    context.drawImage(img, 0, 0, target_w, target_h);
                    try {
                        var _canvas = canvas.toDataURL("image/jpeg", 0.5);
                        _canvas = _canvas.substr(23);
                        callback(obj, _canvas);
                    }
                    catch (e) {
                        callback(obj, null);
                    }
                };
                img.src = Helper.ImageHelper.getFullPath(obj);
            },
            getFullPath: function (file) {
                window.URL = window.URL || window.webkitURL;
                if (window.URL && window.URL.createObjectURL) {
                    return window.URL.createObjectURL(file);
                }
                else {
                    return null;
                }
            }
        };
        Helper.CookieHelper = {
            setCookie: function (name, value, exires) {
                if (exires) {
                    var date = new Date();
                    date.setDate(date.getDate() + exires);
                    document.cookie = name + "=" + encodeURI(value) + ";expires=" + date.toUTCString();
                }
                else {
                    document.cookie = name + "=" + encodeURI(value) + ";";
                }
            },
            getCookie: function (name) {
                var start = document.cookie.indexOf(name + "=");
                if (start != -1) {
                    var end = document.cookie.indexOf(";", start);
                    if (end == -1) {
                        end = document.cookie.length;
                    }
                    return decodeURI(document.cookie.substring(start + name.length + 1, end));
                }
                else {
                    return "";
                }
            },
            removeCookie: function (name) {
                var con = this.getCookie(name);
                if (con) {
                    this.setCookie(name, "con", -1);
                }
            }
        };
        return Helper;
    })();
    RongWebIMWidget.Helper = Helper;
    var NotificationHelper = (function () {
        function NotificationHelper() {
        }
        NotificationHelper.isNotificationSupported = function () {
            return typeof Notification === "function";
        };
        NotificationHelper.requestPermission = function () {
            if (!NotificationHelper.isNotificationSupported()) {
                return;
            }
            Notification.requestPermission(function (status) {
            });
        };
        NotificationHelper.onclick = function (n) { };
        NotificationHelper.showNotification = function (config) {
            if (!NotificationHelper.isNotificationSupported()) {
                console.log('the current browser does not support Notification API');
                return;
            }
            if (Notification.permission !== "granted") {
                console.log('the current page has not been granted for notification');
                return;
            }
            if (!NotificationHelper.desktopNotification) {
                return;
            }
            var title = config.title;
            delete config.title;
            var n = new Notification(title, config);
            n.onshow = function () {
                setTimeout(function () {
                    n.close();
                }, 5000);
            };
            n.onclick = function () {
                window.focus();
                NotificationHelper.onclick(n);
                n.close();
            };
            n.onerror = function () {
            };
            n.onclose = function () {
            };
        };
        NotificationHelper.desktopNotification = true;
        return NotificationHelper;
    })();
    RongWebIMWidget.NotificationHelper = NotificationHelper;
})(RongWebIMWidget || (RongWebIMWidget = {}));
/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../lib/RongIMLib.d.ts"/>
var RongWebIMWidget;
(function (RongWebIMWidget) {
    var RongIMSDKServer = (function () {
        function RongIMSDKServer($q) {
            var _this = this;
            this.$q = $q;
            this.getConversation = function (type, targetId) {
                var defer = _this.$q.defer();
                RongIMLib.RongIMClient.getInstance().getConversation(Number(type), targetId, {
                    onSuccess: function (data) {
                        defer.resolve(data);
                    },
                    onError: function () {
                        defer.reject();
                    }
                });
                return defer.promise;
            };
        }
        RongIMSDKServer.prototype.init = function (appkey) {
            RongIMLib.RongIMClient.init(appkey);
        };
        RongIMSDKServer.prototype.connect = function (token) {
            var defer = this.$q.defer();
            RongIMLib.RongIMClient.connect(token, {
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onTokenIncorrect: function () {
                    defer.reject({ tokenError: true });
                },
                onError: function (errorCode) {
                    defer.reject({ errorCode: errorCode });
                    var info = '';
                    switch (errorCode) {
                        case RongIMLib.ErrorCode.TIMEOUT:
                            info = '连接超时';
                            break;
                        case RongIMLib.ErrorCode.UNKNOWN:
                            info = '未知错误';
                            break;
                        case RongIMLib.ConnectionState.UNACCEPTABLE_PROTOCOL_VERSION:
                            info = '不可接受的协议版本';
                            break;
                        case RongIMLib.ConnectionState.IDENTIFIER_REJECTED:
                            info = 'appkey不正确';
                            break;
                        case RongIMLib.ConnectionState.SERVER_UNAVAILABLE:
                            info = '服务器不可用';
                            break;
                        case RongIMLib.ConnectionState.NOT_AUTHORIZED:
                            info = '未认证';
                            break;
                        case RongIMLib.ConnectionState.REDIRECT:
                            info = '重新获取导航';
                            break;
                        case RongIMLib.ConnectionState.APP_BLOCK_OR_DELETE:
                            info = '应用已被封禁或已被删除';
                            break;
                        case RongIMLib.ConnectionState.BLOCK:
                            info = '用户被封禁';
                            break;
                    }
                    console.log("失败:" + info);
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.prototype.setOnReceiveMessageListener = function (option) {
            RongIMLib.RongIMClient.setOnReceiveMessageListener(option);
        };
        RongIMSDKServer.prototype.setConnectionStatusListener = function (option) {
            RongIMLib.RongIMClient.setConnectionStatusListener(option);
        };
        RongIMSDKServer.prototype.sendReadReceiptMessage = function (targetId, type) {
            RongIMLib.RongIMClient.getInstance()
                .getConversation(Number(type), targetId, {
                onSuccess: function (data) {
                    if (data) {
                        var read = RongIMLib.ReadReceiptMessage
                            .obtain(data.latestMessage.messageUId, data.latestMessage.sentTime, "1");
                        this.sendMessage(type, targetId, read);
                    }
                },
                onError: function () {
                }
            });
        };
        RongIMSDKServer.prototype.sendMessage = function (conver, targetId, content) {
            var defer = this.$q.defer();
            RongIMLib.RongIMClient.getInstance().sendMessage(+conver, targetId, content, {
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onError: function (errorCode, message) {
                    defer.reject({ errorCode: errorCode, message: message });
                    var info = '';
                    switch (errorCode) {
                        case RongIMLib.ErrorCode.TIMEOUT:
                            info = '超时';
                            break;
                        case RongIMLib.ErrorCode.UNKNOWN:
                            info = '未知错误';
                            break;
                        case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
                            info = '在黑名单中，无法向对方发送消息';
                            break;
                        case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
                            info = '不在讨论组中';
                            break;
                        case RongIMLib.ErrorCode.NOT_IN_GROUP:
                            info = '不在群组中';
                            break;
                        case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
                            info = '不在聊天室中';
                            break;
                        default:
                            info = "";
                            break;
                    }
                    console.log('发送失败:' + info);
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.prototype.reconnect = function (callback) {
            RongIMLib.RongIMClient.reconnect(callback);
        };
        RongIMSDKServer.prototype.disconnect = function () {
            RongIMLib.RongIMClient.getInstance().disconnect();
        };
        RongIMSDKServer.prototype.logout = function () {
            if (RongIMLib && RongIMLib.RongIMClient) {
                RongIMLib.RongIMClient.getInstance().logout();
            }
        };
        RongIMSDKServer.prototype.clearUnreadCount = function (type, targetid) {
            var defer = this.$q.defer();
            RongIMLib.RongIMClient.getInstance()
                .clearUnreadCount(type, targetid, {
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onError: function (error) {
                    defer.reject(error);
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.prototype.getTotalUnreadCount = function () {
            var defer = this.$q.defer();
            RongIMLib.RongIMClient.getInstance()
                .getTotalUnreadCount({
                onSuccess: function (num) {
                    defer.resolve(num);
                },
                onError: function () {
                    defer.reject();
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.prototype.getConversationList = function () {
            var defer = this.$q.defer();
            RongIMLib.RongIMClient.getInstance()
                .getConversationList({
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onError: function (error) {
                    defer.reject(error);
                }
            }, null);
            return defer.promise;
        };
        RongIMSDKServer.prototype.removeConversation = function (type, targetId) {
            var defer = this.$q.defer();
            RongIMLib.RongIMClient.getInstance()
                .removeConversation(type, targetId, {
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onError: function (error) {
                    defer.reject(error);
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.prototype.getHistoryMessages = function (type, targetId, num) {
            var defer = this.$q.defer();
            RongIMLib.RongIMClient.getInstance()
                .getHistoryMessages(type, targetId, null, num, {
                onSuccess: function (data, has) {
                    defer.resolve({
                        data: data,
                        has: has
                    });
                },
                onError: function (error) {
                    defer.reject(error);
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.prototype.getDraft = function (type, targetId) {
            return RongIMLib.RongIMClient.getInstance()
                .getTextMessageDraft(type, targetId) || "";
        };
        RongIMSDKServer.prototype.setDraft = function (type, targetId, value) {
            return RongIMLib.RongIMClient.getInstance()
                .saveTextMessageDraft(type, targetId, value);
        };
        RongIMSDKServer.prototype.clearDraft = function (type, targetId) {
            return RongIMLib.RongIMClient.getInstance()
                .clearTextMessageDraft(type, targetId);
        };
        RongIMSDKServer.$inject = ["$q"];
        return RongIMSDKServer;
    })();
    RongWebIMWidget.RongIMSDKServer = RongIMSDKServer;
    angular.module("RongWebIMWidget")
        .service("RongIMSDKServer", RongIMSDKServer);
})(RongWebIMWidget || (RongWebIMWidget = {}));
/// <reference path="../../typings/tsd.d.ts"/>
var RongWebIMWidget;
(function (RongWebIMWidget) {
    var ProviderData = (function () {
        function ProviderData() {
            this._cacheUserInfo = [];
            this.totalUnreadCount = 0;
            this.connectionState = 0;
            this.voiceSound = false;
        }
        ProviderData.prototype._getCacheUserInfo = function (id) {
            for (var i = 0, len = this._cacheUserInfo.length; i < len; i++) {
                if (this._cacheUserInfo[i].userId == id) {
                    return this._cacheUserInfo[i];
                }
            }
            return null;
        };
        ProviderData.prototype._addUserInfo = function (user) {
            var olduser = this._getCacheUserInfo(user.userId);
            if (olduser) {
                angular.extend(olduser, user);
            }
            else {
                this._cacheUserInfo.push(user);
            }
        };
        return ProviderData;
    })();
    RongWebIMWidget.ProviderData = ProviderData;
    var WidgetConfig = (function () {
        function WidgetConfig() {
            this.displayConversationList = false;
            this.conversationListPosition = RongWebIMWidget.EnumConversationListPosition.left;
            this.displayMinButton = true;
            this.desktopNotification = false;
            this.reminder = "最近联系人";
            this.voiceNotification = false;
            this.__isKefu = false;
        }
        return WidgetConfig;
    })();
    RongWebIMWidget.WidgetConfig = WidgetConfig;
    angular.module("RongWebIMWidget")
        .service("ProviderData", ProviderData)
        .service("WidgetConfig", WidgetConfig);
})(RongWebIMWidget || (RongWebIMWidget = {}));

angular.module('RongWebIMWidget').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./src/tsrefactor/conversation/conversation.tpl.html',
    "<div id=rong-conversation class=\"rongcloud-kefuChatBox rongcloud-both rongcloud-am-fade-and-slide-top\" ng-show=showSelf ng-class=\"{'fullScreen':resoures.fullScreen}\"><evaluatedir type=evaluate.type display=evaluate.showevaluate confirm=evaluate.onConfirm(data) cancle=evaluate.onCancle()></evaluatedir><div class=rongcloud-kefuChat><div id=header class=\"rongcloud-rong-header rongcloud-blueBg rongcloud-online\"><div class=\"rongcloud-infoBar rongcloud-pull-left\"><div class=rongcloud-infoBarTit><span class=rongcloud-kefuName ng-bind=currentConversation.title></span></div></div><div class=\"rongcloud-toolBar rongcloud-headBtn rongcloud-pull-right\"><div ng-show=!widgetConfig.displayConversationList&&widgetConfig.voiceNotification class=rongcloud-voice ng-class=\"{'rongcloud-voice-mute':!data.voiceSound,'rongcloud-voice-sound':data.voiceSound}\" ng-click=\"data.voiceSound=!data.voiceSound\"></div><a href=javascript:; class=\"rongcloud-kefuChatBoxHide rongcloud-sprite\" style=margin-right:6px ng-show=!widgetConfig.displayConversationList ng-click=minimize() title=隐藏></a> <a href=javascript:; class=\"rongcloud-kefuChatBoxClose rongcloud-sprite\" ng-click=close() title=结束对话></a></div></div><div class=rongcloud-outlineBox ng-hide=connected><div class=rongcloud-sprite></div><span>连接断开,请刷新重连</span></div><div id=Messages><div class=rongcloud-emptyBox>暂时没有新消息</div><div class=rongcloud-MessagesInner><div ng-repeat=\"item in messageList\" ng-switch=item.panelType><div class=rongcloud-Messages-date ng-switch-when=104><b>{{item.sentTime|historyTime}}</b></div><div class=rongcloud-Messages-history ng-switch-when=105><b ng-click=getHistory()>查看历史消息</b></div><div class=rongcloud-Messages-history ng-switch-when=106><b ng-click=getMoreMessage()>获取更多消息</b></div><div class=rongcloud-sys-tips ng-switch-when=2><span ng-bind-html=item.content.content|trustHtml></span></div><div class=rongcloud-Message ng-switch-when=1><div class=rongcloud-Messages-unreadLine></div><div><div class=rongcloud-Message-header><img class=\"rongcloud-img rongcloud-u-isActionable rongcloud-Message-avatar rongcloud-avatar\" ng-src={{item.content.userInfo.portraitUri||item.content.userInfo.icon}} err-src=http://7xo1cb.com1.z0.glb.clouddn.com/rongcloudkefu2.png errsrcserasdfasdfasdfa alt=\"\"><div class=\"rongcloud-Message-author rongcloud-clearfix\"><a class=\"rongcloud-author rongcloud-u-isActionable\">{{item.content.userInfo.name}}</a></div></div></div><div class=rongcloud-Message-body ng-switch=item.messageType><textmessage ng-switch-when=TextMessage msg=item.content></textmessage><imagemessage ng-switch-when=ImageMessage msg=item.content></imagemessage><voicemessage ng-switch-when=VoiceMessage msg=item.content></voicemessage><locationmessage ng-switch-when=LocationMessage msg=item.content></locationmessage><richcontentmessage ng-switch-when=RichContentMessage msg=item.content></richcontentmessage></div></div></div></div></div><div id=footer class=rongcloud-rong-footer style=\"display: block\"><div class=rongcloud-footer-con><div class=rongcloud-text-layout><div id=funcPanel class=\"rongcloud-funcPanel rongcloud-robotMode\"><div class=rongcloud-mode1 ng-show=\"_inputPanelState==0\"><div class=rongcloud-MessageForm-tool id=expressionWrap><i class=\"rongcloud-sprite rongcloud-iconfont-smile\" ng-click=\"showemoji=!showemoji\"></i><div class=rongcloud-expressionWrap ng-show=showemoji><i class=rongcloud-arrow></i><emoji ng-repeat=\"item in emojiList\" item=item content=msgvalue></emoji></div></div><div class=rongcloud-MessageForm-tool><i class=\"rongcloud-sprite rongcloud-iconfont-upload\" id=upload-file style=\"position: relative; z-index: 1\"></i></div></div><div class=rongcloud-mode2 ng-show=\"_inputPanelState==2\"><a ng-click=switchPerson() id=chatSwitch class=rongcloud-chatSwitch>转人工服务</a></div></div><pre id=inputMsg class=\"rongcloud-text rongcloud-grey\" contenteditable contenteditable-dire ng-focus=\"showemoji=fase\" style=\"background-color: rgba(0,0,0,0);color:black\" ctrl-enter-keys fun=send() ctrlenter=false placeholder=请输入文字... ondrop=\"return false\" ng-model=currentConversation.messageContent></pre></div><div class=rongcloud-powBox><button type=button style=\"background-color: #0099ff\" class=\"rongcloud-rong-btn rongcloud-rong-send-btn\" id=rong-sendBtn ng-click=send()>发送</button></div></div></div></div></div>"
  );


  $templateCache.put('./src/tsrefactor/conversationlist/conversationList.tpl.html',
    "<div id=rong-conversation-list class=\"rongcloud-kefuListBox rongcloud-both\"><div class=rongcloud-kefuList><div class=\"rongcloud-rong-header rongcloud-blueBg\"><div class=\"rongcloud-toolBar rongcloud-headBtn\"><div ng-show=config.voiceNotification class=rongcloud-voice ng-class=\"{'rongcloud-voice-mute':!data.voiceSound,'rongcloud-voice-sound':data.voiceSound}\" ng-click=\"data.voiceSound=!data.voiceSound\"></div><div class=\"rongcloud-sprite rongcloud-people\"></div><span class=rongcloud-recent>最近联系人</span><div class=\"rongcloud-sprite rongcloud-arrow-down\" style=\"cursor: pointer\" ng-click=minbtn()></div></div></div><div class=rongcloud-content><div class=rongcloud-netStatus ng-hide=connected><div class=rongcloud-sprite></div><span>连接断开,请刷新重连</span></div><div><conversation-item ng-repeat=\"item in conversationListServer.conversationList\" item=item></conversation-item></div></div></div></div>"
  );

}]);
