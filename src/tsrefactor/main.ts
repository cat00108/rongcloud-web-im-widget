namespace rongcloud.webwidget {


    runApp.$inject = ["$http", "WebIMWidget", "widgetConfig"];

    function runApp($http: ng.IHttpService) {

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
