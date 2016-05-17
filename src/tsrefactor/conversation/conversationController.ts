module RongIMWidget.conversation {

    class ConversationController {
        static $inject: string[] = ["$scope",
            "conversationServer",
            "WebIMWidget",
            "conversationListServer",
            "widgetConfig",
            "providerdata", ]

        constructor(private $scope: any,
            private conversationServer: RongIMWidget.conversation.IConversationService,
            private WebIMWidget: RongIMWidget.WebIMWidget,
            private conversationListServer: any,
            private widgetConfig: RongIMWidget.WidgetConfig,
            private providerdata: RongIMWidget.ProviderData) {
        }


    }


}
