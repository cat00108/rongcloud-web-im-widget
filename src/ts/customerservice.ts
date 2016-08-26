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
            this.SelfCustomerService.setProductInfo(obj);
        }

        hidden() {
            this.WebIMWidget.hidden();
        }
    }

    export class SelfCustomerService {

        static $inject = ["ConversationServer"]
        constructor(private conversationServer: RongWebIMWidget.conversation.IConversationService) {

        }

        group: { id: string, name: string, customerServiceId: string }[]
        currentGroupId: string
        _productInfo: any

        sendMessageHandle(msg: any) {
            if (this.group) {
                if (RongWebIMWidget.Helper.isObject(msg.extra)) {
                    msg.extra.groupid = this.currentGroupId || '0';
                }
                else {
                    msg.extra = { "groupid": this.currentGroupId || '0' };
                }
            }
        }

        selfCustomerServiceShowGroup(isHistory?: boolean) {
            var that = this;
            if (!this.group || this.currentGroupId !== "") {
                return;
            }
            var msg = new RongIMLib.RongIMClient.RegisterMessage['CustomerServiceGroupMessage']({ title: "请选择咨询客服组", groups: that.group })
            msg = that.conversationServer.packReceiveMessage(msg);
            var wmsg = RongWebIMWidget.Message.convert(msg);
            that.conversationServer.addCustomServiceInfo(wmsg);
            if (isHistory) {
                that.conversationServer.unshiftHistoryMessages(that.conversationServer.current.targetId, that.conversationServer.current.targetType, wmsg);
            } else {
                that.conversationServer._addHistoryMessages(wmsg);
            }
        }

        setProductInfo(productInfo: any) {
            if (this.conversationServer._customService.connected) {
                this.sendProductInfo();
            }
            else {
                this._productInfo = productInfo;
            }
        }

        sendProductInfo() {
            var targetid = this.conversationServer.current ? this.conversationServer.current.targetId : "";
            if (this._productInfo && targetid) {
                var msg = new RongIMLib.RongIMClient.RegisterMessage["ProductMessage"](this._productInfo);
                this.sendMessageHandle(msg);
                RongIMLib.RongIMClient.getInstance().sendMessage(RongIMLib.ConversationType.CUSTOMER_SERVICE, targetid, msg, {
                    onSuccess: function() {
                    },
                    onError: function() {
                    }
                });
            }
        }


        registerMessage() {
            var messageName = "ProductMessage"; // 自定义客服产品信息显示
            var objectName = "cs:product";
            var mesasgeTag = new RongIMLib.MessageTag(true, true);
            var propertys = ["title", "url", "content", "imageUrl", "extra"];
            RongIMLib.RongIMClient.registerMessageType(messageName, objectName, mesasgeTag, propertys);

            var messageName = "CustomerServiceGroupMessage"; // 自定义客服中分组信息显示
            var objectName = "cs:groupinfo";
            var mesasgeTag = new RongIMLib.MessageTag(true, true);
            var propertys = ["title", "groups", "extra"];
            RongIMLib.RongIMClient.registerMessageType(messageName, objectName, mesasgeTag, propertys);
        }

    }

    angular.module("RongWebIMWidget")
        .service("RongCustomerService", RongCustomerService);

    angular.module("RongWebIMWidget").service("SelfCustomerService", SelfCustomerService)

}
