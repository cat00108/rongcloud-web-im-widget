/*
 * jQuery Rebox [http://trentrichardson.com/examples/jQuery-Rebox]
 * By: Trent Richardson [http://trentrichardson.com]
 *
 * Copyright 2014 Trent Richardson
 * Dual licensed under the MIT license.
 * http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
 */
(function($){
	if(!$){
		return;
	}
	$.rebox = function($this, options){
		this.settings = $.extend(true, {}, $.rebox.defaults, options);
		this.$el = $this;      // parent container holding items
		this.$box = null;      // the lightbox modal
		this.$items = null;    // recomputed each time its opened
		this.idx = 0;          // of the $items which index are we on
		this.enable();
	};

	$.rebox.defaults = {
		theme: 'rebox',        // class name parent gets (for your css)
		selector: null,        // the selector to delegate to, should be to the <a> which contains an <img>
		prev: '&larr;',        // use an image, text, whatever for the previous button
		next: '&rarr;',        // use an image, text, whatever for the next button
		loading: '%',          // use an image, text, whatever for the loading notification
		close: '&times;',      // use an image, text, whatever for the close button
		speed: 400,            // speed to fade in or out
		zIndex: 1000,          // zIndex to apply to the outer container
		cycle: true,           // whether to cycle through galleries or stop at ends
		captionAttr: 'title',  // name of the attribute to grab the caption from
		template: 'image',     // the default template to be used (see templates below)
		templates: {           // define templates to create the elements you need function($item, settings)
			image: function($item, settings, callback){
				return $('<img src="'+ $item.attr('href') +'" class="'+ settings.theme +'-content" />').load(callback);
			}
		}
	};

	$.rebox.setDefaults = function(options){
		$.rebox.defaults = $.extend(true, {}, $.rebox.defaults, options);
	};

	$.rebox.lookup = { i: 0 };

	$.extend($.rebox.prototype, {
		enable: function(){
				var t = this;

				return t.$el.on('click.rebox', t.settings.selector, function(e){
					e.preventDefault();
					t.open(this);
				});
			},
		open: function(i){
				var t = this;

				// figure out where to start
				t.$items = t.settings.selector === null? t.$el : t.$el.find(t.settings.selector);
				if(isNaN(i)){
					i = t.$items.index(i);
				}

				// build the rebox
				t.$box = $('<div class="'+ t.settings.theme +'" style="display:none;">'+
							'<a href="#" class="'+ t.settings.theme +'-close '+ t.settings.theme +'-button">'+ t.settings.close +'</a>' +
							'<a href="#" class="'+ t.settings.theme +'-prev '+ t.settings.theme +'-button">'+ t.settings.prev +'</a>' +
							'<a href="#" class="'+ t.settings.theme +'-next '+ t.settings.theme +'-button">'+ t.settings.next +'</a>' +
							'<div class="'+ t.settings.theme +'-contents"></div>'+
							'<div class="'+ t.settings.theme +'-caption"><p></p></div>' +
						'</div>').appendTo('body').css('zIndex',t.settings.zIndex).fadeIn(t.settings.speed)
						.on('click.rebox','.'+t.settings.theme +'-close', function(e){ e.preventDefault(); t.close(); })
						.on('click.rebox','.'+t.settings.theme +'-next', function(e){ e.preventDefault(); t.next(); })
						.on('click.rebox','.'+t.settings.theme +'-prev', function(e){ e.preventDefault(); t.prev(); });

				// add some key hooks
				$(document).on('swipeLeft.rebox', function(e){ t.next(); })
					.on('swipeRight.rebox', function(e){ t.prev(); })
					.on('keydown.rebox', function(e){
							e.preventDefault();
							var key = (window.event) ? event.keyCode : e.keyCode;
							switch(key){
								case 27: t.close(); break; // escape key closes
								case 37: t.prev(); break;  // left arrow to prev
								case 39: t.next(); break;  // right arrow to next
							}
						});

				t.$el.trigger('rebox:open',[t]);
				t.goto(i);
				return t.$el;
			},
		close: function(){
				var t = this;

				if(t.$box && t.$box.length){
					t.$box.fadeOut(t.settings.speed, function(e){
						t.$box.remove();
						t.$box = null;
						t.$el.trigger('rebox:close',[t]);
					});
				}
				$(document).off('.rebox');

				return t.$el;
			},
		goto: function(i){
				var t = this,
					$item = $(t.$items[i]),
					captionVal = $item.attr(t.settings.captionAttr),
					$cap = t.$box.children('.'+ t.settings.theme +'-caption')[captionVal?'show':'hide']().children('p').text(captionVal),
					$bi = t.$box.children('.'+ t.settings.theme +'-contents'),
					$img = null;

				if($item.length){
					t.idx = i;
					$bi.html('<div class="'+ t.settings.theme +'-loading '+ t.settings.theme +'-button">'+ t.settings.loading +'</div>');

					$img = t.settings.templates[$item.data('rebox-template') || t.settings.template]($item, t.settings, function(content){
						$bi.empty().append($(this));
					});

					if(t.$items.length == 1 || !t.settings.cycle){
						t.$box.children('.'+ t.settings.theme +'-prev')[i<=0 ? 'hide' : 'show']();
						t.$box.children('.'+ t.settings.theme +'-next')[i>=t.$items.length-1 ? 'hide' : 'show']();
					}
					t.$el.trigger('rebox:goto',[t, i, $item, $img]);
				}
				return t.$el;
			},
		prev: function(){
				var t = this;
				return t.goto(t.idx===0? t.$items.length-1 : t.idx-1);
			},
		next: function(){
				var t = this;
				return t.goto(t.idx===t.$items.length-1? 0 : t.idx+1);
			},
		disable: function(){
				var t = this;
				return t.close().off('.rebox').trigger('rebox:disable',[t]);
			},
		destroy: function(){
				var t = this;
				return t.disable().removeData('rebox').trigger('rebox:destroy');
			},
		option: function(key, val){
				var t = this;
				if(val !== undefined){
					t.settings[key] = val;
					return t.disable().enable();
				}
				return t.settings[key];
			}
	});

	$.fn.rebox = function(o) {
		o = o || {};
		var tmp_args = Array.prototype.slice.call(arguments);

		if (typeof(o) == 'string'){
			if(o == 'option' && typeof(tmp_args[1]) == 'string' && tmp_args.length === 2){
				var inst = $.rebox.lookup[$(this).data('rebox')];
				return inst[o].apply(inst, tmp_args.slice(1));
			}
			else return this.each(function() {
				var inst = $.rebox.lookup[$(this).data('rebox')];
				inst[o].apply(inst, tmp_args.slice(1));
			});
		} else return this.each(function() {
				var $t = $(this);
				$.rebox.lookup[++$.rebox.lookup.i] = new $.rebox($t, o);
				$t.data('rebox', $.rebox.lookup.i);
			});
	};


})(window.jQuery || window.Zepto || window.$);

/// <reference path="../../../typings/tsd.d.ts"/>
var conversationController = angular.module("RongWebIMWidget.conversationController", ["RongWebIMWidget.conversationServer"]);
conversationController.controller("conversationController", ["$scope",
    "conversationServer", "WebIMWidget", "conversationListServer", "widgetConfig", "providerdata",
    function ($scope, conversationServer, WebIMWidget, conversationListServer, widgetConfig, providerdata) {
        var ImageDomain = "http://7xogjk.com1.z0.glb.clouddn.com/";
        var notExistConversation = true;
        function adjustScrollbars() {
            setTimeout(function () {
                var ele = document.getElementById("Messages");
                if (!ele)
                    return;
                ele.scrollTop = ele.scrollHeight;
            }, 0);
        }
        $scope.currentConversation = {
            title: "",
            targetId: "",
            targetType: 0
        };
        $scope.messageList = [];
        $scope.messageContent = "";
        $scope.WebIMWidget = WebIMWidget;
        $scope.widgetConfig = widgetConfig;
        console.log(widgetConfig);
        $scope.conversationServer = conversationServer;
        $scope._inputPanelState = WidgetModule.InputPanelType.person;
        $scope.showSelf = false;
        //显示表情
        $scope.showemoji = false;
        document.addEventListener("click", function (e) {
            if ($scope.showemoji && e.target.className.indexOf("iconfont-smile") == -1) {
                $scope.$apply(function () {
                    $scope.showemoji = false;
                });
            }
        });
        // $scope.emojiList = RongIMLib.RongIMEmoji.emojis.slice(0, 84);
        $scope.$watch("showemoji", function (newVal, oldVal) {
            if (newVal === oldVal)
                return;
            if (!$scope.emojiList || $scope.emojiList.length == 0) {
                $scope.emojiList = RongIMLib.RongIMEmoji.emojis.slice(0, 84);
            }
        });
        $scope.$watch("currentConversation.messageContent", function (newVal, oldVal) {
            if (newVal === oldVal)
                return;
            if ($scope.currentConversation) {
                RongIMLib.RongIMClient.getInstance().saveTextMessageDraft(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, newVal);
            }
        });
        $scope.$watch("showSelf", function (newVal, oldVal) {
            if (newVal === oldVal)
                return;
            if (newVal && conversationServer._uploadToken) {
                uploadFileRefresh();
                console.log("showSelf");
            }
            else {
                qiniuuploader && qiniuuploader.destroy();
            }
        });
        $scope.$watch("_inputPanelState", function (newVal, oldVal) {
            if (newVal === oldVal)
                return;
            if (newVal == WidgetModule.InputPanelType.person && conversationServer._uploadToken) {
                uploadFileRefresh();
                console.log("_inputPanelState");
            }
            else {
                qiniuuploader && qiniuuploader.destroy();
            }
        });
        conversationServer.onConversationChangged = function (conversation) {
            setTimeout(function () {
                $scope.$apply();
            }, 0);
            if (widgetConfig.displayConversationList) {
                $scope.showSelf = true;
            }
            else {
                $scope.showSelf = true;
                $scope.WebIMWidget.display = true;
            }
            if (conversation && conversation.targetType == WidgetModule.EnumConversationType.CUSTOMER_SERVICE && (!conversationServer.current || conversationServer.current.targetId != conversation.targetId)) {
                RongIMLib.RongIMClient.getInstance().startCustomService(conversation.targetId, {
                    onSuccess: function () {
                    },
                    onError: function () {
                        console.log("连接客服失败");
                    }
                });
            }
            //会话为空清除页面各项值
            if (!conversation || !conversation.targetId) {
                $scope.messageList = [];
                $scope.currentConversation = null;
                conversationServer.current = null;
                setTimeout(function () {
                    $scope.$apply();
                });
                return;
            }
            conversationServer.current = conversation;
            $scope.currentConversation = conversation;
            conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] || [];
            var currenthis = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] || [];
            $scope.messageList = currenthis;
            if (currenthis.length == 0) {
                conversationServer._getHistoryMessages(+conversation.targetType, conversation.targetId, 3).then(function (data) {
                    $scope.messageList = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId];
                    if ($scope.messageList.length > 0) {
                        $scope.messageList.unshift(new WidgetModule.TimePanl($scope.messageList[0].sentTime));
                        if (data.has) {
                            $scope.messageList.unshift(new WidgetModule.GetMoreMessagePanel());
                        }
                        adjustScrollbars();
                    }
                });
            }
            else {
                adjustScrollbars();
            }
            $scope.currentConversation.messageContent = RongIMLib.RongIMClient.getInstance().getTextMessageDraft(+$scope.currentConversation.targetType, $scope.currentConversation.targetId) || "";
            setTimeout(function () {
                $scope.$apply();
            });
        };
        conversationServer.onReceivedMessage = function (msg) {
            // $scope.messageList.splice(0, $scope.messageList.length);
            if ($scope.currentConversation && msg.targetId == $scope.currentConversation.targetId && msg.conversationType == $scope.currentConversation.targetType) {
                $scope.$apply();
                var systemMsg = null;
                switch (msg.messageType) {
                    case WidgetModule.MessageType.HandShakeResponseMessage:
                        conversationServer._customService.type = msg.content.data.serviceType;
                        conversationServer._customService.companyName = msg.content.data.companyName;
                        conversationServer._customService.robotName = msg.content.data.robotName;
                        conversationServer._customService.robotIcon = msg.content.data.robotIcon;
                        conversationServer._customService.robotWelcome = msg.content.data.robotWelcome;
                        conversationServer._customService.humanWelcome = msg.content.data.humanWelcome;
                        conversationServer._customService.noOneOnlineTip = msg.content.data.noOneOnlineTip;
                        if (msg.content.data.serviceType == "1") {
                            changeInputPanelState(WidgetModule.InputPanelType.robot);
                            msg.content.data.robotWelcome && (systemMsg = packReceiveMessage(RongIMLib.TextMessage.obtain(msg.content.data.robotWelcome), WidgetModule.MessageType.TextMessage));
                        }
                        else if (msg.content.data.serviceType == "3") {
                            msg.content.data.robotWelcome && (systemMsg = packReceiveMessage(RongIMLib.TextMessage.obtain(msg.content.data.robotWelcome), WidgetModule.MessageType.TextMessage));
                            changeInputPanelState(WidgetModule.InputPanelType.robotSwitchPerson);
                        }
                        else {
                            // msg.content.data.humanWelcome && (systemMsg = packReceiveMessage(RongIMLib.TextMessage.obtain(msg.content.data.humanWelcome), WidgetModule.MessageType.TextMessage));
                            changeInputPanelState(WidgetModule.InputPanelType.person);
                        }
                        $scope.evaluate.valid = false;
                        setTimeout(function () {
                            $scope.evaluate.valid = true;
                        }, 60 * 1000);
                        break;
                    case WidgetModule.MessageType.ChangeModeResponseMessage:
                        switch (msg.content.data.status) {
                            case 1:
                                conversationServer._customService.human.name = msg.content.data.name || "客服人员";
                                conversationServer._customService.human.headimgurl = msg.content.data.headimgurl;
                                changeInputPanelState(WidgetModule.InputPanelType.person);
                                break;
                            case 2:
                                if (conversationServer._customService.type == "2") {
                                    changeInputPanelState(WidgetModule.InputPanelType.person);
                                }
                                else if (conversationServer._customService.type == "1" || conversationServer._customService.type == "3") {
                                    changeInputPanelState(WidgetModule.InputPanelType.robotSwitchPerson);
                                }
                                break;
                            case 3:
                                changeInputPanelState(WidgetModule.InputPanelType.robot);
                                systemMsg = packReceiveMessage(RongIMLib.InformationNotificationMessage.obtain("你被拉黑了"), WidgetModule.MessageType.InformationNotificationMessage);
                                break;
                            case 4:
                                changeInputPanelState(WidgetModule.InputPanelType.person);
                                systemMsg = packReceiveMessage(RongIMLib.InformationNotificationMessage.obtain("已经是人工了"), WidgetModule.MessageType.InformationNotificationMessage);
                                break;
                            default:
                                break;
                        }
                        break;
                    case WidgetModule.MessageType.TerminateMessage:
                        //关闭客服
                        if (msg.content.code == 0) {
                            $scope.evaluate.CSTerminate = true;
                            $scope.close();
                        }
                        else {
                            if (conversationServer._customService.type == "1") {
                                changeInputPanelState(WidgetModule.InputPanelType.robot);
                            }
                            else {
                                changeInputPanelState(WidgetModule.InputPanelType.robotSwitchPerson);
                            }
                        }
                        break;
                    case WidgetModule.MessageType.CustomerStatusUpdateMessage:
                        switch (Number(msg.content.serviceStatus)) {
                            case 1:
                                if (conversationServer._customService.type == "1") {
                                    changeInputPanelState(WidgetModule.InputPanelType.robot);
                                }
                                else {
                                    changeInputPanelState(WidgetModule.InputPanelType.robotSwitchPerson);
                                }
                                break;
                            case 2:
                                changeInputPanelState(WidgetModule.InputPanelType.person);
                                break;
                            case 3:
                                changeInputPanelState(WidgetModule.InputPanelType.notService);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }
                if (systemMsg) {
                    var wmsg = WidgetModule.Message.convert(systemMsg);
                    addCustomService(wmsg);
                    conversationServer._addHistoryMessages(wmsg);
                }
                addCustomService(msg);
                setTimeout(function () {
                    adjustScrollbars();
                }, 200);
            }
        };
        conversationServer._onConnectSuccess = function () {
            updateUploadToken();
        };
        function updateUploadToken() {
            RongIMLib.RongIMClient.getInstance().getFileToken(RongIMLib.FileType.IMAGE, {
                onSuccess: function (data) {
                    conversationServer._uploadToken = data.token;
                    uploadFileRefresh();
                }, onError: function () {
                }
            });
        }
        $scope.getHistory = function () {
            var arr = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
            arr.splice(0, arr.length);
            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function (data) {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                if (data.has) {
                    conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].unshift(new WidgetModule.GetMoreMessagePanel());
                }
                // adjustScrollbars();
            });
        };
        $scope.getMoreMessage = function () {
            conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].shift();
            conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].shift();
            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function (data) {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                if (data.has) {
                    conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].unshift(new WidgetModule.GetMoreMessagePanel());
                }
            });
        };
        function addCustomService(msg) {
            if (msg.conversationType == WidgetModule.EnumConversationType.CUSTOMER_SERVICE && msg.content && msg.messageDirection == WidgetModule.MessageDirection.RECEIVE) {
                if (conversationServer._customService.currentType == "1") {
                    msg.content.userInfo = {
                        name: conversationServer._customService.human.name || "客服人员",
                        portraitUri: conversationServer._customService.human.headimgurl || conversationServer._customService.robotIcon
                    };
                }
                else {
                    msg.content.userInfo = {
                        name: conversationServer._customService.robotName,
                        portraitUri: conversationServer._customService.robotIcon
                    };
                }
            }
            else if (msg.conversationType == WidgetModule.EnumConversationType.CUSTOMER_SERVICE && msg.content && msg.messageDirection == WidgetModule.MessageDirection.SEND) {
                msg.content.userInfo = {
                    name: "我",
                    portraitUri: conversationServer.loginUser.portraitUri
                };
            }
            return msg;
        }
        var changeInputPanelState = function (type) {
            $scope._inputPanelState = type;
            if (type == WidgetModule.InputPanelType.person) {
                $scope.evaluate.type = 1;
                conversationServer._customService.currentType = "1";
                conversationServer.current.title = conversationServer._customService.human.name || "客服人员";
            }
            else {
                $scope.evaluate.type = 2;
                conversationServer._customService.currentType = "2";
                conversationServer.current.title = conversationServer._customService.robotName;
            }
        };
        function packDisplaySendMessage(msg, messageType) {
            var ret = new RongIMLib.Message();
            var userinfo = new RongIMLib.UserInfo(conversationServer.loginUser.id, conversationServer.loginUser.name || "我", conversationServer.loginUser.portraitUri);
            msg.user = userinfo;
            ret.content = msg;
            ret.conversationType = $scope.currentConversation.targetType;
            ret.targetId = $scope.currentConversation.targetId;
            ret.senderUserId = conversationServer.loginUser.id;
            ret.messageDirection = RongIMLib.MessageDirection.SEND;
            ret.sentTime = (new Date()).getTime() - (RongIMLib.RongIMClient.getInstance().getDeltaTime() || 0);
            ret.messageType = messageType;
            return ret;
        }
        function packReceiveMessage(msg, messageType) {
            var ret = new RongIMLib.Message();
            var userinfo = null;
            msg.userInfo = userinfo;
            ret.content = msg;
            ret.conversationType = $scope.currentConversation.targetType;
            ret.targetId = $scope.currentConversation.targetId;
            ret.senderUserId = $scope.currentConversation.targetId;
            ret.messageDirection = RongIMLib.MessageDirection.RECEIVE;
            ret.sentTime = (new Date()).getTime() - (RongIMLib.RongIMClient.getInstance().getDeltaTime() || 0);
            ret.messageType = messageType;
            return ret;
        }
        function closeState() {
            if (WebIMWidget.onClose && typeof WebIMWidget.onClose === "function") {
                WebIMWidget.onClose($scope.currentConversation);
            }
            if (widgetConfig.displayConversationList) {
                $scope.showSelf = false;
            }
            else {
                $scope.WebIMWidget.display = false;
            }
            $scope.messageList = [];
            $scope.currentConversation = null;
            conversationServer.current = null;
        }
        $scope.evaluate = {
            type: 1,
            showevaluate: false,
            valid: false,
            CSTerminate: false,
            onConfirm: function (data) {
                //发评价
                if (data) {
                    if ($scope.value == 1) {
                        RongIMLib.RongIMClient.getInstance().evaluateHumanCustomService(conversationServer.current.targetId, data.stars, data.describe, {
                            onSuccess: function () {
                            }
                        });
                    }
                    else {
                        RongIMLib.RongIMClient.getInstance().evaluateRebotCustomService(conversationServer.current.targetId, data.value, data.describe, {
                            onSuccess: function () {
                            }
                        });
                    }
                }
                RongIMLib.RongIMClient.getInstance().stopCustomeService(conversationServer.current.targetId, {
                    onSuccess: function () {
                    },
                    onError: function () {
                    }
                });
                closeState();
            },
            onCancle: function () {
                RongIMLib.RongIMClient.getInstance().stopCustomeService(conversationServer.current.targetId, {
                    onSuccess: function () {
                    },
                    onError: function () {
                    }
                });
                closeState();
            }
        };
        $scope.close = function () {
            if (WebIMWidget.onCloseBefore && typeof WebIMWidget.onCloseBefore === "function") {
                var isClose = WebIMWidget.onCloseBefore({
                    close: function (data) {
                        if (conversationServer.current.targetType == WidgetModule.EnumConversationType.CUSTOMER_SERVICE) {
                            if ($scope.evaluate.valid) {
                                $scope.evaluate.showevaluate = true;
                            }
                            else {
                                $scope.evaluate.onCancle();
                            }
                        }
                        else {
                            closeState();
                        }
                    }
                });
            }
            else {
                if (conversationServer.current.targetType == WidgetModule.EnumConversationType.CUSTOMER_SERVICE) {
                    if ($scope.evaluate.valid) {
                        $scope.evaluate.showevaluate = true;
                    }
                    else {
                        $scope.evaluate.onCancle();
                    }
                }
                else {
                    closeState();
                }
            }
        };
        $scope.send = function () {
            if (!$scope.currentConversation.targetId || !$scope.currentConversation.targetType) {
                alert("请先选择一个会话目标。");
                return;
            }
            if ($scope.currentConversation.messageContent == "") {
                return;
            }
            var con = RongIMLib.RongIMEmoji.symbolToEmoji($scope.currentConversation.messageContent);
            var msg = RongIMLib.TextMessage.obtain(con);
            var userinfo = new RongIMLib.UserInfo(conversationServer.loginUser.id, conversationServer.loginUser.name, conversationServer.loginUser.portraitUri);
            msg.user = userinfo;
            try {
                RongIMLib.RongIMClient.getInstance().sendMessage(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, msg, {
                    onSuccess: function (retMessage) {
                        conversationListServer.updateConversations().then(function () {
                        });
                    },
                    onError: function (error) {
                        console.log(error);
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
            var content = packDisplaySendMessage(msg, WidgetModule.MessageType.TextMessage);
            var cmsg = WidgetModule.Message.convert(content);
            conversationServer._addHistoryMessages(cmsg);
            // $scope.messageList.push();
            adjustScrollbars();
            $scope.currentConversation.messageContent = "";
            var obj = document.getElementById("inputMsg");
            WidgetModule.Helper.getFocus(obj);
        };
        $scope.minimize = function () {
            WebIMWidget.display = false;
        };
        $scope.switchPerson = function () {
            RongIMLib.RongIMClient.getInstance().switchToHumanMode(conversationServer.current.targetId, {
                onSuccess: function () {
                },
                onError: function () {
                }
            });
        };
        var qiniuuploader;
        function uploadFileRefresh() {
            qiniuuploader && qiniuuploader.destroy();
            qiniuuploader = Qiniu.uploader({
                // runtimes: 'html5,flash,html4',
                runtimes: 'html5,html4',
                browse_button: 'upload-file',
                // browse_button: 'upload',
                container: 'funcPanel',
                drop_element: 'inputMsg',
                max_file_size: '100mb',
                // flash_swf_url: 'js/plupload/Moxie.swf',
                dragdrop: true,
                chunk_size: '4mb',
                // uptoken_url: "http://webim.demo.rong.io/getUploadToken",
                uptoken: conversationServer._uploadToken,
                domain: ImageDomain,
                get_new_uptoken: false,
                // unique_names: true,
                filters: {
                    mime_types: [{ title: "Image files", extensions: "jpg,gif,png,jpeg,bmp" }],
                    prevent_duplicates: false
                },
                multi_selection: false,
                auto_start: true,
                init: {
                    'FilesAdded': function (up, files) {
                    },
                    'BeforeUpload': function (up, file) {
                    },
                    'UploadProgress': function (up, file) {
                    },
                    'UploadComplete': function () {
                    },
                    'FileUploaded': function (up, file, info) {
                        if (!$scope.currentConversation.targetId || !$scope.currentConversation.targetType) {
                            alert("请先选择一个会话目标。");
                            return;
                        }
                        info = info.replace(/'/g, "\"");
                        info = JSON.parse(info);
                        RongIMLib.RongIMClient.getInstance().getFileUrl(RongIMLib.FileType.IMAGE, info.name, {
                            onSuccess: function (url) {
                                WidgetModule.Helper.ImageHelper.getThumbnail(file.getNative(), 60000, function (obj, data) {
                                    var im = RongIMLib.ImageMessage.obtain(data, url.downloadUrl);
                                    var content = packDisplaySendMessage(im, WidgetModule.MessageType.ImageMessage);
                                    RongIMLib.RongIMClient.getInstance().sendMessage($scope.currentConversation.targetType, $scope.currentConversation.targetId, im, {
                                        onSuccess: function () {
                                            conversationListServer.updateConversations().then(function () {
                                            });
                                        },
                                        onError: function () {
                                        }
                                    });
                                    conversationServer._addHistoryMessages(WidgetModule.Message.convert(content));
                                    $scope.$apply();
                                    adjustScrollbars();
                                    updateUploadToken();
                                });
                            },
                            onError: function () {
                            }
                        });
                    },
                    'Error': function (up, err, errTip) {
                        console.log(err);
                        updateUploadToken();
                    }
                }
            });
        }
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationDirective = angular.module("RongWebIMWidget.conversationDirective", ["RongWebIMWidget.conversationController"]);
conversationDirective.directive("rongConversation", [function () {
        return {
            restrict: "E",
            templateUrl: "./src/ts/conversation/template.tpl.html",
            controller: "conversationController",
            link: function (scope, ele) {
                if (window["jQuery"] && window["jQuery"].nicescroll) {
                    $("#Messages").niceScroll({
                        'cursorcolor': "#0099ff",
                        'cursoropacitymax': 1,
                        'touchbehavior': false,
                        'cursorwidth': "8px",
                        'cursorborder': "0",
                        'cursorborderradius': "5px"
                    });
                }
            }
        };
    }]);
conversationDirective.directive("emoji", [function () {
        return {
            restrict: "E",
            scope: {
                item: "=",
                content: "="
            },
            template: '<div style="display:inline-block"></div>',
            link: function (scope, ele, attr) {
                ele.find("div").append(scope.item);
                ele.on("click", function () {
                    scope.$parent.currentConversation.messageContent = scope.$parent.currentConversation.messageContent || "";
                    scope.$parent.currentConversation.messageContent = scope.$parent.currentConversation.messageContent.replace(/\n$/, "");
                    scope.$parent.currentConversation.messageContent = scope.$parent.currentConversation.messageContent + scope.item.children[0].getAttribute("name");
                    scope.$parent.$apply();
                    var obj = document.getElementById("inputMsg");
                    WidgetModule.Helper.getFocus(obj);
                });
            }
        };
    }]);
conversationDirective.directive('contenteditableDire', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            function replacemy(e) {
                return e.replace(new RegExp("<[\\s\\S.]*?>", "ig"), "");
            }
            var domElement = element[0];
            scope.$watch(function () {
                return ngModel.$modelValue;
            }, function (newVal) {
                if (document.activeElement === domElement) {
                    return;
                }
                if (newVal === '' || newVal === attrs["placeholder"]) {
                    domElement.innerHTML = attrs["placeholder"];
                    domElement.style.color = "#a9a9a9";
                }
            });
            element.bind('focus', function () {
                if (domElement.innerHTML == attrs["placeholder"]) {
                    domElement.innerHTML = '';
                }
                domElement.style.color = '';
            });
            element.bind('blur', function () {
                if (domElement.innerHTML === '') {
                    domElement.innerHTML = attrs["placeholder"];
                    domElement.style.color = "#a9a9a9";
                }
            });
            if (!ngModel)
                return;
            element.bind("paste", function (e) {
                var that = this, ohtml = that.innerHTML;
                timeoutid && clearTimeout(timeoutid);
                var timeoutid = setTimeout(function () {
                    that.innerHTML = replacemy(that.innerHTML);
                    ngModel.$setViewValue(that.innerHTML);
                    timeoutid = null;
                }, 50);
            });
            ngModel.$render = function () {
                element.html(ngModel.$viewValue || '');
            };
            element.bind("keyup paste", read);
            // element.bind("input", read);
            function read() {
                var html = element.html();
                html = html.replace(/^<br>$/i, "");
                html = html.replace(/<br>/gi, "\n");
                if (attrs["stripBr"] && html == '<br>') {
                    html = '';
                }
                ngModel.$setViewValue(html);
            }
        }
    };
});
conversationDirective.directive("ctrlEnterKeys", ["$timeout", function ($timeout) {
        return {
            restrict: "A",
            require: '?ngModel',
            scope: {
                fun: "&",
                ctrlenter: "=",
                content: "="
            },
            link: function (scope, element, attrs, ngModel) {
                scope.ctrlenter = scope.ctrlenter || false;
                element.bind("keypress", function (e) {
                    if (scope.ctrlenter) {
                        if (e.ctrlKey === true && e.keyCode === 13 || e.keyCode === 10) {
                            scope.fun();
                            scope.$parent.$apply();
                            e.preventDefault();
                        }
                    }
                    else {
                        if (e.ctrlKey === false && e.shiftKey === false && (e.keyCode === 13 || e.keyCode === 10)) {
                            scope.fun();
                            scope.$parent.$apply();
                            e.preventDefault();
                        }
                        else if (e.ctrlKey === true && e.keyCode === 13 || e.keyCode === 10) {
                        }
                    }
                });
            }
        };
    }]);
conversationDirective.directive("textmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="rongcloud-Message-text"><pre class="rongcloud-Message-entry" ng-bind-html="msg.content|trustHtml"><br></pre></div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("includinglinkmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="rongcloud-Message-text">' +
                '<pre class="rongcloud-Message-entry" style="">' +
                '维护中 由于我们的服务商出现故障，融云官网及相关服务也受到影响，给各位用户带来的不便，还请谅解。  您可以通过 <a href="#">【官方微博】</a>了解</pre>' +
                '</div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("imagemessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="rongcloud-Message-img">' +
                '<span id="{{\'rebox_\'+$id}}"  class="rongcloud-Message-entry" style="">' +
                // '<p>发给您一张示意图</p>' +
                // '<img ng-src="{{msg.content}}" alt="">' +
                '<a href="{{msg.imageUri}}" target="_black"><img ng-src="{{msg.content}}"  data-image="{{msg.imageUri}}" alt=""/></a>' +
                '</span>' +
                '</div>' +
                '</div>',
            link: function (scope, ele, attr) {
                var img = new Image();
                img.src = scope.msg.imageUri;
                setTimeout(function () {
                    if (window["jQuery"] && window["jQuery"].rebox) {
                        $('#rebox_' + scope.$id).rebox({ selector: 'a', zIndex: 999999 }).bind("rebox:open", function () {
                            //jQuery rebox 点击空白关闭
                            var rebox = document.getElementsByClassName("rebox")[0];
                            rebox.onclick = function (e) {
                                if (e.target.tagName.toLowerCase() != "img") {
                                    var rebox_close = document.getElementsByClassName("rebox-close")[0];
                                    rebox_close.click();
                                    rebox = null;
                                    rebox_close = null;
                                }
                            };
                        });
                    }
                });
                img.onload = function () {
                    //scope.isLoaded = true;
                    scope.$apply(function () {
                        scope.msg.content = scope.msg.imageUri;
                    });
                };
                // setTimeout(function() {
                //     Intense(ele.find("img")[0]);
                // }, 0);
                scope.showBigImage = function () {
                };
            }
        };
    }]);
conversationDirective.directive("voicemessage", ["$timeout", function ($timeout) {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="rongcloud-Message-audio">' +
                '<span class="rongcloud-Message-entry" style="">' +
                '<span class="rongcloud-audioBox rongcloud-clearfix " ng-click="play()" ng-class="{\'animate\':isplaying}" ><i></i><i></i><i></i></span>' +
                '<div style="display: inline-block;" ><span class="rongcloud-audioTimer">{{msg.duration}}”</span><span class="rongcloud-audioState" ng-show="msg.isUnReade"></span></div>' +
                '</span>' +
                '</div>' +
                '</div>',
            link: function (scope, ele, attr) {
                scope.msg.duration = parseInt(scope.msg.duration || scope.msg.content.length / 1024);
                RongIMLib.RongIMVoice.preLoaded(scope.msg.content);
                scope.play = function () {
                    RongIMLib.RongIMVoice.stop(scope.msg.content);
                    if (!scope.isplaying) {
                        scope.msg.isUnReade = false;
                        RongIMLib.RongIMVoice.play(scope.msg.content, scope.msg.duration);
                        scope.isplaying = true;
                        if (scope.timeoutid) {
                            $timeout.cancel(scope.timeoutid);
                        }
                        scope.timeoutid = $timeout(function () {
                            scope.isplaying = false;
                        }, scope.msg.duration * 1000);
                    }
                    else {
                        scope.isplaying = false;
                        $timeout.cancel(scope.timeoutid);
                    }
                };
            }
        };
    }]);
conversationDirective.directive("locationmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="rongcloud-Message-map">' +
                '<span class="rongcloud-Message-entry" style="">' +
                '<div class="rongcloud-mapBox">' +
                '<img ng-src="{{msg.content}}" alt="">' +
                '<span>{{msg.poi}}</span>' +
                '</div>' +
                '</span>' +
                '</div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("richcontentmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="rongcloud-Message-image-text">' +
                '<span class="rongcloud-Message-entry" style="">' +
                '<div class="rongcloud-image-textBox">' +
                '<h4>{{msg.title}}</h4>' +
                '<div class="rongcloud-cont rongcloud-clearfix">' +
                '<img ng-src="{{msg.imageUri}}" alt="">' +
                '<div>{{msg.content}}</div>' +
                '</div>' +
                '</div>' +
                '</span>' +
                '</div>' +
                '</div>'
        };
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationServer = angular.module("RongWebIMWidget.conversationServer", ["RongWebIMWidget.conversationDirective"]);
conversationServer.factory("conversationServer", ["$q", "providerdata", function ($q, providerdata) {
        var conversationServer = {};
        conversationServer.current = {
            targetId: "",
            targetType: 0,
            title: "",
            portraitUri: "",
            onLine: false
        };
        conversationServer.loginUser = {
            id: "",
            name: "",
            portraitUri: ""
        };
        conversationServer._cacheHistory = {};
        conversationServer._getHistoryMessages = function (targetType, targetId, number, reset) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getHistoryMessages(targetType, targetId, reset ? 0 : null, number, {
                onSuccess: function (data, has) {
                    var msglen = data.length;
                    while (msglen--) {
                        var msg = WidgetModule.Message.convert(data[msglen]);
                        unshiftHistoryMessages(targetId, targetType, msg);
                        if (msg.content && providerdata.getUserInfo) {
                            (function (msg) {
                                providerdata.getUserInfo(msg.senderUserId, {
                                    onSuccess: function (obj) {
                                        msg.content.userInfo = new WidgetModule.UserInfo(obj.userId, obj.name, obj.portraitUri);
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
        function adduserinfo() {
        }
        function unshiftHistoryMessages(id, type, item) {
            var arr = conversationServer._cacheHistory[type + "_" + id] = conversationServer._cacheHistory[type + "_" + id] || [];
            if (arr[0] && arr[0].sentTime && arr[0].panelType != WidgetModule.PanelType.Time && item.sentTime) {
                if (!WidgetModule.Helper.timeCompare(arr[0].sentTime, item.sentTime)) {
                    arr.unshift(new WidgetModule.TimePanl(arr[0].sentTime));
                }
            }
            arr.unshift(item);
        }
        conversationServer._addHistoryMessages = function (item) {
            var arr = conversationServer._cacheHistory[item.conversationType + "_" + item.targetId] = conversationServer._cacheHistory[item.conversationType + "_" + item.targetId] || [];
            if (arr[arr.length - 1] && arr[arr.length - 1].panelType != WidgetModule.PanelType.Time && arr[arr.length - 1].sentTime && item.sentTime) {
                if (!WidgetModule.Helper.timeCompare(arr[arr.length - 1].sentTime, item.sentTime)) {
                    arr.push(new WidgetModule.TimePanl(item.sentTime));
                }
            }
            arr.push(item);
        };
        conversationServer.onConversationChangged = function () {
            //提供接口由conversation controller实现具体操作
        };
        conversationServer.onReceivedMessage = function () {
            //提供接口由coversation controller实现具体操作
        };
        conversationServer._customService = {
            human: {}
        };
        return conversationServer;
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationListCtr = angular.module("RongWebIMWidget.conversationListController", []);
conversationListCtr.controller("conversationListController", ["$scope", "conversationListServer", "WebIMWidget", "widgetConfig", "providerdata",
    function ($scope, conversationListServer, WebIMWidget, widgetConfig, providerdata) {
        $scope.conversationListServer = conversationListServer;
        $scope.WebIMWidget = WebIMWidget;
        conversationListServer.refreshConversationList = function () {
            setTimeout(function () {
                $scope.$apply();
            });
        };
        $scope.minbtn = function () {
            WebIMWidget.display = false;
        };
        var checkOnlieStatus;
        var voicecookie = WidgetModule.Helper.CookieHelper.getCookie("voiceSound");
        providerdata.voiceSound = voicecookie ? (voicecookie == "true") : true;
        $scope.data = providerdata;
        $scope.config = widgetConfig;
        $scope.$watch("data.voiceSound", function (newVal, oldVal) {
            if (newVal === oldVal) {
                return;
            }
            WidgetModule.Helper.CookieHelper.setCookie("voiceSound", newVal);
        });
        function refreshOnlineStatus() {
            var arr = conversationListServer.conversationList.map(function (item) { return item.targetId; });
            providerdata.getOnlineStatus(arr, {
                onSuccess: function (data) {
                    conversationListServer._onlineStatus = data;
                    conversationListServer.updateConversations();
                }
            });
        }
        function startCheckOnline() {
            checkOnlieStatus = setInterval(function () {
                refreshOnlineStatus();
            }, 10 * 1000);
        }
        function stopCeckOnline() {
            clearInterval(checkOnlieStatus);
        }
        $scope.connected = true;
        conversationListServer._onConnectStatusChange = function (status) {
            if (status == RongIMLib.ConnectionStatus.CONNECTED) {
                $scope.connected = true;
                if (widgetConfig.displayConversationList && providerdata.getOnlineStatus) {
                    refreshOnlineStatus();
                    startCheckOnline();
                }
            }
            else {
                $scope.connected = false;
            }
            setTimeout(function () {
                $scope.$apply();
            });
        };
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationListDir = angular.module("RongWebIMWidget.conversationListDirective", ["RongWebIMWidget.conversationListController"]);
conversationListDir.directive("rongConversationList", [function () {
        return {
            restrict: "E",
            templateUrl: "./src/ts/conversationlist/conversationList.tpl.html",
            controller: "conversationListController",
            link: function (scope, ele) {
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
            }
        };
    }]);
conversationListDir.directive("conversationItem", ["conversationServer", "conversationListServer", "RongIMSDKServer", function (conversationServer, conversationListServer, RongIMSDKServer) {
        return {
            restrict: "E",
            scope: { item: "=" },
            template: '<div class="rongcloud-chatList">' +
                '<div class="rongcloud-chat_item " ng-class="{\'online\':item.onLine}">' +
                '<div class="rongcloud-ext">' +
                '<p class="rongcloud-attr clearfix">' +
                '<span class="rongcloud-badge" ng-show="item.unreadMessageCount>0">{{item.unreadMessageCount>99?"99+":item.unreadMessageCount}}</span>' +
                '<i class="rongcloud-sprite rongcloud-no-remind" ng-click="remove($event)"></i>' +
                '</p>' +
                '</div>' +
                '<div class="rongcloud-photo">' +
                '<img class="rongcloud-img" ng-src="{{item.portraitUri}}" err-src="http://7xo1cb.com1.z0.glb.clouddn.com/20160230163460.jpg" alt="">' +
                '<i ng-show="!!$parent.data.getOnlineStatus" class="rongcloud-Presence rongcloud-Presence--stacked rongcloud-Presence--mainBox"></i>' +
                '</div>' +
                '<div class="rongcloud-info">' +
                '<h3 class="rongcloud-nickname">' +
                '<span class="rongcloud-nickname_text" title="{{item.title}}">{{item.title}}</span>' +
                '</h3>' +
                '</div>' +
                '</div>' +
                '</div>',
            link: function (scope, ele, attr) {
                ele.on("click", function () {
                    conversationServer.onConversationChangged(new WidgetModule.Conversation(scope.item.targetType, scope.item.targetId, scope.item.title));
                    if (scope.item.unreadMessageCount > 0) {
                        RongIMLib.RongIMClient.getInstance().clearUnreadCount(scope.item.targetType, scope.item.targetId, {
                            onSuccess: function () {
                            },
                            onError: function () {
                            }
                        });
                        RongIMSDKServer.sendReadReceiptMessage(scope.item.targetId, Number(scope.item.targetType));
                        conversationListServer.updateConversations();
                    }
                });
                scope.remove = function (e) {
                    e.stopPropagation();
                    RongIMLib.RongIMClient.getInstance().removeConversation(scope.item.targetType, scope.item.targetId, {
                        onSuccess: function () {
                            if (conversationServer.current.targetType == scope.item.targetType && conversationServer.current.targetId == scope.item.targetId) {
                            }
                            conversationListServer.updateConversations();
                        },
                        onError: function (error) {
                            console.log(error);
                        }
                    });
                };
            }
        };
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationListSer = angular.module("RongWebIMWidget.conversationListServer", ["RongWebIMWidget.conversationListDirective", "RongWebIMWidget"]);
conversationListSer.factory("conversationListServer", ["$q", "providerdata", "widgetConfig", "RongIMSDKServer", "conversationServer",
    function ($q, providerdata, widgetConfig, RongIMSDKServer, conversationServer) {
        var server = {};
        server.conversationList = [];
        server._onlineStatus = [];
        server.updateConversations = function () {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getConversationList({
                onSuccess: function (data) {
                    server.conversationList.splice(0, server.conversationList.length);
                    for (var i = 0, len = data.length; i < len; i++) {
                        var con = WidgetModule.Conversation.onvert(data[i]);
                        switch (con.targetType) {
                            case RongIMLib.ConversationType.PRIVATE:
                                if (WidgetModule.Helper.checkType(providerdata.getUserInfo) == "function") {
                                    (function (a, b) {
                                        providerdata.getUserInfo(a.targetId, {
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
                                if (WidgetModule.Helper.checkType(providerdata.getGroupInfo) == "function") {
                                    (function (a, b) {
                                        providerdata.getGroupInfo(a.targetId, {
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
                        server.conversationList.push(con);
                    }
                    server._onlineStatus.forEach(function (item) {
                        var conv = server.getConversation(WidgetModule.EnumConversationType.PRIVATE, item.id);
                        conv && (conv.onLine = item.status);
                    });
                    if (widgetConfig.displayConversationList) {
                        RongIMLib.RongIMClient.getInstance().getTotalUnreadCount({
                            onSuccess: function (num) {
                                providerdata.totalUnreadCount = num || 0;
                                defer.resolve();
                                server.refreshConversationList();
                            },
                            onError: function () {
                            }
                        });
                    }
                    else {
                        RongIMSDKServer.getConversation(conversationServer.current.targetType, conversationServer.current.targetId).then(function (conv) {
                            if (conv && conv.unreadMessageCount) {
                                providerdata.totalUnreadCount = conv.unreadMessageCount || 0;
                                defer.resolve();
                                server.refreshConversationList();
                            }
                            else {
                                providerdata.totalUnreadCount = 0;
                                defer.resolve();
                                server.refreshConversationList();
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
        server.refreshConversationList = function () {
            //在controller里刷新页面。
        };
        server.getConversation = function (type, id) {
            for (var i = 0, len = server.conversationList.length; i < len; i++) {
                if (server.conversationList[i].targetType == type && server.conversationList[i].targetId == id) {
                    return server.conversationList[i];
                }
            }
            return null;
        };
        server.addConversation = function (conversation) {
            server.conversationList.unshift(conversation);
        };
        server._onConnectStatusChange = function () { };
        return server;
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var evaluate = angular.module("Evaluate", []);
evaluate.directive("evaluatedir", ["$timeout", function ($timeout) {
        return {
            restrict: "E",
            scope: {
                type: "=",
                display: "=",
                enter: "&confirm",
                dcancle: "&cancle"
            },
            templateUrl: './src/ts/evaluate/evaluate.tpl.html',
            link: function (scope, ele) {
                var stars = [false, false, false, false, false];
                var labels = ["答非所问", "理解能力差", "一问三不知", "不礼貌"];
                scope.stars = stars.concat();
                scope.labels = labels.concat();
                scope.end = false;
                scope.displayDescribe = false;
                scope.data = {
                    stars: 0,
                    value: 0,
                    describe: "",
                    label: ""
                };
                scope.$watch("display", function (newVal, oldVal) {
                    if (newVal === oldVal) {
                        return;
                    }
                    else {
                        scope.displayDescribe = false;
                        scope.data = {
                            stars: 0,
                            value: 0,
                            describe: "",
                            label: ""
                        };
                    }
                });
                scope.confirm = function (data) {
                    if (data != undefined) {
                        if (scope.type == 1) {
                            scope.data.stars = data;
                            if (scope.data.stars != 5) {
                                scope.displayDescribe = true;
                            }
                            else {
                                confirm(scope.data);
                            }
                        }
                        else {
                            scope.data.value = data;
                            if (scope.data.value === false) {
                                scope.displayDescribe = true;
                            }
                            else {
                                confirm(scope.data);
                            }
                        }
                    }
                    else {
                        confirm(null);
                    }
                };
                scope.commit = function () {
                    confirm(scope.data);
                };
                scope.cancle = function () {
                    scope.display = false;
                    scope.dcancle();
                };
                function confirm(data) {
                    scope.end = true;
                    if (data) {
                        $timeout(function () {
                            scope.display = false;
                            scope.end = false;
                            scope.enter({ data: data });
                        }, 800);
                    }
                    else {
                        scope.display = false;
                        scope.end = false;
                        scope.enter({ data: data });
                    }
                }
            }
        };
    }]);
/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../../vendor/loadscript/script.d.ts"/>
var kefu = angular.module("RongCloudkefu", ["RongWebIMWidget"]);
kefu.service("RongKefu", ["WebIMWidget", function (WebIMWidget) {
        var kefuServer = {};
        var defaultconfig = {};
        kefuServer.init = function (config) {
            angular.extend(defaultconfig, config);
            kefuServer._config = config;
            var style = {
                right: 20
            };
            if (config.position) {
                if (config.position == KefuPostion.left) {
                    style = {
                        left: 20,
                        width: 325,
                        positionFixed: true
                    };
                }
                else {
                    style = {
                        right: 20,
                        width: 325,
                        positionFixed: true
                    };
                }
            }
            defaultconfig.style = style;
            WebIMWidget.init(defaultconfig);
            WebIMWidget.onShow = function () {
                WebIMWidget.setConversation(WidgetModule.EnumConversationType.CUSTOMER_SERVICE, config.kefuId, "客服");
            };
        };
        kefuServer.show = function () {
            WebIMWidget.show();
        };
        kefuServer.hidden = function () {
            WebIMWidget.hidden();
        };
        kefuServer.KefuPostion = KefuPostion;
        return kefuServer;
    }]);
var KefuPostion;
(function (KefuPostion) {
    KefuPostion[KefuPostion["left"] = 1] = "left";
    KefuPostion[KefuPostion["right"] = 2] = "right";
})(KefuPostion || (KefuPostion = {}));
/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../../vendor/loadscript/script.d.ts"/>
var widget = angular.module("RongWebIMWidget", ["RongWebIMWidget.conversationServer",
    "RongWebIMWidget.conversationListServer", "RongIMSDKModule", "Evaluate"]);
widget.run(["$http", "WebIMWidget", "widgetConfig", function ($http, WebIMWidget, widgetConfig) {
        var protocol = location.protocol === "https:" ? "https:" : "http:";
        $script.get(protocol + "//cdn.ronghub.com/RongIMLib-2.1.0.min.js", function () {
            $script.get(protocol + "//cdn.ronghub.com/RongEmoji-2.0.15.min.js", function () {
                RongIMLib.RongIMEmoji && RongIMLib.RongIMEmoji.init();
            });
            $script.get(protocol + "//cdn.ronghub.com/RongIMVoice-2.0.15.min.js", function () {
                RongIMLib.RongIMVoice && RongIMLib.RongIMVoice.init();
            });
            if (widgetConfig.config) {
                WebIMWidget.init(widgetConfig.config);
            }
        });
        $script.get(protocol + "//cdn.bootcss.com/plupload/2.1.8/plupload.full.min.js", function () { });
    }]);
widget.factory("providerdata", [function () {
        var obj = {
            _cacheUserInfo: [],
            getCacheUserInfo: function (id) {
                for (var i = 0, len = obj._cacheUserInfo.length; i < len; i++) {
                    if (obj._cacheUserInfo[i].userId == id) {
                        return obj._cacheUserInfo[i];
                    }
                }
                return null;
            },
            addUserInfo: function (user) {
                var olduser = obj.getCacheUserInfo(user.userId);
                if (olduser) {
                    angular.extend(olduser, user);
                }
                else {
                    obj._cacheUserInfo.push(user);
                }
            }
        };
        return obj;
    }]);
widget.factory("widgetConfig", [function () {
        return {};
    }]);
widget.factory("WebIMWidget", ["$q", "conversationServer",
    "conversationListServer", "providerdata", "widgetConfig", "RongIMSDKServer",
    function ($q, conversationServer, conversationListServer, providerdata, widgetConfig, RongIMSDKServer) {
        var WebIMWidget = {};
        var messageList = {};
        var eleConversationListWidth = 195, eleminbtnHeight = 50, eleminbtnWidth = 195;
        var defaultconfig = {
            displayMinButton: true,
            conversationListPosition: WidgetModule.EnumConversationListPosition.left,
            desktopNotification: true,
            voiceNotification: true,
            style: {
                positionFixed: false,
                width: 450,
                height: 470,
                bottom: 0,
                right: 0
            }
        };
        var eleplaysound = null;
        WebIMWidget.display = false;
        WebIMWidget.init = function (config) {
            if (!window.RongIMLib || !window.RongIMLib.RongIMClient) {
                widgetConfig.config = config;
                return;
            }
            if (defaultconfig.desktopNotification) {
                WidgetModule.NotificationHelper.requestPermission();
            }
            var defaultStyle = defaultconfig.style;
            angular.extend(defaultconfig, config);
            angular.extend(defaultStyle, config.style);
            eleplaysound = document.getElementById("rongcloud-playsound");
            if (eleplaysound && typeof defaultconfig.voiceUrl === "string") {
                eleplaysound.src = defaultconfig.voiceUrl;
            }
            else {
                defaultconfig.voiceNotification = false;
            }
            var eleconversation = document.getElementById("rong-conversation");
            var eleconversationlist = document.getElementById("rong-conversation-list");
            var eleminbtn = document.getElementById("rong-widget-minbtn");
            if (defaultStyle) {
                eleconversation.style["height"] = defaultStyle.height + "px";
                eleconversation.style["width"] = defaultStyle.width + "px";
                eleconversationlist.style["height"] = defaultStyle.height + "px";
                if (defaultStyle.positionFixed) {
                    eleconversationlist.style['position'] = "fixed";
                    eleminbtn.style['position'] = "fixed";
                    eleconversation.style['position'] = "fixed";
                }
                else {
                    eleconversationlist.style['position'] = "absolute";
                    eleminbtn.style['position'] = "absolute";
                    eleconversation.style['position'] = "absolute";
                }
                if (defaultconfig.displayConversationList) {
                    eleminbtn.style["display"] = "inline-block";
                    eleconversationlist.style["display"] = "inline-block";
                    if (defaultconfig.conversationListPosition == WidgetModule.EnumConversationListPosition.left) {
                        if (!isNaN(defaultStyle.left)) {
                            eleconversationlist.style["left"] = defaultStyle.left + "px";
                            eleminbtn.style["left"] = defaultStyle.left + "px";
                            eleconversation.style["left"] = defaultStyle.left + eleConversationListWidth + "px";
                        }
                        if (!isNaN(defaultStyle.right)) {
                            eleconversationlist.style["right"] = defaultStyle.right + defaultStyle.width + "px";
                            eleminbtn.style["right"] = defaultStyle.right + defaultStyle.width + "px";
                            eleconversation.style["right"] = defaultStyle.right + "px";
                        }
                    }
                    else if (defaultconfig.conversationListPosition == WidgetModule.EnumConversationListPosition.right) {
                        if (!isNaN(defaultStyle.left)) {
                            eleconversationlist.style["left"] = defaultStyle.left + defaultStyle.width + "px";
                            eleminbtn.style["left"] = defaultStyle.left + defaultStyle.width + "px";
                            eleconversation.style["left"] = defaultStyle.left + "px";
                        }
                        if (!isNaN(defaultStyle.right)) {
                            eleconversationlist.style["right"] = defaultStyle.right + "px";
                            eleminbtn.style["right"] = defaultStyle.right + "px";
                            eleconversation.style["right"] = defaultStyle.right + eleConversationListWidth + "px";
                        }
                    }
                    else {
                        throw new Error("config conversationListPosition value is invalid");
                    }
                    if (!isNaN(defaultStyle["top"])) {
                        eleconversationlist.style["top"] = defaultStyle.top + "px";
                        eleminbtn.style["top"] = defaultStyle.top + defaultStyle.height - eleminbtnHeight + "px";
                        eleconversation.style["top"] = defaultStyle.top + "px";
                    }
                    if (!isNaN(defaultStyle["bottom"])) {
                        eleconversationlist.style["bottom"] = defaultStyle.bottom + "px";
                        eleminbtn.style["bottom"] = defaultStyle.bottom + "px";
                        eleconversation.style["bottom"] = defaultStyle.bottom + "px";
                    }
                }
                else {
                    eleminbtn.style["display"] = "inline-block";
                    eleconversationlist.style["display"] = "none";
                    eleconversation.style["left"] = defaultStyle["left"] + "px";
                    eleconversation.style["right"] = defaultStyle["right"] + "px";
                    eleconversation.style["top"] = defaultStyle["top"] + "px";
                    eleconversation.style["bottom"] = defaultStyle["bottom"] + "px";
                    eleminbtn.style["top"] = defaultStyle.top + defaultStyle.height - eleminbtnHeight + "px";
                    eleminbtn.style["bottom"] = defaultStyle.bottom + "px";
                    eleminbtn.style["left"] = defaultStyle.left + defaultStyle.width / 2 - eleminbtnWidth / 2 + "px";
                    eleminbtn.style["right"] = defaultStyle.right + defaultStyle.width / 2 - eleminbtnWidth / 2 + "px";
                }
            }
            if (defaultconfig.displayMinButton == false) {
                eleminbtn.style["display"] = "none";
            }
            widgetConfig.displayConversationList = defaultconfig.displayConversationList;
            widgetConfig.displayMinButton = defaultconfig.displayMinButton;
            widgetConfig.reminder = defaultconfig.reminder;
            widgetConfig.voiceNotification = defaultconfig.voiceNotification;
            RongIMSDKServer.init(defaultconfig.appkey);
            RongIMSDKServer.connect(defaultconfig.token).then(function (userId) {
                conversationListServer.updateConversations();
                console.log("connect success:" + userId);
                if (WidgetModule.Helper.checkType(defaultconfig.onSuccess) == "function") {
                    defaultconfig.onSuccess(userId);
                }
                if (WidgetModule.Helper.checkType(providerdata.getUserInfo) == "function") {
                    providerdata.getUserInfo(userId, {
                        onSuccess: function (data) {
                            conversationServer.loginUser.id = data.userId;
                            conversationServer.loginUser.name = data.name;
                            conversationServer.loginUser.portraitUri = data.portraitUri;
                        }
                    });
                }
                conversationServer._onConnectSuccess();
            }, function (err) {
                if (err.tokenError) {
                    if (defaultconfig.onError && typeof defaultconfig.onError == "function") {
                        defaultconfig.onError({ code: 0, info: "token 无效" });
                    }
                }
                else {
                    if (defaultconfig.onError && typeof defaultconfig.onError == "function") {
                        defaultconfig.onError({ code: err.errorCode });
                    }
                }
            });
            RongIMSDKServer.setConnectionStatusListener({
                onChanged: function (status) {
                    WebIMWidget.connected = false;
                    switch (status) {
                        //链接成功
                        case RongIMLib.ConnectionStatus.CONNECTED:
                            console.log('链接成功');
                            WebIMWidget.connected = true;
                            break;
                        //正在链接
                        case RongIMLib.ConnectionStatus.CONNECTING:
                            console.log('正在链接');
                            break;
                        //其他设备登陆
                        case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
                            console.log('其他设备登录');
                            break;
                        case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
                            console.log("网络不可用");
                            break;
                    }
                    if (WebIMWidget.onConnectStatusChange) {
                        WebIMWidget.onConnectStatusChange(status);
                    }
                    if (conversationListServer._onConnectStatusChange) {
                        conversationListServer._onConnectStatusChange(status);
                    }
                }
            });
            RongIMSDKServer.setOnReceiveMessageListener({
                onReceived: function (data) {
                    console.log(data);
                    var msg = WidgetModule.Message.convert(data);
                    if (WidgetModule.Helper.checkType(providerdata.getUserInfo) == "function" && msg.content) {
                        providerdata.getUserInfo(msg.senderUserId, {
                            onSuccess: function (data) {
                                if (data) {
                                    msg.content.userInfo = new WidgetModule.UserInfo(data.userId, data.name, data.portraitUri);
                                }
                            }
                        });
                    }
                    switch (data.messageType) {
                        case WidgetModule.MessageType.VoiceMessage:
                            msg.content.isUnReade = true;
                        case WidgetModule.MessageType.TextMessage:
                        case WidgetModule.MessageType.LocationMessage:
                        case WidgetModule.MessageType.ImageMessage:
                        case WidgetModule.MessageType.RichContentMessage:
                            addMessageAndOperation(msg);
                            var voiceBase = providerdata.voiceSound == true && eleplaysound && data.messageDirection == WidgetModule.MessageDirection.RECEIVE && defaultconfig.voiceNotification;
                            var currentConvversationBase = conversationServer.current && conversationServer.current.targetType == msg.conversationType && conversationServer.current.targetId == msg.targetId;
                            var notificationBase = (document.hidden || !WebIMWidget.display) && data.messageDirection == WidgetModule.MessageDirection.RECEIVE && defaultconfig.desktopNotification;
                            if ((defaultconfig.displayConversationList && voiceBase) || (!defaultconfig.displayConversationList && voiceBase && currentConvversationBase)) {
                                eleplaysound.play();
                            }
                            if ((notificationBase && defaultconfig.displayConversationList) || (!defaultconfig.displayConversationList && notificationBase && currentConvversationBase)) {
                                WidgetModule.NotificationHelper.showNotification({
                                    title: msg.content.userInfo.name,
                                    icon: "",
                                    body: WidgetModule.Message.messageToNotification(data), data: { targetId: msg.targetId, targetType: msg.conversationType }
                                });
                            }
                            break;
                        case WidgetModule.MessageType.ContactNotificationMessage:
                            //好友通知自行处理
                            break;
                        case WidgetModule.MessageType.InformationNotificationMessage:
                            addMessageAndOperation(msg);
                            break;
                        case WidgetModule.MessageType.UnknownMessage:
                            //未知消息自行处理
                            break;
                        case WidgetModule.MessageType.ReadReceiptMessage:
                            if (data.messageDirection == WidgetModule.MessageDirection.SEND) {
                                RongIMSDKServer.clearUnreadCount(data.conversationType, data.targetId);
                            }
                            break;
                        default:
                            //未捕获的消息类型
                            break;
                    }
                    if (WebIMWidget.onReceivedMessage) {
                        WebIMWidget.onReceivedMessage(msg);
                    }
                    conversationServer.onReceivedMessage(msg);
                    if (!document.hidden && WebIMWidget.display && conversationServer.current && conversationServer.current.targetType == msg.conversationType && conversationServer.current.targetId == msg.targetId && data.messageDirection == WidgetModule.MessageDirection.RECEIVE && data.messageType != WidgetModule.MessageType.ReadReceiptMessage) {
                        RongIMSDKServer.clearUnreadCount(conversationServer.current.targetType, conversationServer.current.targetId);
                        RongIMSDKServer.sendReadReceiptMessage(conversationServer.current.targetId, conversationServer.current.targetType);
                    }
                    conversationListServer.updateConversations().then(function () { });
                }
            });
            window.onfocus = function () {
                if (conversationServer.current && conversationServer.current.targetId && WebIMWidget.display) {
                    RongIMSDKServer.getConversation(conversationServer.current.targetType, conversationServer.current.targetId).then(function (conv) {
                        if (conv && conv.unreadMessageCount > 0) {
                            RongIMSDKServer.clearUnreadCount(conversationServer.current.targetType, conversationServer.current.targetId);
                            RongIMSDKServer.sendReadReceiptMessage(conversationServer.current.targetId, conversationServer.current.targetType);
                            conversationListServer.updateConversations().then(function () { });
                        }
                    });
                }
            };
        };
        function addMessageAndOperation(msg) {
            var hislist = conversationServer._cacheHistory[msg.conversationType + "_" + msg.targetId] = conversationServer._cacheHistory[msg.conversationType + "_" + msg.targetId] || [];
            if (hislist.length == 0) {
                if (msg.conversationType != WidgetModule.EnumConversationType.CUSTOMER_SERVICE) {
                    hislist.push(new WidgetModule.GetHistoryPanel());
                }
                hislist.push(new WidgetModule.TimePanl(msg.sentTime));
            }
            conversationServer._addHistoryMessages(msg);
        }
        WebIMWidget.setConversation = function (targetType, targetId, title) {
            conversationServer.onConversationChangged(new WidgetModule.Conversation(targetType, targetId, title));
        };
        WebIMWidget.setUserInfoProvider = function (fun) {
            providerdata.getUserInfo = fun;
        };
        WebIMWidget.setGroupInfoProvider = function (fun) {
            providerdata.getGroupInfo = fun;
        };
        WebIMWidget.setOnlineStatusProvider = function (fun) {
            providerdata.getOnlineStatus = fun;
        };
        WebIMWidget.EnumConversationListPosition = WidgetModule.EnumConversationListPosition;
        WebIMWidget.EnumConversationType = WidgetModule.EnumConversationType;
        WebIMWidget.show = function () {
            WebIMWidget.display = true;
            WebIMWidget.fullScreen = false;
        };
        WebIMWidget.hidden = function () {
            WebIMWidget.display = false;
        };
        WebIMWidget.getCurrentConversation = function () {
            return conversationServer.current;
        };
        return WebIMWidget;
    }]);
widget.directive("rongWidget", [function () {
        return {
            restrict: "E",
            templateUrl: "./src/ts/main.tpl.html",
            controller: "rongWidgetController"
        };
    }]);
widget.controller("rongWidgetController", ["$scope", "$interval", "WebIMWidget", "widgetConfig", "providerdata", "conversationServer", "RongIMSDKServer", "conversationListServer",
    function ($scope, $interval, WebIMWidget, widgetConfig, providerdata, conversationServer, RongIMSDKServer, conversationListServer) {
        $scope.main = WebIMWidget;
        $scope.widgetConfig = widgetConfig;
        $scope.data = providerdata;
        WebIMWidget.show = function () {
            WebIMWidget.display = true;
            WebIMWidget.fullScreen = false;
            WebIMWidget.onShow && WebIMWidget.onShow();
            setTimeout(function () {
                $scope.$apply();
            });
        };
        var interval = null;
        $scope.$watch("data.totalUnreadCount", function (newVal, oldVal) {
            if (newVal > 0) {
                interval && $interval.cancel(interval);
                interval = $interval(function () {
                    $scope.twinkle = !$scope.twinkle;
                }, 1000);
            }
            else {
                $interval.cancel(interval);
            }
        });
        $scope.$watch("main.display", function () {
            if (conversationServer.current && conversationServer.current.targetId && WebIMWidget.display) {
                RongIMSDKServer.getConversation(conversationServer.current.targetType, conversationServer.current.targetId).then(function (conv) {
                    if (conv && conv.unreadMessageCount > 0) {
                        RongIMSDKServer.clearUnreadCount(conversationServer.current.targetType, conversationServer.current.targetId);
                        RongIMSDKServer.sendReadReceiptMessage(conversationServer.current.targetId, conversationServer.current.targetType);
                        conversationListServer.updateConversations().then(function () { });
                    }
                });
            }
        });
        WebIMWidget.hidden = function () {
            WebIMWidget.display = false;
            setTimeout(function () {
                $scope.$apply();
            });
        };
        $scope.showbtn = function () {
            WebIMWidget.display = true;
            WebIMWidget.onShow && WebIMWidget.onShow();
        };
    }]);
widget.filter('trustHtml', ["$sce", function ($sce) {
        return function (str) {
            return $sce.trustAsHtml(str);
        };
    }]);
widget.filter("historyTime", ["$filter", function ($filter) {
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
widget.directive('errSrc', function () {
    return {
        link: function (scope, element, attrs) {
            if (!attrs.ngSrc) {
                attrs.$set('src', attrs.errSrc);
            }
            element.bind('error', function () {
                if (attrs.src != attrs.errSrc) {
                    attrs.$set('src', attrs.errSrc);
                }
            });
        }
    };
});
/// <reference path="../../typings/tsd.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WidgetModule;
(function (WidgetModule) {
    (function (EnumConversationListPosition) {
        EnumConversationListPosition[EnumConversationListPosition["left"] = 0] = "left";
        EnumConversationListPosition[EnumConversationListPosition["right"] = 1] = "right";
    })(WidgetModule.EnumConversationListPosition || (WidgetModule.EnumConversationListPosition = {}));
    var EnumConversationListPosition = WidgetModule.EnumConversationListPosition;
    (function (EnumConversationType) {
        EnumConversationType[EnumConversationType["PRIVATE"] = 1] = "PRIVATE";
        EnumConversationType[EnumConversationType["DISCUSSION"] = 2] = "DISCUSSION";
        EnumConversationType[EnumConversationType["GROUP"] = 3] = "GROUP";
        EnumConversationType[EnumConversationType["CHATROOM"] = 4] = "CHATROOM";
        EnumConversationType[EnumConversationType["CUSTOMER_SERVICE"] = 5] = "CUSTOMER_SERVICE";
        EnumConversationType[EnumConversationType["SYSTEM"] = 6] = "SYSTEM";
        EnumConversationType[EnumConversationType["APP_PUBLIC_SERVICE"] = 7] = "APP_PUBLIC_SERVICE";
        EnumConversationType[EnumConversationType["PUBLIC_SERVICE"] = 8] = "PUBLIC_SERVICE";
    })(WidgetModule.EnumConversationType || (WidgetModule.EnumConversationType = {}));
    var EnumConversationType = WidgetModule.EnumConversationType;
    (function (MessageDirection) {
        MessageDirection[MessageDirection["SEND"] = 1] = "SEND";
        MessageDirection[MessageDirection["RECEIVE"] = 2] = "RECEIVE";
    })(WidgetModule.MessageDirection || (WidgetModule.MessageDirection = {}));
    var MessageDirection = WidgetModule.MessageDirection;
    (function (ReceivedStatus) {
        ReceivedStatus[ReceivedStatus["READ"] = 1] = "READ";
        ReceivedStatus[ReceivedStatus["LISTENED"] = 2] = "LISTENED";
        ReceivedStatus[ReceivedStatus["DOWNLOADED"] = 4] = "DOWNLOADED";
    })(WidgetModule.ReceivedStatus || (WidgetModule.ReceivedStatus = {}));
    var ReceivedStatus = WidgetModule.ReceivedStatus;
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
    })(WidgetModule.SentStatus || (WidgetModule.SentStatus = {}));
    var SentStatus = WidgetModule.SentStatus;
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
    })(WidgetModule.InputPanelType || (WidgetModule.InputPanelType = {}));
    var InputPanelType = WidgetModule.InputPanelType;
    WidgetModule.MessageType = {
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
    })(WidgetModule.PanelType || (WidgetModule.PanelType = {}));
    var PanelType = WidgetModule.PanelType;
    var ChatPanel = (function () {
        function ChatPanel(type) {
            this.panelType = type;
        }
        return ChatPanel;
    })();
    WidgetModule.ChatPanel = ChatPanel;
    var TimePanl = (function (_super) {
        __extends(TimePanl, _super);
        function TimePanl(date) {
            _super.call(this, PanelType.Time);
            this.sentTime = date;
        }
        return TimePanl;
    })(ChatPanel);
    WidgetModule.TimePanl = TimePanl;
    var GetHistoryPanel = (function (_super) {
        __extends(GetHistoryPanel, _super);
        function GetHistoryPanel() {
            _super.call(this, PanelType.getHistory);
        }
        return GetHistoryPanel;
    })(ChatPanel);
    WidgetModule.GetHistoryPanel = GetHistoryPanel;
    var GetMoreMessagePanel = (function (_super) {
        __extends(GetMoreMessagePanel, _super);
        function GetMoreMessagePanel() {
            _super.call(this, PanelType.getMore);
        }
        return GetMoreMessagePanel;
    })(ChatPanel);
    WidgetModule.GetMoreMessagePanel = GetMoreMessagePanel;
    var TimePanel = (function (_super) {
        __extends(TimePanel, _super);
        function TimePanel(time) {
            _super.call(this, PanelType.Time);
            this.sentTime = time;
        }
        return TimePanel;
    })(ChatPanel);
    WidgetModule.TimePanel = TimePanel;
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
                case WidgetModule.MessageType.TextMessage:
                    var texmsg = new TextMessage();
                    var content = SDKmsg.content.content;
                    if (RongIMLib.RongIMEmoji && RongIMLib.RongIMEmoji.emojiToHTML) {
                        content = RongIMLib.RongIMEmoji.emojiToHTML(content);
                    }
                    texmsg.content = content;
                    msg.content = texmsg;
                    break;
                case WidgetModule.MessageType.ImageMessage:
                    var image = new ImageMessage();
                    var content = SDKmsg.content.content || "";
                    if (content.indexOf("base64,") == -1) {
                        content = "data:image/png;base64," + content;
                    }
                    image.content = content;
                    image.imageUri = SDKmsg.content.imageUri;
                    msg.content = image;
                    break;
                case WidgetModule.MessageType.VoiceMessage:
                    var voice = new VoiceMessage();
                    voice.content = SDKmsg.content.content;
                    voice.duration = SDKmsg.content.duration;
                    msg.content = voice;
                    break;
                case WidgetModule.MessageType.RichContentMessage:
                    var rich = new RichContentMessage();
                    rich.content = SDKmsg.content.content;
                    rich.title = SDKmsg.content.title;
                    rich.imageUri = SDKmsg.content.imageUri;
                    msg.content = rich;
                    break;
                case WidgetModule.MessageType.LocationMessage:
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
                case WidgetModule.MessageType.InformationNotificationMessage:
                    var info = new InformationNotificationMessage();
                    msg.panelType = 2; //灰条消息
                    info.content = SDKmsg.content.message;
                    msg.content = info;
                    break;
                case WidgetModule.MessageType.DiscussionNotificationMessage:
                    var discussion = new DiscussionNotificationMessage();
                    discussion.extension = SDKmsg.content.extension;
                    discussion.operation = SDKmsg.content.operation;
                    discussion.type = SDKmsg.content.type;
                    discussion.isHasReceived = SDKmsg.content.isHasReceived;
                    msg.content = discussion;
                case WidgetModule.MessageType.HandShakeResponseMessage:
                    var handshak = new HandShakeResponseMessage();
                    handshak.status = SDKmsg.content.status;
                    handshak.msg = SDKmsg.content.msg;
                    handshak.data = SDKmsg.content.data;
                    msg.content = handshak;
                    break;
                case WidgetModule.MessageType.ChangeModeResponseMessage:
                    var change = new ChangeModeResponseMessage();
                    change.code = SDKmsg.content.code;
                    change.data = SDKmsg.content.data;
                    change.status = SDKmsg.content.status;
                    msg.content = change;
                    break;
                case WidgetModule.MessageType.CustomerStatusUpdateMessage:
                    var up = new CustomerStatusUpdateMessage();
                    up.serviceStatus = SDKmsg.content.serviceStatus;
                    msg.content = up;
                    break;
                case WidgetModule.MessageType.TerminateMessage:
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
            if (msgtype == WidgetModule.MessageType.ImageMessage) {
                msgContent = "[图片]";
            }
            else if (msgtype == WidgetModule.MessageType.LocationMessage) {
                msgContent = "[位置]";
            }
            else if (msgtype == WidgetModule.MessageType.VoiceMessage) {
                msgContent = "[语音]";
            }
            else if (msgtype == WidgetModule.MessageType.ContactNotificationMessage || msgtype == WidgetModule.MessageType.CommandNotificationMessage) {
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
    WidgetModule.Message = Message;
    var UserInfo = (function () {
        function UserInfo(userId, name, portraitUri) {
            this.userId = userId;
            this.name = name;
            this.portraitUri = portraitUri;
        }
        return UserInfo;
    })();
    WidgetModule.UserInfo = UserInfo;
    var GroupInfo = (function () {
        function GroupInfo(userId, name, portraitUri) {
            this.userId = userId;
            this.name = name;
            this.portraitUri = portraitUri;
        }
        return GroupInfo;
    })();
    WidgetModule.GroupInfo = GroupInfo;
    var TextMessage = (function () {
        function TextMessage(msg) {
            msg = msg || {};
            this.content = msg.content;
            this.userInfo = msg.userInfo;
        }
        return TextMessage;
    })();
    WidgetModule.TextMessage = TextMessage;
    var HandShakeResponseMessage = (function () {
        function HandShakeResponseMessage() {
        }
        return HandShakeResponseMessage;
    })();
    WidgetModule.HandShakeResponseMessage = HandShakeResponseMessage;
    var ChangeModeResponseMessage = (function () {
        function ChangeModeResponseMessage() {
        }
        return ChangeModeResponseMessage;
    })();
    WidgetModule.ChangeModeResponseMessage = ChangeModeResponseMessage;
    var TerminateMessage = (function () {
        function TerminateMessage() {
        }
        return TerminateMessage;
    })();
    WidgetModule.TerminateMessage = TerminateMessage;
    var CustomerStatusUpdateMessage = (function () {
        function CustomerStatusUpdateMessage() {
        }
        return CustomerStatusUpdateMessage;
    })();
    WidgetModule.CustomerStatusUpdateMessage = CustomerStatusUpdateMessage;
    var InformationNotificationMessage = (function () {
        function InformationNotificationMessage() {
        }
        return InformationNotificationMessage;
    })();
    WidgetModule.InformationNotificationMessage = InformationNotificationMessage;
    var ImageMessage = (function () {
        function ImageMessage() {
        }
        return ImageMessage;
    })();
    WidgetModule.ImageMessage = ImageMessage;
    var VoiceMessage = (function () {
        function VoiceMessage() {
        }
        return VoiceMessage;
    })();
    WidgetModule.VoiceMessage = VoiceMessage;
    var LocationMessage = (function () {
        function LocationMessage() {
        }
        return LocationMessage;
    })();
    WidgetModule.LocationMessage = LocationMessage;
    var RichContentMessage = (function () {
        function RichContentMessage() {
        }
        return RichContentMessage;
    })();
    WidgetModule.RichContentMessage = RichContentMessage;
    var DiscussionNotificationMessage = (function () {
        function DiscussionNotificationMessage() {
        }
        return DiscussionNotificationMessage;
    })();
    WidgetModule.DiscussionNotificationMessage = DiscussionNotificationMessage;
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
    WidgetModule.Conversation = Conversation;
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
                if (WidgetModule.Helper.browser.msie) {
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
                img.src = WidgetModule.Helper.ImageHelper.getFullPath(obj);
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
    WidgetModule.Helper = Helper;
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
    WidgetModule.NotificationHelper = NotificationHelper;
})(WidgetModule || (WidgetModule = {}));
var SDKServer = angular.module("RongIMSDKModule", []);
SDKServer.factory("RongIMSDKServer", ["$q", function ($q) {
        var RongIMSDKServer = {};
        RongIMSDKServer.init = function (appkey) {
            RongIMLib.RongIMClient.init(appkey);
        };
        RongIMSDKServer.connect = function (token) {
            var defer = $q.defer();
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
        RongIMSDKServer.getInstance = function () {
            return RongIMLib.RongIMClient.getInstance();
        };
        RongIMSDKServer.sendReadReceiptMessage = function (targetId, type) {
            RongIMLib.RongIMClient.getInstance().getConversation(Number(type), targetId, {
                onSuccess: function (data) {
                    if (data) {
                        var read = RongIMLib.ReadReceiptMessage.obtain(data.latestMessage.messageUId, data.latestMessage.sentTime, "1");
                        RongIMSDKServer.sendMessage(type, targetId, read);
                    }
                },
                onError: function () {
                }
            });
        };
        RongIMSDKServer.setOnReceiveMessageListener = function (option) {
            RongIMLib.RongIMClient.setOnReceiveMessageListener(option);
        };
        RongIMSDKServer.setConnectionStatusListener = function (option) {
            RongIMLib.RongIMClient.setConnectionStatusListener(option);
        };
        RongIMSDKServer.sendMessage = function (conver, targetId, content) {
            var defer = $q.defer();
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
        RongIMSDKServer.reconnect = function (callback) {
            RongIMLib.RongIMClient.reconnect(callback);
        };
        RongIMSDKServer.clearUnreadCount = function (type, targetid) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().clearUnreadCount(type, targetid, {
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onError: function (error) {
                    defer.reject(error);
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.getTotalUnreadCount = function () {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getTotalUnreadCount({
                onSuccess: function (num) {
                    defer.resolve(num);
                },
                onError: function () {
                    defer.reject();
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.getConversationList = function () {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getConversationList({
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onError: function (error) {
                    defer.reject(error);
                }
            }, null);
            return defer.promise;
        };
        // RongIMSDKServer.conversationList = function() {
        //     return RongIMLib.RongIMClient._memoryStore.conversationList;
        //     // return RongIMLib.RongIMClient.conversationMap.conversationList;
        // }
        RongIMSDKServer.removeConversation = function (type, targetId) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().removeConversation(type, targetId, {
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onError: function (error) {
                    defer.reject(error);
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.createConversation = function (type, targetId, title) {
            RongIMLib.RongIMClient.getInstance().createConversation(type, targetId, title);
        };
        RongIMSDKServer.getConversation = function (type, targetId) {
            var defer = $q.defer();
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
        RongIMSDKServer.getDraft = function (type, targetId) {
            return RongIMLib.RongIMClient.getInstance().getTextMessageDraft(type, targetId) || "";
        };
        RongIMSDKServer.setDraft = function (type, targetId, value) {
            return RongIMLib.RongIMClient.getInstance().saveTextMessageDraft(type, targetId, value);
        };
        RongIMSDKServer.clearDraft = function (type, targetId) {
            return RongIMLib.RongIMClient.getInstance().clearTextMessageDraft(type, targetId);
        };
        RongIMSDKServer.getHistoryMessages = function (type, targetId, num) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getHistoryMessages(type, targetId, null, num, {
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
        RongIMSDKServer.disconnect = function () {
            RongIMLib.RongIMClient.getInstance().disconnect();
        };
        RongIMSDKServer.logout = function () {
            if (RongIMLib && RongIMLib.RongIMClient) {
                RongIMLib.RongIMClient.getInstance().logout();
            }
        };
        RongIMSDKServer.voice = {
            init: function () {
                // RongIMLib.voice.init()
            },
            play: function (content, time) {
                RongIMLib.voice.play(content, time);
            }
        };
        return RongIMSDKServer;
    }]);

angular.module('RongWebIMWidget').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./src/ts/conversation/template.tpl.html',
    "<div id=rong-conversation class=\"rongcloud-kefuChatBox rongcloud-both rongcloud-am-fade-and-slide-top\" ng-show=showSelf ng-class=\"{'fullScreen':resoures.fullScreen}\"><evaluatedir type=evaluate.type display=evaluate.showevaluate confirm=evaluate.onConfirm(data) cancle=evaluate.onCancle()></evaluatedir><div class=rongcloud-kefuChat><div id=header class=\"rongcloud-rong-header rongcloud-blueBg rongcloud-online\"><div class=\"rongcloud-infoBar rongcloud-pull-left\"><div class=rongcloud-infoBarTit><span class=rongcloud-kefuName ng-bind=currentConversation.title></span></div></div><div class=\"rongcloud-toolBar rongcloud-headBtn rongcloud-pull-right\"><div ng-show=!widgetConfig.displayConversationList&&widgetConfig.voiceNotification class=rongcloud-voice ng-class=\"{'rongcloud-voice-mute':!data.voiceSound,'rongcloud-voice-sound':data.voiceSound}\" ng-click=\"data.voiceSound=!data.voiceSound\"></div><a href=javascript:; class=\"rongcloud-kefuChatBoxHide rongcloud-sprite\" ng-show=!widgetConfig.displayConversationList ng-click=minimize() title=隐藏></a> <a href=javascript:; class=\"rongcloud-kefuChatBoxClose rongcloud-sprite\" ng-click=close() title=结束对话></a></div></div><div class=\"rongcloud-outlineBox rongcloud-hide\"><div class=rongcloud-sprite></div><span>网络连接断开</span></div><div id=Messages><div class=rongcloud-emptyBox>暂时没有新消息</div><div class=rongcloud-MessagesInner><div ng-repeat=\"item in messageList\" ng-switch=item.panelType><div class=rongcloud-Messages-date ng-switch-when=104><b>{{item.sentTime|historyTime}}</b></div><div class=rongcloud-Messages-history ng-switch-when=105><b ng-click=getHistory()>查看历史消息</b></div><div class=rongcloud-Messages-history ng-switch-when=106><b ng-click=getMoreMessage()>获取更多消息</b></div><div class=rongcloud-sys-tips ng-switch-when=2><span ng-bind-html=item.content.content|trustHtml></span></div><div class=rongcloud-Message ng-switch-when=1><div class=rongcloud-Messages-unreadLine></div><div><div class=rongcloud-Message-header><img class=\"rongcloud-img rongcloud-u-isActionable rongcloud-Message-avatar rongcloud-avatar\" ng-src=\"{{item.content.userInfo.portraitUri||'http://7xo1cb.com1.z0.glb.clouddn.com/20160230163460.jpg'}}\" alt=\"\"><div class=\"rongcloud-Message-author rongcloud-clearfix\"><a class=\"rongcloud-author rongcloud-u-isActionable\">{{item.content.userInfo.name}}</a> <span>{{item.content.userInfo.id}}</span></div></div></div><div class=rongcloud-Message-body ng-switch=item.messageType><textmessage ng-switch-when=TextMessage msg=item.content></textmessage><imagemessage ng-switch-when=ImageMessage msg=item.content></imagemessage><voicemessage ng-switch-when=VoiceMessage msg=item.content></voicemessage><locationmessage ng-switch-when=LocationMessage msg=item.content></locationmessage><richcontentmessage ng-switch-when=RichContentMessage msg=item.content></richcontentmessage></div></div></div></div></div><div id=footer class=rongcloud-rong-footer style=\"display: block\"><div class=rongcloud-footer-con><div class=rongcloud-text-layout><div id=funcPanel class=\"rongcloud-funcPanel rongcloud-robotMode\"><div class=rongcloud-mode1 ng-show=\"_inputPanelState==0\"><div class=rongcloud-MessageForm-tool id=expressionWrap><i class=\"rongcloud-sprite rongcloud-iconfont-smile\" ng-click=\"showemoji=!showemoji\"></i><div class=rongcloud-expressionWrap ng-show=showemoji><i class=rongcloud-arrow></i><emoji ng-repeat=\"item in emojiList\" item=item content=msgvalue></emoji></div></div><div class=rongcloud-MessageForm-tool><i class=\"rongcloud-sprite rongcloud-iconfont-upload\" id=upload-file style=\"position: relative; z-index: 1\"></i></div></div><div class=rongcloud-mode2 ng-show=\"_inputPanelState==2\"><a ng-click=switchPerson() id=chatSwitch class=rongcloud-chatSwitch>转人工服务</a></div></div><pre id=inputMsg class=\"rongcloud-text rongcloud-grey\" contenteditable contenteditable-dire ng-focus=\"showemoji=fase\" style=\"background-color: rgba(0,0,0,0);color:black\" ctrl-enter-keys fun=send() ctrlenter=false placeholder=请输入文字... ondrop=\"return false\" ng-model=currentConversation.messageContent></pre></div><div class=rongcloud-powBox><button type=button style=\"background-color: #0099ff\" class=\"rongcloud-rong-btn rongcloud-rong-send-btn\" id=rong-sendBtn ng-click=send()>发送</button></div></div></div></div></div>"
  );


  $templateCache.put('./src/ts/conversationlist/conversationList.tpl.html',
    "<div id=rong-conversation-list class=\"rongcloud-kefuListBox rongcloud-both\"><div class=rongcloud-kefuList><div class=\"rongcloud-rong-header rongcloud-blueBg\"><div class=\"rongcloud-toolBar rongcloud-headBtn\"><div ng-show=config.voiceNotification class=rongcloud-voice ng-class=\"{'rongcloud-voice-mute':!data.voiceSound,'rongcloud-voice-sound':data.voiceSound}\" ng-click=\"data.voiceSound=!data.voiceSound\"></div><div class=\"rongcloud-sprite rongcloud-people\"></div><span class=rongcloud-recent>最近联系人</span><div class=\"rongcloud-sprite rongcloud-arrow-down\" style=\"cursor: pointer\" ng-click=minbtn()></div></div></div><div class=rongcloud-content><div class=rongcloud-netStatus ng-hide=connected><div class=rongcloud-sprite></div><span>连接断开,请刷新重连</span></div><div><conversation-item ng-repeat=\"item in conversationListServer.conversationList\" item=item></conversation-item></div></div></div></div>"
  );


  $templateCache.put('./src/ts/evaluate/evaluate.tpl.html',
    "<div class=rongcloud-layermbox ng-show=display><div class=rongcloud-laymshade></div><div class=rongcloud-layermmain><div class=rongcloud-section><div class=rongcloud-layermchild ng-show=!end><div class=rongcloud-layermcont><div class=rongcloud-type1 ng-show=\"type==1\"><h4>&nbsp;评价客服</h4><div class=rongcloud-layerPanel1><div class=rongcloud-star><span ng-repeat=\"item in stars track by $index\"><span ng-class=\"{'rongcloud-star-on':$index<data.stars,'rongcloud-star-off':$index>=data.stars}\" ng-click=confirm($index+1)></span></span></div></div></div><div class=rongcloud-type2 ng-show=\"type==2\"><h4>&nbsp;&nbsp;是否解决了您的问题 ？</h4><div class=rongcloud-layerPanel1><a class=\"rongcloud-rong-btn rongcloud-btnY\" ng-class=\"{'cur':data.value===true}\" href=javascript:void(0); ng-click=confirm(true)>是</a> <a class=\"rongcloud-rong-btn rongcloud-btnN\" ng-class=\"{'cur':data.value===false}\" href=javascript:void(0); ng-click=confirm(false)>否</a></div></div><div class=rongcloud-layerPanel2 ng-show=displayDescribe><p>是否有以下情况 ？</p><div class=rongcloud-labels><span ng-repeat=\"item in labels\"><a class=rongcloud-rong-btn ng-class=\"{'cur':data.label==item}\" ng-click=\"data.label=item\" href=\"\">{{item}}</a></span></div><div class=rongcloud-suggestBox><textarea name=\"\" placeholder=欢迎给我们的服务提建议~ ng-model=data.describe></textarea></div><div class=rongcloud-subBox><a class=rongcloud-rong-btn href=\"\" ng-click=commit()>提交评价</a></div></div></div><div class=rongcloud-layermbtn><span ng-click=confirm()>跳过</span><span ng-click=cancle()>取消</span></div></div><div class=\"rongcloud-layermchild rongcloud-feedback\" ng-show=end><div class=rongcloud-layermcont>感谢您的反馈 ^ - ^ ！</div></div></div></div></div>"
  );


  $templateCache.put('./src/ts/main.tpl.html',
    "<div id=rong-widget-box class=rongcloud-container><div ng-show=main.display><rong-conversation></rong-conversation><rong-conversation-list></rong-conversation-list></div><div id=rong-widget-minbtn class=\"rongcloud-kefuBtnBox rongcloud-blueBg\" ng-show=!main.display&&widgetConfig.displayMinButton ng-click=showbtn()><a class=rongcloud-kefuBtn href=\"javascript: void(0);\"><div class=\"rongcloud-sprite rongcloud-people\"></div><span class=rongcloud-recent ng-show=\"!data.totalUnreadCount||data.totalUnreadCount==0\">{{widgetConfig.reminder||\"最近联系人\"}}</span> <span class=rongcloud-recent ng-show=\"data.totalUnreadCount>0\"><span ng-show=twinkle>(您有未读消息)</span></span></a></div><audio id=rongcloud-playsound style=\"width: 0px;height: 0px;display: none\" src=\"\" controls></audio></div>"
  );

}]);

/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
(function(e,t){typeof module!="undefined"&&module.exports?module.exports=t():typeof define=="function"&&define.amd?define(t):this[e]=t()})("$script",function(){function p(e,t){for(var n=0,i=e.length;n<i;++n)if(!t(e[n]))return r;return 1}function d(e,t){p(e,function(e){return!t(e)})}function v(e,t,n){function g(e){return e.call?e():u[e]}function y(){if(!--h){u[o]=1,s&&s();for(var e in f)p(e.split("|"),g)&&!d(f[e],g)&&(f[e]=[])}}e=e[i]?e:[e];var r=t&&t.call,s=r?t:n,o=r?e.join(""):t,h=e.length;return setTimeout(function(){d(e,function t(e,n){if(e===null)return y();!n&&!/^https?:\/\//.test(e)&&c&&(e=e.indexOf(".js")===-1?c+e+".js":c+e);if(l[e])return o&&(a[o]=1),l[e]==2?y():setTimeout(function(){t(e,!0)},0);l[e]=1,o&&(a[o]=1),m(e,y)})},0),v}function m(n,r){var i=e.createElement("script"),u;i.onload=i.onerror=i[o]=function(){if(i[s]&&!/^c|loade/.test(i[s])||u)return;i.onload=i[o]=null,u=1,l[n]=2,r()},i.async=1,i.src=h?n+(n.indexOf("?")===-1?"?":"&")+h:n,t.insertBefore(i,t.lastChild)}var e=document,t=e.getElementsByTagName("head")[0],n="string",r=!1,i="push",s="readyState",o="onreadystatechange",u={},a={},f={},l={},c,h;return v.get=m,v.order=function(e,t,n){(function r(i){i=e.shift(),e.length?v(i,r):v(i,t,n)})()},v.path=function(e){c=e},v.urlArgs=function(e){h=e},v.ready=function(e,t,n){e=e[i]?e:[e];var r=[];return!d(e,function(e){u[e]||r[i](e)})&&p(e,function(e){return u[e]})?t():!function(e){f[e]=f[e]||[],f[e][i](t),n&&n(r)}(e.join("|")),v},v.done=function(e){v([null],e)},v})

/*global plupload ,mOxie*/
/*global ActiveXObject */
/*exported Qiniu */
/*exported QiniuJsSDK */

function QiniuJsSDK() {
  var qiniuUploadUrl;
  if (window.location.protocol === 'https:') {
    qiniuUploadUrl = 'https://up.qbox.me';
  } else {
    qiniuUploadUrl = 'http://upload.qiniu.com';
  }

  this.detectIEVersion = function() {
    var v = 4,
      div = document.createElement('div'),
      all = div.getElementsByTagName('i');
    while (
      div.innerHTML = '<!--[if gt IE ' + v + ']><i></i><![endif]-->',
      all[0]
    ) {
      v++;
    }
    return v > 4 ? v : false;
  };

  this.isImage = function(url) {
    var res, suffix = "";
    var imageSuffixes = ["png", "jpg", "jpeg", "gif", "bmp"];
    var suffixMatch = /\.([a-zA-Z0-9]+)(\?|\@|$)/;

    if (!url || !suffixMatch.test(url)) {
      return false;
    }
    res = suffixMatch.exec(url);
    suffix = res[1].toLowerCase();
    for (var i = 0, l = imageSuffixes.length; i < l; i++) {
      if (suffix === imageSuffixes[i]) {
        return true;
      }
    }
    return false;
  };

  this.getFileExtension = function(filename) {
    var tempArr = filename.split(".");
    var ext;
    if (tempArr.length === 1 || (tempArr[0] === "" && tempArr.length === 2)) {
      ext = "";
    } else {
      ext = tempArr.pop().toLowerCase(); //get the extension and make it lower-case
    }
    return ext;
  };

  this.utf8_encode = function(argString) {
    // http://kevin.vanzonneveld.net
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: sowberry
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +   improved by: Yves Sucaet
    // +   bugfixed by: Onno Marsman
    // +   bugfixed by: Ulrich
    // +   bugfixed by: Rafal Kukawski
    // +   improved by: kirilloid
    // +   bugfixed by: kirilloid
    // *     example 1: this.utf8_encode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'

    if (argString === null || typeof argString === 'undefined') {
      return '';
    }

    var string = (argString + ''); // .replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    var utftext = '',
      start, end, stringl = 0;

    start = end = 0;
    stringl = string.length;
    for (var n = 0; n < stringl; n++) {
      var c1 = string.charCodeAt(n);
      var enc = null;

      if (c1 < 128) {
        end++;
      } else if (c1 > 127 && c1 < 2048) {
        enc = String.fromCharCode(
          (c1 >> 6) | 192, (c1 & 63) | 128
        );
      } else if (c1 & 0xF800 ^ 0xD800 > 0) {
        enc = String.fromCharCode(
          (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
        );
      } else { // surrogate pairs
        if (c1 & 0xFC00 ^ 0xD800 > 0) {
          throw new RangeError('Unmatched trail surrogate at ' + n);
        }
        var c2 = string.charCodeAt(++n);
        if (c2 & 0xFC00 ^ 0xDC00 > 0) {
          throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
        }
        c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
        enc = String.fromCharCode(
          (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (
            c1 & 63) | 128
        );
      }
      if (enc !== null) {
        if (end > start) {
          utftext += string.slice(start, end);
        }
        utftext += enc;
        start = end = n + 1;
      }
    }

    if (end > start) {
      utftext += string.slice(start, stringl);
    }

    return utftext;
  };

  this.base64_encode = function(data) {
    // http://kevin.vanzonneveld.net
    // +   original by: Tyler Akins (http://rumkin.com)
    // +   improved by: Bayron Guevara
    // +   improved by: Thunder.m
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Pellentesque Malesuada
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: this.utf8_encode
    // *     example 1: this.base64_encode('Kevin van Zonneveld');
    // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
    // mozilla has this native
    // - but breaks in 2.0.0.12!
    //if (typeof this.window['atob'] == 'function') {
    //    return atob(data);
    //}
    var b64 =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
      ac = 0,
      enc = '',
      tmp_arr = [];

    if (!data) {
      return data;
    }

    data = this.utf8_encode(data + '');

    do { // pack three octets into four hexets
      o1 = data.charCodeAt(i++);
      o2 = data.charCodeAt(i++);
      o3 = data.charCodeAt(i++);

      bits = o1 << 16 | o2 << 8 | o3;

      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f;

      // use hexets to index into b64, and append result to encoded string
      tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(
        h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    switch (data.length % 3) {
      case 1:
        enc = enc.slice(0, -2) + '==';
        break;
      case 2:
        enc = enc.slice(0, -1) + '=';
        break;
    }

    return enc;
  };

  this.URLSafeBase64Encode = function(v) {
    v = this.base64_encode(v);
    return v.replace(/\//g, '_').replace(/\+/g, '-');
  };

  this.createAjax = function(argument) {
    var xmlhttp = {};
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
  };

  this.parseJSON = function(data) {
    // Attempt to parse using the native JSON parser first
    if (window.JSON && window.JSON.parse) {
      return window.JSON.parse(data);
    }

    if (data === null) {
      return data;
    }
    if (typeof data === "string") {

      // Make sure leading/trailing whitespace is removed (IE can't handle it)
      data = this.trim(data);

      if (data) {
        // Make sure the incoming data is actual JSON
        // Logic borrowed from http://json.org/json2.js
        if (/^[\],:{}\s]*$/.test(data.replace(
            /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "@").replace(
            /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {

          return (function() {
            return data;
          })();
        }
      }
    }
  };

  this.trim = function(text) {
    return text === null ? "" : text.replace(/^\s+|\s+$/g, '');
  };

  //Todo ie7 handler / this.parseJSON bug;

  var that = this;

  this.uploader = function(op) {
    if (!op.domain) {
      throw 'uptoken_url or domain is required!';
    }

    if (!op.browse_button) {
      throw 'browse_button is required!';
    }

    var option = {};

    var _Error_Handler = op.init && op.init.Error;
    var _FileUploaded_Handler = op.init && op.init.FileUploaded;

    op.init.Error = function() {};
    op.init.FileUploaded = function() {};

    that.uptoken_url = op.uptoken_url;
    that.token = '';
    that.key_handler = typeof op.init.Key === 'function' ? op.init.Key : '';
    this.domain = op.domain;
    var ctx = '';
    var speedCalInfo = {
      isResumeUpload: false,
      resumeFilesize: 0,
      startTime: '',
      currentTime: ''
    };

    var reset_chunk_size = function() {
      var ie = that.detectIEVersion();
      var BLOCK_BITS, MAX_CHUNK_SIZE, chunk_size;
      var isSpecialSafari = (mOxie.Env.browser === "Safari" && mOxie.Env.version <=
          5 && mOxie.Env.os === "Windows" && mOxie.Env.osVersion === "7") ||
        (mOxie.Env.browser === "Safari" && mOxie.Env.os === "iOS" && mOxie.Env
          .osVersion === "7");
      if (ie && ie <= 9 && op.chunk_size && op.runtimes.indexOf('flash') >=
        0) {
        //  link: http://www.plupload.com/docs/Frequently-Asked-Questions#when-to-use-chunking-and-when-not
        //  when plupload chunk_size setting is't null ,it cause bug in ie8/9  which runs  flash runtimes (not support html5) .
        op.chunk_size = 0;

      } else if (isSpecialSafari) {
        // win7 safari / iOS7 safari have bug when in chunk upload mode
        // reset chunk_size to 0
        // disable chunk in special version safari
        op.chunk_size = 0;
      } else {
        BLOCK_BITS = 20;
        MAX_CHUNK_SIZE = 4 << BLOCK_BITS; //4M

        chunk_size = plupload.parseSize(op.chunk_size);
        if (chunk_size > MAX_CHUNK_SIZE) {
          op.chunk_size = MAX_CHUNK_SIZE;
        }
        // qiniu service  max_chunk_size is 4m
        // reset chunk_size to max_chunk_size(4m) when chunk_size > 4m
      }
    };
    reset_chunk_size();

    var getUpToken = function() {
      if (!op.uptoken) {
        var ajax = that.createAjax();
        ajax.open('GET', that.uptoken_url, true);
        // ajax.setRequestHeader("If-Modified-Since", "0");
        ajax.onreadystatechange = function() {
          if (ajax.readyState === 4 && ajax.status === 200) {
            var res = that.parseJSON(ajax.responseText);
            that.token = res.uptoken;
          }
        };
        ajax.send();
      } else {
        that.token = op.uptoken;
      }
    };

    var getFileKey = function(up, file, func) {
      var key = '',
        unique_names = false;
      if (!op.save_key) {
        unique_names = up.getOption && up.getOption('unique_names');
        unique_names = unique_names || (up.settings && up.settings.unique_names);
        if (unique_names) {
          var ext = that.getFileExtension(file.name);
          key = ext ? file.id + '.' + ext : file.id;
        } else if (typeof func === 'function') {
          key = func(up, file);
        } else {
          key = file.name;
        }
      }
      return key;
    };

    plupload.extend(option, op, {
      url: qiniuUploadUrl,
      multipart_params: {
        token: ''
      }
    });

    var uploader = new plupload.Uploader(option);

    uploader.bind('Init', function(up, params) {
      getUpToken();
    });
    uploader.init();

    uploader.bind('FilesAdded', function(up, files) {
      var auto_start = up.getOption && up.getOption('auto_start');
      auto_start = auto_start || (up.settings && up.settings.auto_start);
      if (auto_start) {
        plupload.each(files, function(i, file) {
          up.start();
        });
      }
      up.refresh(); // Reposition Flash/Silverlight
    });

    uploader.bind('BeforeUpload', function(up, file) {
      file.speed = file.speed || 0; // add a key named speed for file obj
      ctx = '';

      if (op.get_new_uptoken) {
        getUpToken();
      }

      var directUpload = function(up, file, func) {
        speedCalInfo.startTime = new Date().getTime();
        var multipart_params_obj;
        if (op.save_key) {
          multipart_params_obj = {
            'token': that.token
          };
        } else {
          multipart_params_obj = {
            'key': getFileKey(up, file, func),
            'token': that.token
          };
        }

        var x_vars = op.x_vars;
        if (x_vars !== undefined && typeof x_vars === 'object') {
          for (var x_key in x_vars) {
            if (x_vars.hasOwnProperty(x_key)) {
              if (typeof x_vars[x_key] === 'function') {
                multipart_params_obj['x:' + x_key] = x_vars[x_key](up,
                  file);
              } else if (typeof x_vars[x_key] !== 'object') {
                multipart_params_obj['x:' + x_key] = x_vars[x_key];
              }
            }
          }
        }


        up.setOption({
          'url': qiniuUploadUrl,
          'multipart': true,
          'chunk_size': undefined,
          'multipart_params': multipart_params_obj
        });
      };


      var chunk_size = up.getOption && up.getOption('chunk_size');
      chunk_size = chunk_size || (up.settings && up.settings.chunk_size);
      if (uploader.runtime === 'html5' && chunk_size) {
        if (file.size < chunk_size) {
          directUpload(up, file, that.key_handler);
        } else {
          var localFileInfo = localStorage.getItem(file.name);
          var blockSize = chunk_size;
          if (localFileInfo) {
            localFileInfo = JSON.parse(localFileInfo);
            var now = (new Date()).getTime();
            var before = localFileInfo.time || 0;
            var aDay = 24 * 60 * 60 * 1000; //  milliseconds
            if (now - before < aDay) {
              if (localFileInfo.percent !== 100) {
                if (file.size === localFileInfo.total) {
                  // 通过文件名和文件大小匹配，找到对应的 localstorage 信息，恢复进度
                  file.percent = localFileInfo.percent;
                  file.loaded = localFileInfo.offset;
                  ctx = localFileInfo.ctx;

                  //  计算速度时，会用到
                  speedCalInfo.isResumeUpload = true;
                  speedCalInfo.resumeFilesize = localFileInfo.offset;
                  if (localFileInfo.offset + blockSize > file.size) {
                    blockSize = file.size - localFileInfo.offset;
                  }
                } else {
                  localStorage.removeItem(file.name);
                }

              } else {
                // 进度100%时，删除对应的localStorage，避免 499 bug
                localStorage.removeItem(file.name);
              }
            } else {
              localStorage.removeItem(file.name);
            }
          }
          speedCalInfo.startTime = new Date().getTime();
          up.setOption({
            'url': qiniuUploadUrl + '/mkblk/' + blockSize,
            'multipart': false,
            'chunk_size': chunk_size,
            'required_features': "chunks",
            'headers': {
              'Authorization': 'UpToken ' + that.token
            },
            'multipart_params': {}
          });
        }
      } else {
        directUpload(up, file, that.key_handler);
      }
    });

    uploader.bind('UploadProgress', function(up, file) {
      // 计算速度

      speedCalInfo.currentTime = new Date().getTime();
      var timeUsed = speedCalInfo.currentTime - speedCalInfo.startTime; // ms
      var fileUploaded = file.loaded || 0;
      if (speedCalInfo.isResumeUpload) {
        fileUploaded = file.loaded - speedCalInfo.resumeFilesize;
      }
      file.speed = (fileUploaded / timeUsed * 1000).toFixed(0) || 0; // unit: byte/s
    });

    uploader.bind('ChunkUploaded', function(up, file, info) {
      var res = that.parseJSON(info.response);

      ctx = ctx ? ctx + ',' + res.ctx : res.ctx;
      var leftSize = info.total - info.offset;
      var chunk_size = up.getOption && up.getOption('chunk_size');
      chunk_size = chunk_size || (up.settings && up.settings.chunk_size);
      if (leftSize < chunk_size) {
        up.setOption({
          'url': qiniuUploadUrl + '/mkblk/' + leftSize
        });
      }
      localStorage.setItem(file.name, JSON.stringify({
        ctx: ctx,
        percent: file.percent,
        total: info.total,
        offset: info.offset,
        time: (new Date()).getTime()
      }));
    });

    uploader.bind('Error', (function(_Error_Handler) {
      return function(up, err) {
        var errTip = '';
        var file = err.file;
        if (file) {
          switch (err.code) {
            case plupload.FAILED:
              errTip = '上传失败。请稍后再试。';
              break;
            case plupload.FILE_SIZE_ERROR:
              var max_file_size = up.getOption && up.getOption(
                'max_file_size');
              max_file_size = max_file_size || (up.settings && up.settings
                .max_file_size);
              errTip = '浏览器最大可上传' + max_file_size + '。更大文件请使用命令行工具。';
              break;
            case plupload.FILE_EXTENSION_ERROR:
              errTip = '文件验证失败。请稍后重试。';
              break;
            case plupload.HTTP_ERROR:
              if (err.response === '') {
                // Fix parseJSON error ,when http error is like net::ERR_ADDRESS_UNREACHABLE
                errTip = err.message || '未知网络错误。';
                break;
              }
              var errorObj = that.parseJSON(err.response);
              var errorText = errorObj.error;
              switch (err.status) {
                case 400:
                  errTip = "请求报文格式错误。";
                  break;
                case 401:
                  errTip = "客户端认证授权失败。请重试或提交反馈。";
                  break;
                case 405:
                  errTip = "客户端请求错误。请重试或提交反馈。";
                  break;
                case 579:
                  errTip = "资源上传成功，但回调失败。";
                  break;
                case 599:
                  errTip = "网络连接异常。请重试或提交反馈。";
                  break;
                case 614:
                  errTip = "文件已存在。";
                  try {
                    errorObj = that.parseJSON(errorObj.error);
                    errorText = errorObj.error || 'file exists';
                  } catch (e) {
                    errorText = errorObj.error || 'file exists';
                  }
                  break;
                case 631:
                  errTip = "指定空间不存在。";
                  break;
                case 701:
                  errTip = "上传数据块校验出错。请重试或提交反馈。";
                  break;
                default:
                  errTip = "未知错误。";
                  break;
              }
              errTip = errTip + '(' + err.status + '：' + errorText +
                ')';
              break;
            case plupload.SECURITY_ERROR:
              errTip = '安全配置错误。请联系网站管理员。';
              break;
            case plupload.GENERIC_ERROR:
              errTip = '上传失败。请稍后再试。';
              break;
            case plupload.IO_ERROR:
              errTip = '上传失败。请稍后再试。';
              break;
            case plupload.INIT_ERROR:
              errTip = '网站配置错误。请联系网站管理员。';
              uploader.destroy();
              break;
            default:
              errTip = err.message + err.details;
              break;
          }
          if (_Error_Handler) {
            _Error_Handler(up, err, errTip);
          }
        }
        up.refresh(); // Reposition Flash/Silverlight
      };
    })(_Error_Handler));

    uploader.bind('FileUploaded', (function(_FileUploaded_Handler) {
      return function(up, file, info) {

        var last_step = function(up, file, info) {
          if (op.downtoken_url) {
            var ajax_downtoken = that.createAjax();
            ajax_downtoken.open('POST', op.downtoken_url, true);
            ajax_downtoken.setRequestHeader('Content-type',
              'application/x-www-form-urlencoded');
            ajax_downtoken.onreadystatechange = function() {
              if (ajax_downtoken.readyState === 4) {
                if (ajax_downtoken.status === 200) {
                  var res_downtoken;
                  try {
                    res_downtoken = that.parseJSON(ajax_downtoken
                      .responseText);
                  } catch (e) {
                    throw ('invalid json format');
                  }
                  var info_extended = {};
                  plupload.extend(info_extended, that.parseJSON(
                    info), res_downtoken);
                  if (_FileUploaded_Handler) {
                    _FileUploaded_Handler(up, file, JSON.stringify(
                      info_extended));
                  }
                } else {
                  uploader.trigger('Error', {
                    status: ajax_downtoken.status,
                    response: ajax_downtoken.responseText,
                    file: file,
                    code: plupload.HTTP_ERROR
                  });
                }
              }
            };
            ajax_downtoken.send('key=' + that.parseJSON(info).key +
              '&domain=' + op.domain);
          } else if (_FileUploaded_Handler) {
            _FileUploaded_Handler(up, file, info);
          }
        };
        info.response=info.response.replace(/'/g,"\"");
        var res = that.parseJSON(info.response);
        ctx = ctx ? ctx : res.ctx;
        if (ctx) {
          var key = '';
          if (!op.save_key) {
            key = getFileKey(up, file, that.key_handler);
            key = key ? '/key/' + that.URLSafeBase64Encode(key) : '';
          }

          var fname = '/fname/' + that.URLSafeBase64Encode(file.name);

          var x_vars = op.x_vars,
            x_val = '',
            x_vars_url = '';
          if (x_vars !== undefined && typeof x_vars === 'object') {
            for (var x_key in x_vars) {
              if (x_vars.hasOwnProperty(x_key)) {
                if (typeof x_vars[x_key] === 'function') {
                  x_val = that.URLSafeBase64Encode(x_vars[x_key](up,
                    file));
                } else if (typeof x_vars[x_key] !== 'object') {
                  x_val = that.URLSafeBase64Encode(x_vars[x_key]);
                }
                x_vars_url += '/x:' + x_key + '/' + x_val;
              }
            }
          }

          var url = qiniuUploadUrl + '/mkfile/' + file.size + key +
            fname + x_vars_url;
          var ajax = that.createAjax();
          ajax.open('POST', url, true);
          ajax.setRequestHeader('Content-Type',
            'text/plain;charset=UTF-8');
          ajax.setRequestHeader('Authorization', 'UpToken ' + that.token);
          ajax.onreadystatechange = function() {
            if (ajax.readyState === 4) {
              localStorage.removeItem(file.name);
              if (ajax.status === 200) {
                var info = ajax.responseText;
                last_step(up, file, info);
              } else {
                uploader.trigger('Error', {
                  status: ajax.status,
                  response: ajax.responseText,
                  file: file,
                  code: -200
                });
              }
            }
          };
          ajax.send(ctx);
        } else {
          last_step(up, file, info.response);
        }

      };
    })(_FileUploaded_Handler));

    return uploader;
  };

  this.getUrl = function(key) {
    if (!key) {
      return false;
    }
    key = encodeURI(key);
    var domain = this.domain;
    if (domain.slice(domain.length - 1) !== '/') {
      domain = domain + '/';
    }
    return domain + key;
  };

  this.imageView2 = function(op, key) {
    var mode = op.mode || '',
      w = op.w || '',
      h = op.h || '',
      q = op.q || '',
      format = op.format || '';
    if (!mode) {
      return false;
    }
    if (!w && !h) {
      return false;
    }

    var imageUrl = 'imageView2/' + mode;
    imageUrl += w ? '/w/' + w : '';
    imageUrl += h ? '/h/' + h : '';
    imageUrl += q ? '/q/' + q : '';
    imageUrl += format ? '/format/' + format : '';
    if (key) {
      imageUrl = this.getUrl(key) + '?' + imageUrl;
    }
    return imageUrl;
  };


  this.imageMogr2 = function(op, key) {
    var auto_orient = op['auto-orient'] || '',
      thumbnail = op.thumbnail || '',
      strip = op.strip || '',
      gravity = op.gravity || '',
      crop = op.crop || '',
      quality = op.quality || '',
      rotate = op.rotate || '',
      format = op.format || '',
      blur = op.blur || '';
    //Todo check option

    var imageUrl = 'imageMogr2';

    imageUrl += auto_orient ? '/auto-orient' : '';
    imageUrl += thumbnail ? '/thumbnail/' + thumbnail : '';
    imageUrl += strip ? '/strip' : '';
    imageUrl += gravity ? '/gravity/' + gravity : '';
    imageUrl += quality ? '/quality/' + quality : '';
    imageUrl += crop ? '/crop/' + crop : '';
    imageUrl += rotate ? '/rotate/' + rotate : '';
    imageUrl += format ? '/format/' + format : '';
    imageUrl += blur ? '/blur/' + blur : '';

    if (key) {
      imageUrl = this.getUrl(key) + '?' + imageUrl;
    }
    return imageUrl;
  };

  this.watermark = function(op, key) {

    var mode = op.mode;
    if (!mode) {
      return false;
    }

    var imageUrl = 'watermark/' + mode;

    if (mode === 1) {
      var image = op.image || '';
      if (!image) {
        return false;
      }
      imageUrl += image ? '/image/' + this.URLSafeBase64Encode(image) : '';
    } else if (mode === 2) {
      var text = op.text ? op.text : '',
        font = op.font ? op.font : '',
        fontsize = op.fontsize ? op.fontsize : '',
        fill = op.fill ? op.fill : '';
      if (!text) {
        return false;
      }
      imageUrl += text ? '/text/' + this.URLSafeBase64Encode(text) : '';
      imageUrl += font ? '/font/' + this.URLSafeBase64Encode(font) : '';
      imageUrl += fontsize ? '/fontsize/' + fontsize : '';
      imageUrl += fill ? '/fill/' + this.URLSafeBase64Encode(fill) : '';
    } else {
      // Todo mode3
      return false;
    }

    var dissolve = op.dissolve || '',
      gravity = op.gravity || '',
      dx = op.dx || '',
      dy = op.dy || '';

    imageUrl += dissolve ? '/dissolve/' + dissolve : '';
    imageUrl += gravity ? '/gravity/' + gravity : '';
    imageUrl += dx ? '/dx/' + dx : '';
    imageUrl += dy ? '/dy/' + dy : '';

    if (key) {
      imageUrl = this.getUrl(key) + '?' + imageUrl;
    }
    return imageUrl;

  };

  this.imageInfo = function(key) {
    if (!key) {
      return false;
    }
    var url = this.getUrl(key) + '?imageInfo';
    var xhr = this.createAjax();
    var info;
    var that = this;
    xhr.open('GET', url, false);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        info = that.parseJSON(xhr.responseText);
      }
    };
    xhr.send();
    return info;
  };


  this.exif = function(key) {
    if (!key) {
      return false;
    }
    var url = this.getUrl(key) + '?exif';
    var xhr = this.createAjax();
    var info;
    var that = this;
    xhr.open('GET', url, false);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        info = that.parseJSON(xhr.responseText);
      }
    };
    xhr.send();
    return info;
  };

  this.get = function(type, key) {
    if (!key || !type) {
      return false;
    }
    if (type === 'exif') {
      return this.exif(key);
    } else if (type === 'imageInfo') {
      return this.imageInfo(key);
    }
    return false;
  };


  this.pipeline = function(arr, key) {

    var isArray = Object.prototype.toString.call(arr) === '[object Array]';
    var option, errOp, imageUrl = '';
    if (isArray) {
      for (var i = 0, len = arr.length; i < len; i++) {
        option = arr[i];
        if (!option.fop) {
          return false;
        }
        switch (option.fop) {
          case 'watermark':
            imageUrl += this.watermark(option) + '|';
            break;
          case 'imageView2':
            imageUrl += this.imageView2(option) + '|';
            break;
          case 'imageMogr2':
            imageUrl += this.imageMogr2(option) + '|';
            break;
          default:
            errOp = true;
            break;
        }
        if (errOp) {
          return false;
        }
      }
      if (key) {
        imageUrl = this.getUrl(key) + '?' + imageUrl;
        var length = imageUrl.length;
        if (imageUrl.slice(length - 1) === '|') {
          imageUrl = imageUrl.slice(0, length - 1);
        }
      }
      return imageUrl;
    }
    return false;
  };

}

var Qiniu = new QiniuJsSDK();
