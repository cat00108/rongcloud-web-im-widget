/// <reference path="../../typings/tsd.d.ts"/>
module RongWebIMWidget {

    interface CallBack<T> {
        onSuccess(data: T): void
    }

    export class ProviderData {

        private _cacheUserInfo: RongWebIMWidget.UserInfo[] = [];
        private _cacheGroupInfo: RongWebIMWidget.GroupInfo[] = [];

        totalUnreadCount: number = 0;
        connectionState: boolean = false;
        voiceSound: boolean = false;
        currentUserInfo: RongWebIMWidget.UserInfo = <any>{}
        // _productInfo: any;

        _getCacheUserInfo(id: string) {
            for (var i = 0, len = this._cacheUserInfo.length; i < len; i++) {
                if (this._cacheUserInfo[i].userId == id) {
                    return this._cacheUserInfo[i];
                }
            }
            return null;
        }

        _addUserInfo(user: RongWebIMWidget.UserInfo) {
            if (!user.userId || !angular.isString(user.userId)) {
                console.warn("setUserInfoProvider 返回用户信息无 userId 无法缓存");
                return;
            }
            var olduser = this._getCacheUserInfo(user.userId);
            if (olduser) {
                angular.extend(olduser, user);
            } else {
                this._cacheUserInfo.push(user);
            }
        }

        _getCacheGroupInfo(id: string) {
            for (var i = 0, len = this._cacheGroupInfo.length; i < len; i++) {
                if (this._cacheGroupInfo[i].id == id) {
                    return this._cacheGroupInfo[i];
                }
            }
            return null;
        }

        _addGroupInfo(group: RongWebIMWidget.GroupInfo) {
            if (!group.id || !angular.isString(group.id)) {
                console.warn("setGroupInfoProvider 返回组信息无 id 无法缓存");
                return;
            }
            var oldgroup = this._getCacheGroupInfo(group.id);
            if (oldgroup) {
                angular.extend(oldgroup, group);
            } else {
                this._cacheGroupInfo.push(group);
            }
        }

        getUserInfo: (targetId: string) => ng.IPromise<RongWebIMWidget.UserInfo>

        getGroupInfo: (targetId: string) => ng.IPromise<RongWebIMWidget.UserInfo>

        // getGroupInfo: (targetId: string,
        //     callback: CallBack<RongWebIMWidget.GroupInfo>) => void

        getOnlineStatus: (targetId: string[],
            callback: CallBack<{ id: string, status: boolean }[]>) => void

    }

    class ElementStyle {
        positionFixed: boolean
        width: number;
        height: number;
        top: number;
        bottom: number;
        left: number;
        right: number;
    }

    export class WidgetConfig {
        displayConversationList: boolean = false;
        conversationListLength: number = 30;
        conversationListPosition: number
        = RongWebIMWidget.EnumConversationListPosition.left;
        displayMinButton: boolean = true;
        desktopNotification: boolean = false;
        reminder: string = "";
        voiceNotification: boolean = false;
        style: ElementStyle = <ElementStyle>{
            positionFixed: false,
            width: 450,
            height: 470,
            bottom: 0,
            right: 0
        };

        refershOnlineStateIntercycle: number = 1000 * 20;
        hiddenConversations: { type: number, id: string }[] = []
        voiceUrl: string;
        appkey: string;
        token: string;
        onSuccess: Function;
        onError: Function;

        _config: any;
        __isKefu: boolean = false;
    }


    angular.module("RongWebIMWidget")
        .service("ProviderData", ProviderData)
        .service("WidgetConfig", WidgetConfig);
}
