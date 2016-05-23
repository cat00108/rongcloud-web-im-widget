module RongWebIMWidget.conversationlist {
    class conversationListController {
        static $inject: string[] = [
            "$scope",
            "ConversationListServer",
            "WebIMWidget",
            "WidgetConfig",
            "ProviderData"
        ]

        constructor(
            private $scope: any,
            private conversationListServer: RongWebIMWidget.conversationlist.IConversationListServer,
            private WebIMWidget: RongWebIMWidget.WebIMWidget,
            private widgetConfig: RongWebIMWidget.WidgetConfig,
            private providerdata: RongWebIMWidget.ProviderData
        ) {
            $scope.minbtn = function() {
                WebIMWidget.display = false;
            }
            $scope.conversationListServer = conversationListServer;
        }
    }

    angular.module("RongWebIMWidget.conversationlist")
        .controller("conversationListController", conversationListController)
}
