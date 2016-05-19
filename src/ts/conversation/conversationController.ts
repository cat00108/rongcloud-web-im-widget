module RongWebIMWidget.conversation {

    interface ConversationScope extends ng.IScope {

        emojiList: string
        showSelf: boolean
        showemoji: boolean
        _inputPanelState: number
        messageList: any[]

        conversation: {
            title: string
            targetType: number
            targetId: string
            messageContent: string
        }

        scrollBar(): void
        getHistory(): void
        getMoreMessage(): void
        send(): void

    }

    class ConversationController {
        static $inject: string[] = ["$scope",
            "ConversationServer",
            "WebIMWidget",
            "ConversationListServer",
            "WidgetConfig",
            "ProviderData",
            "RongIMSDKServer"]

        constructor(private $scope: ConversationScope,
            private conversationServer: RongWebIMWidget.conversation.IConversationService,
            private WebIMWidget: RongWebIMWidget.WebIMWidget,
            private conversationListServer: any,
            private widgetConfig: RongWebIMWidget.WidgetConfig,
            private providerdata: RongWebIMWidget.ProviderData,
            private RongIMSDKServer: RongWebIMWidget.RongIMSDKServer) {

            conversationServer.changeConversation

        }

        changeConversation(obj: RongWebIMWidget.Conversation) {
            var _this = this;

            if (_this.widgetConfig.displayConversationList) {
                _this.$scope.showSelf = true;
            } else {
                _this.$scope.showSelf = true;
                _this.WebIMWidget.display = true;
            }

            if (!obj || !obj.targetId) {
                _this.$scope.conversation = <any>{};
                _this.$scope.messageList = [];
                _this.conversationServer.current = null;
                setTimeout(function() {
                    _this.$scope.$apply();
                });
                return;
            }
            var key = obj.targetType + "_" + obj.targetId;

            if (obj.targetType == RongWebIMWidget.EnumConversationType.CUSTOMER_SERVICE
                && (!_this.conversationServer.current || _this.conversationServer.current.targetId != obj.targetId)) {
                _this.RongIMSDKServer.startCustomService(obj.targetId);
            }

            _this.conversationServer.current = obj;
            _this.$scope.conversation = <any>obj;
            _this.$scope.conversation.messageContent = RongIMLib.RongIMClient.getInstance().getTextMessageDraft(obj.targetType, obj.targetId) || "";

            _this.$scope.messageList = _this.conversationServer._cacheHistory[key] = _this.conversationServer._cacheHistory[key] || []

            if (_this.$scope.messageList.length == 0) {
                _this.conversationServer._getHistoryMessages(obj.targetType, obj.targetId, 3)
                    .then(function(data) {
                        if (_this.$scope.messageList.length > 0) {
                            _this.$scope.messageList.unshift(new WidgetModule.TimePanl(_this.$scope.messageList[0].sentTime));
                            if (data.has) {
                                _this.$scope.messageList.unshift(new WidgetModule.GetMoreMessagePanel());
                            }
                            _this.$scope.scrollBar();
                        }
                    })
            } else {
                _this.$scope.scrollBar();
            }

        }


    }


}
