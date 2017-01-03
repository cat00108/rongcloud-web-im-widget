var demo = angular.module("demo", ["RongWebIMWidget"]);

demo.controller("main", ["$scope", "WebIMWidget", function($scope, WebIMWidget) {

    $scope.enumConversationType = [{name: "私聊",value:1},{name:"群组",value:3}]

    $scope.targetType = $scope.enumConversationType[0];

    WebIMWidget.init({
        appkey: "3argexb6r934e",
        token: "AgbuB0f1xAujcvfW3YBazIT92+VsUe7ien9j+5OQOOCbT8ZLrGfdaG6Qj1UafWSqx3U4gSBapJG4lSO5xHmpaQ==",
        style: {
            width: 600,
            left: 100,
            top: 100
        },
        displayConversationList: true,
        displayMinButton: true,
        desktopNotification: true,
        voiceUrl: '../widget/images/sms-received.mp3',
        conversationListPosition: WebIMWidget.EnumConversationListPosition.right,
        onSuccess: function(id) {
            console.log('连接成功：' + id);
        },
        onError: function(error) {
            console.log("连接失败：" + error);
        }
    });

    WebIMWidget.setUserInfoProvider(function(targetId, obj) {
        obj.onSuccess({
            name: "用户：" + targetId
        });
    });

    $scope.setconversation = function() {
        WebIMWidget.setConversation(Number($scope.targetType.value), $scope.targetId, "用户:" + $scope.targetId);
    };

    $scope.show = function() {
        WebIMWidget.show();
    };

    $scope.hidden = function() {
        WebIMWidget.hidden();
    };


}]);