module RongWebIMWidget {

    enum Position {
        left = 1, right = 2
    }

    export class RongCustomerService {

        static $inject: string[] = ["WebIMWidget", "SelfCustomerService"];

        defaultconfig: any = {
            __isCustomerService: true
        }

        Position: any = Position

        constructor(private WebIMWidget: RongWebIMWidget.WebIMWidget,
            private SelfCustomerService: RongWebIMWidget.SelfCustomerService) {

        }

        init(config) {
            var that = this;
            angular.extend(this.defaultconfig, config)
            var style = <any>{
                right: 20
            }
            if (config.position) {
                if (config.position == Position.left) {
                    style = {
                        left: 20,
                        bottom: 0,
                        width: 325,
                        positionFixed: true
                    };
                } else {
                    style = {
                        right: 20,
                        bottom: 0,
                        width: 325,
                        positionFixed: true
                    };
                }
            }
            if (config.style) {
                config.style.width && (style.width = config.style.width);
                config.style.height && (style.height = config.style.height);
            }
            this.defaultconfig.style = style;

            that.WebIMWidget.init(this.defaultconfig);

            if (this.defaultconfig.customerServiceGroup && angular.isArray(this.defaultconfig.customerServiceGroup)) {
                var arr = this.defaultconfig.customerServiceGroup;
                var i = 0, len = arr.length;
                this.SelfCustomerService.group = [];
                for (; i < len; i++) {
                    if (arr[i].id && arr[i].name) {
                        this.SelfCustomerService.group.push({ id: arr[i].id, name: arr[i].name, customerServiceId: config.customerServiceId })
                    }
                }
            }

            that.WebIMWidget.onShow = function() {
                that.WebIMWidget.setConversation(RongWebIMWidget.EnumConversationType.CUSTOMER_SERVICE, config.customerServiceId, "客服");
            }
        }

        show() {
            this.WebIMWidget.show();
        }
        setProductInfo(obj: any) {
            this.WebIMWidget.setProductInfo(obj);
        }

        hidden() {
            this.WebIMWidget.hidden();
        }
    }

    export class SelfCustomerService {
        group: { id: string, name: string, customerServiceId: string }[]
    }

    angular.module("RongWebIMWidget")
        .service("RongCustomerService", RongCustomerService);

    angular.module("RongWebIMWidget").service("SelfCustomerService", SelfCustomerService)

}
