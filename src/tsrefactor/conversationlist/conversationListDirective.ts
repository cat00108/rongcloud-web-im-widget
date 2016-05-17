module RongIMWidget.conversationlist {

    class rongConversationList {

        restrict: string = "E";
        templateUrl: string = "./src/ts/conversationlist/conversationList.tpl.html";
        controller: string = "conversationListController";

        static instance() {
            return new rongConversationList;
        }

        link(scope: any, ele: angular.IRootElementService) {
            if (window["jQuery"] && window["jQuery"].nicescroll) {
                $(ele).find(".rongcloud-content").niceScroll({
                    'cursorcolor': "#0099ff",
                    'cursoropacitymax': 1,
                    'touchbehavior': false,
                    'cursorwidth': "8px",
                    'cursorborder': "0",
                    'cursorborderradius': "5px"
                });
            }
        }
    }


    class conversationItem {
        static $inject: string[] = ["conversationServer",
            "conversationListServer",
            "RongIMSDKServer"];

        constructor(private conversationServer: RongIMWidget.conversation.IConversationService,
            private conversationListServer: RongIMWidget.conversationlist.IConversationListServer,
            private RongIMSDKServer: RongIMWidget.RongIMSDKServer) {

        }

        static instance(conversationServer: RongIMWidget.conversation.IConversationService,
            conversationListServer: RongIMWidget.conversationlist.IConversationListServer,
            RongIMSDKServer: RongIMWidget.RongIMSDKServer) {
            return new conversationItem(conversationServer, conversationListServer,
                RongIMSDKServer);
        }

    }
    conversationItem.instance.$inject = conversationItem.$inject;


    angular.module("RongWebIMWidget.conversationlist")
        .directive("rongConversationList", rongConversationList.instance);
}
