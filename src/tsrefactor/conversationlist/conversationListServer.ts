module RongIMWidget.conversationlist {

    export interface IConversationListServer {
        _conversationList: WidgetModule.Conversation[]
        _onlineStatus: any[]

        updateConversations(): angular.IPromise<any>
        _refreshConversationList(): void
        _getConversation(type: number, id: string): WidgetModule.Conversation
    }

    class ConversationListServer implements IConversationListServer {

        static $inject: string[] = ["$q",
            "providerdata",
            "widgetConfig",
            "RongIMSDKServer",
            "conversationServer"];

        constructor(private $q: ng.IQService,
            private providerdata: RongIMWidget.ProviderData,
            private widgetConfig: RongIMWidget.WidgetConfig,
            private RongIMSDKServer: RongIMWidget.RongIMSDKServer,
            private conversationServer: RongIMWidget.conversation.IConversationService
        ) {

        }


        _conversationList: RongIMWidget.Conversation[] = [];
        _onlineStatus: any[] = [];

        updateConversations() {
            var defer = this.$q.defer();
            var _this = this;

            RongIMLib.RongIMClient.getInstance().getConversationList({
                onSuccess: function(data) {
                    _this._conversationList.splice(0, _this._conversationList.length);
                    for (var i = 0, len = data.length; i < len; i++) {
                        var con = WidgetModule.Conversation.onvert(data[i]);

                        switch (con.targetType) {
                            case RongIMLib.ConversationType.PRIVATE:
                                if (WidgetModule.Helper.checkType(_this.providerdata.getUserInfo) == "function") {
                                    (function(a, b) {
                                        _this.providerdata.getUserInfo(a.targetId, {
                                            onSuccess: function(data) {
                                                a.title = data.name;
                                                a.portraitUri = data.portraitUri;
                                                b.conversationTitle = data.name;
                                                b.portraitUri = data.portraitUri;
                                            }
                                        })
                                    } (con, data[i]));
                                }
                                break;
                            case RongIMLib.ConversationType.GROUP:
                                if (WidgetModule.Helper.checkType(_this.providerdata.getGroupInfo) == "function") {
                                    (function(a, b) {
                                        _this.providerdata.getGroupInfo(a.targetId, {
                                            onSuccess: function(data) {
                                                a.title = data.name;
                                                a.portraitUri = data.portraitUri;
                                                b.conversationTitle = data.name;
                                                b.portraitUri = data.portraitUri;
                                            }
                                        })
                                    } (con, data[i]))
                                }
                                break;
                            case RongIMLib.ConversationType.CHATROOM:
                                break;
                        }

                        _this._conversationList.push(con);
                    }
                    _this._onlineStatus.forEach(function(item) {
                        var conv = this.getConversation(WidgetModule.EnumConversationType.PRIVATE, item.id);
                        conv && (conv.onLine = item.status);
                    });

                    if (_this.widgetConfig.displayConversationList) {
                        RongIMLib.RongIMClient.getInstance().getTotalUnreadCount({
                            onSuccess: function(num) {
                                _this.providerdata.totalUnreadCount = num || 0;
                                defer.resolve();
                                _this._refreshConversationList();
                            },
                            onError: function() {

                            }
                        });
                    } else {
                        var cu = _this.conversationServer.current;
                        cu && _this.RongIMSDKServer.getConversation(cu.targetType, cu.targetId).then(function(conv) {
                            if (conv && conv.unreadMessageCount) {
                                _this.providerdata.totalUnreadCount = conv.unreadMessageCount || 0;
                                defer.resolve();
                                _this._refreshConversationList();
                            } else {
                                _this.providerdata.totalUnreadCount = 0;
                                defer.resolve();
                                _this._refreshConversationList();
                            }
                        })
                    }

                },
                onError: function(error) {
                    defer.reject(error);
                }
            }, null);
            return defer.promise;
        }
        _refreshConversationList() {
            //TODO: 暂时不实现 updateConversation 时不改变数据源
        }
        _getConversation(type: number, id: string) {

            for (var i = 0, len = this._conversationList.length; i < len; i++) {
                if (this._conversationList[i].targetType == type && this._conversationList[i].targetId == id) {
                    return this._conversationList[i];
                }
            }
            return null;
        }

    }

    angular.module("RongWebIMWidget.conversationlist")
        .service("ConversationListServer", ConversationListServer)
}
