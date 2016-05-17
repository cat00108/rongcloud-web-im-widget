module RongIMWidget.conversation {

    interface CustomerService {
        type: string,
        currentType: string,
        companyName: string,
        robotName: string,
        robotIcon: string,
        robotWelcome: string,
        humanWelcome: string,
        noOneOnlineTip: string,
        isblack: string,
        human: {
            name: string,
            headimgurl: string
        }
    }

    export interface IConversationService {

        current: WidgetModule.Conversation
        _customService: CustomerService
        _cacheHistory: any

        _getHistoryMessages(targetType: number, targetId: string, number: number): angular.IPromise<any>
        _addHistoryMessages(msg: WidgetModule.Message): void

        ChangeConversation(conversation: WidgetModule.Conversation): void
        HandleMessage(message: WidgetModule.Message): void
        closeConversation(): ng.IPromise<any>

        onSendMessage(msg: RongIMWidget.Message): void
    }

    class conversationServer implements IConversationService {

        static $inject: string[] = ["$q", "ProviderData"];

        constructor(private $q: ng.IQService,
            private providerdata: RongIMWidget.ProviderData) {

        }

        current: RongIMWidget.Conversation = new RongIMWidget.Conversation
        _cacheHistory: Object = {}
        _customService: CustomerService
        _uploadToken: string

        unshiftHistoryMessages(id: string, type: number, item: any) {
          var arr = this._cacheHistory[type + "_" + id] = this._cacheHistory[type + "_" + id] || [];
          if (arr[0] && arr[0].sentTime && arr[0].panelType != WidgetModule.PanelType.Time && item.sentTime) {
            if (!WidgetModule.Helper.timeCompare(arr[0].sentTime, item.sentTime)) {
              arr.unshift(new WidgetModule.TimePanl(arr[0].sentTime));
            }
          }
          arr.unshift(item);
        }

        _getHistoryMessages(targetType: number,
            targetId: string,
            number: number,
            reset?: boolean) {

            var defer = this.$q.defer();

            RongIMLib.RongIMClient.getInstance().getHistoryMessages(targetType, targetId, reset ? 0 : null, number, {
                onSuccess: function(data, has) {
                    var msglen = data.length;
                    while (msglen--) {
                        var msg = WidgetModule.Message.convert(data[msglen]);
                        this.unshiftHistoryMessages(targetId, targetType, msg);
                        if (msg.content && this.providerdata.getUserInfo) {
                            (function(msg) {
                                this.providerdata.getUserInfo(msg.senderUserId, {
                                    onSuccess: function(obj) {
                                        msg.content.userInfo = new WidgetModule.UserInfo(obj.userId, obj.name, obj.portraitUri);
                                    }
                                })
                            })(msg)
                        }
                    }

                    defer.resolve({ data: data, has: has });
                },
                onError: function(error) {
                    defer.reject(error);
                }
            })

            return defer.promise;
        }

        _addHistoryMessages(item: WidgetModule.Message) {
            var key = item.conversationType + "_" + item.targetId;
            var arr = this._cacheHistory[key]
                = this._cacheHistory[key] || [];

            if (arr[arr.length - 1]
                && arr[arr.length - 1].panelType != WidgetModule.PanelType.Time
                && arr[arr.length - 1].sentTime
                && item.sentTime) {
                if (!WidgetModule.Helper.timeCompare(arr[arr.length - 1].sentTime,
                    item.sentTime)) {
                    arr.push(new WidgetModule.TimePanl(item.sentTime));
                }
            }
            arr.push(item);
        }

        ChangeConversation: (conversation: WidgetModule.Conversation) => void
        HandleMessage: (message: WidgetModule.Message) => void
        closeConversation: () => ng.IPromise<any>
        //_onConnectSuccess: () => void

        onSendMessage: (msg: RongIMWidget.Message) => void
    }


}
