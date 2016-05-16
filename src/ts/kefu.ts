/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../../vendor/loadscript/script.d.ts"/>

var kefu = angular.module("RongCloudkefu", ["RongWebIMWidget"]);

kefu.service("RongKefu", ["WebIMWidget", function(WebIMWidget: WebIMWidget) {
    var kefuServer = <KefuServer>{};
    var defaultconfig = <any>{
      __isKefu:true
    };

    kefuServer.init = function(config) {
        angular.extend(defaultconfig, config)
        kefuServer._config = config;
        var style = <any>{
            right: 20
        }
        if (config.position) {
            if (config.position == KefuPostion.left) {
                style = {
                    left: 20,
                    width: 325,
                    positionFixed: true
                };
            } else {
                style = {
                    right: 20,
                    width: 325,
                    positionFixed: true
                };
            }
        }
        style.width = defaultconfig.style.width;
        style.height = defaultconfig.style.height;
        defaultconfig.style = style;
        
        WebIMWidget.init(defaultconfig);
        WebIMWidget.onShow = function() {
            WebIMWidget.setConversation(WidgetModule.EnumConversationType.CUSTOMER_SERVICE, config.kefuId, "客服");
        }

    }

    kefuServer.show = function() {
        WebIMWidget.show();
    }

    kefuServer.hidden = function() {
        WebIMWidget.hidden();
    }

    kefuServer.KefuPostion = KefuPostion;

    return kefuServer;
}]);

interface KefuServer {
    init(config: KefuConfig): void
    show(): void
    hidden(): void
    KefuPostion: any
    _config: any
}

interface KefuConfig {
    appkey: string
    token: string
    kefuId: string
    reminder: string
    position: KefuPostion
    onSuccess(par?: any): void
}
enum KefuPostion {
    left = 1, right = 2
}
