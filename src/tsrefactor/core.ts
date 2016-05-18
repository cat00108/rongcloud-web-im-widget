module RongWebIMWidget {

    // var eleConversationListWidth = 195,
    //     eleminbtnHeight = 50,
    //     eleminbtnWidth = 195,
    //     spacing = 3;

    export class WebIMWidget {

        // static $inject: string[] = ["$q",
        //     // "conversationServer",
        //     // "conversationListServer",
        //     // "ProviderData",
        //     // "WidgetConfig",
        //     "RongIMSDKServer"];

        display: boolean = false;

        // constructor(private $q:ng.IQService,
        //   private conversationServer:conversationServer) {
        //
        // }

        init(config: any) {

        }

        EnumConversationListPosition: any = RongWebIMWidget.EnumConversationListPosition
    }

    angular.module("RongWebIMWidget")
        .service("WebIMWidget", WebIMWidget);

}
