module RongWebIMWidget.conversation {

    class ConversationController {
        static $inject: string[] = ["$scope",
            "conversationServer",
            "WebIMWidget",
            "conversationListServer",
            "widgetConfig",
            "providerdata", ]

        constructor(private $scope: any,
            private conversationServer: RongWebIMWidget.conversation.IConversationService,
            private WebIMWidget: RongWebIMWidget.WebIMWidget,
            private conversationListServer: any,
            private widgetConfig: RongWebIMWidget.WidgetConfig,
            private providerdata: RongWebIMWidget.ProviderData) {
        }


    }


}
