/// <reference path="../../typings/tsd.d.ts"/>
module RongWebIMWidget {

    interface CallBack<T> {
        onSuccess(data: T): void
    }

    export class ProviderData {

        private _cacheUserInfo: RongWebIMWidget.UserInfo[] = [];

        totalUnreadCount: number = 0;
        connectionState: number = 0;
        voiceSound: boolean = false;
        currentUserInfo: RongWebIMWidget.UserInfo

        _getCacheUserInfo(id) {
            for (var i = 0, len = this._cacheUserInfo.length; i < len; i++) {
                if (this._cacheUserInfo[i].userId == id) {
                    return this._cacheUserInfo[i];
                }
            }
            return null;
        }

        _addUserInfo(user: RongWebIMWidget.UserInfo) {
            var olduser = this._getCacheUserInfo(user.userId);
            if (olduser) {
                angular.extend(olduser, user);
            } else {
                this._cacheUserInfo.push(user);
            }
        }

        getUserInfo: (targetId: string,
                callback: CallBack<RongWebIMWidget.UserInfo>) => void

        getGroupInfo: (targetId: string,
                callback: CallBack<RongWebIMWidget.GroupInfo>) => void

        getOnlineStatus: (targetId: string[],
                callback: CallBack<{ id: string, status: boolean }[]>) => void

    }

    export class WidgetConfig {
        displayConversationList: boolean = false;
        conversationListPosition: number
        = RongWebIMWidget.EnumConversationListPosition.left;
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
