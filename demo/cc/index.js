var demo = angular.module("demo", ["RongWebIMWidget"]);

demo.controller("main", ["$scope", "WebIMWidget", function($scope,
    WebIMWidget) {

    $scope.enumConversationType = [{name: "私聊",value:1},{name:"群组",value:3}]

    $scope.targetType = $scope.enumConversationType[0];

    WebIMWidget.init({
        appkey: "3argexb6r934e",
        token: "tt8zu08SKMJxrv4Y0ymvoJUnU/cREmEFuMhOJuGv5bPlXUSQuAsZcVjEEwGrOODdblCL+ZfLmCJg2Mh5WIasRw==",
        voiceUrl: '../widget/images/sms-received.mp3',
        style: {
            right: 10
        },
        onSuccess: function(id) {
            console.log('连接成功：' + id);
            WebIMWidget.setConversation(1, "aa", "用户：cc");
        },
        onError: function(error) {
            console.log('连接失败：' + error);
        }
    });

    WebIMWidget.setUserInfoProvider(function(targetId, obj) {
        obj.onSuccess({
            name: "用户：" + targetId
        });
    });

    $scope.setconversation = function() {
        WebIMWidget.setConversation(Number($scope.targetType.value), $scope.targetId, "用户：" + $scope.targetId);
    }

    $scope.show = function() {
        WebIMWidget.show();
    }

    $scope.hidden = function() {
        WebIMWidget.hidden();
    }


}]);