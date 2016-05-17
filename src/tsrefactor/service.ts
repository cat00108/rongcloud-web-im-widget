namespace RongIMWidget {

    interface CallBack<T> {
        onSuccess(data: T): void
    }

    export class ProviderData {

        private _cacheUserInfo: RongIMWidget.UserInfo[] = [];

        totalUnreadCount: number = 0;
        connectionState: number = 0;
        voiceSound: boolean = false;
        currentUserInfo: RongIMWidget.UserInfo

        _getCacheUserInfo(id) {
            for (var i = 0, len = this._cacheUserInfo.length; i < len; i++) {
                if (this._cacheUserInfo[i].userId == id) {
                    return this._cacheUserInfo[i];
                }
            }
            return null;
        }

        _addUserInfo(user: WidgetModule.UserInfo) {
            var olduser = this._getCacheUserInfo(user.userId);
            if (olduser) {
                angular.extend(olduser, user);
            } else {
                this._cacheUserInfo.push(user);
            }
        }

        getUserInfo: (targetId: string,
            callback: CallBack<RongIMWidget.UserInfo>) => void

        getGroupInfo: (targetId: string,
            callback: CallBack<RongIMWidget.GroupInfo>) => void

        getOnlineStatus: (targetId: string[],
            callback: CallBack<{ id: string, status: boolean }[]>) => void

    }

    export class WidgetConfig {
        displayConversationList: boolean = false;
        conversationListPosition: number
        = RongIMWidget.EnumConversationListPosition.left;
        displayMinButton: boolean = true;
        desktopNotification: boolean = false;
        reminder: string = "最近联系人";
        voiceNotification: boolean = false;
        _config: Object;
        __isKefu: boolean = false;
    }


    angular.module("RongWebIMWidget")
        .service("ProviderData", ProviderData)
        .service("WidgetConfig", WidgetConfig);
}
