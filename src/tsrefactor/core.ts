/// <reference path="../../typings/tsd.d.ts"/>
module RongIMWidget {

    var eleConversationListWidth = 195,
        eleminbtnHeight = 50,
        eleminbtnWidth = 195,
        spacing = 3;

    export class WebIMWidget {

        static $inject: string[] = ["$q",
            "conversationServer",
            "conversationListServer",
            "providerdata",
            "widgetConfig",
            "RongIMSDKServer"];

        display: boolean = false;

        // constructor(private $q:ng.IQService,
        //   private conversationServer:conversationServer) {
        //
        // }


        init(config: any) {

        }
    }

}
