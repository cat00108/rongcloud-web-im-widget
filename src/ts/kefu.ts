module RongWebIMWidget.kefu {
    var kefu = angular.module("RongCloudkefu", ["RongWebIMWidget"]);

    class RongKefu {

        static $inject: string[] = ["WebIMWidget"];

        defaultconfig: any = {
            __isKefu: true
        }

        constructor(private WebIMWidget: RongWebIMWidget.WebIMWidget) {

        }

        init(config) {
            var _this = this;
            angular.extend(this.defaultconfig, config)
            var style = <any>{
                right: 20
            }
            if (config.position) {
                if (config.position == KefuPostion.left) {
                    style = {
                        left: 20,
                        bottom:0,
                        width: 325,
                        positionFixed: true
                    };
                } else {
                    style = {
                        right: 20,
                        bottom:0,
                        width: 325,
                        positionFixed: true
                    };
                }
            }
            style.width = this.defaultconfig.style.width;
            style.height = this.defaultconfig.style.height;
            this.defaultconfig.style = style;

            _this.WebIMWidget.init(this.defaultconfig);
            _this.WebIMWidget.onShow = function() {
                _this.WebIMWidget.setConversation(RongWebIMWidget.EnumConversationType.CUSTOMER_SERVICE, config.kefuId, "客服");
            }
        }

        show() {
            this.WebIMWidget.show();
        }

        hidden() {
            this.WebIMWidget.hidden();
        }


        KefuPostion: any = KefuPostion
    }

    kefu.service("RongKefu", RongKefu);

    enum KefuPostion {
        left = 1, right = 2
    }
}
