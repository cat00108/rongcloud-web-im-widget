module RongIMWidget {


    runApp.$inject = ["$http", "WebIMWidget", "widgetConfig"];

    function runApp($http: ng.IHttpService,
        WebIMWidget: RongIMWidget.WebIMWidget,
        WidgetConfig: RongIMWidget.WidgetConfig) {

        var protocol = location.protocol === "https:" ? "https:" : "http:";
        $script.get(protocol + "//cdn.ronghub.com/RongIMLib-2.1.0.min.js", function() {
            $script.get(protocol + "//cdn.ronghub.com/RongEmoji-2.0.15.min.js", function() {
                RongIMLib.RongIMEmoji && RongIMLib.RongIMEmoji.init();
            });
            $script.get(protocol + "//cdn.ronghub.com/RongIMVoice-2.0.15.min.js", function() {
                RongIMLib.RongIMVoice && RongIMLib.RongIMVoice.init();
            });
            if (WidgetConfig._config) {
                WebIMWidget.init(WidgetConfig._config);
            }
        });
        $script.get(protocol + "//cdn.bootcss.com/plupload/2.1.8/plupload.full.min.js", function() { });

    }

    angular.module("RongWebIMWidget").run(runApp)

    angular.module("RongWebIMWidget",
        [
            "RongWebIMWidget.conversation",
            "RongWebIMWidget.conversationList",
            "RongIMSDKModule",
            "Evaluate"
        ]);
}
