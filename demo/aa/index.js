var demo = angular.module("demo", ["RongWebIMWidget"]);

demo.controller("main", ["$scope", "WebIMWidget", "$http", function($scope, WebIMWidget, $http) {

    $scope.enumConversationType = [{name: "私聊",value:1},{name:"群组",value:3}]

    $scope.targetType = $scope.enumConversationType[0];

    WebIMWidget.init({
        appkey: "3argexb6r934e",
        token: "CIbKk/z1AOjB/ForzWFDWpUnU/cREmEFuMhOJuGv5bPlXUSQuAsZcSIX81T5zgZyU5xfoVDjRmdg2Mh5WIasRw==",
        style: {
            width: 600,
            positionFixed: true,
            bottom: 20,
        },
        displayConversationList: true,
        conversationListPosition: WebIMWidget.EnumConversationListPosition.right,
        onSuccess: function(id) {
            console.log('连接成功：' + id);
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
    };

    $scope.hidden = function() {
        WebIMWidget.hidden();
    };

    WebIMWidget.show();


    // 示例：获取 userinfo.json 中数据，根据 targetId 获取对应用户信息
    // WebIMWidget.setUserInfoProvider(function(targetId,obj){
    //     $http({
    //       url:"/userinfo.json"
    //     }).success(function(rep){
    //       var user;
    //       rep.userlist.forEach(function(item){
    //         if(item.id==targetId){
    //           user=item;
    //         }
    //       })
    //       if(user){
    //         obj.onSuccess({id:user.id,name:user.name,portraitUri:user.portraitUri});
    //       }else{
    //         obj.onSuccess({id:targetId,name:"用户："+targetId});
    //       }
    //     })
    // });

    // 示例：获取 online.json 中数据，根据传入用户 id 数组获取对应在线状态
    // WebIMWidget.setOnlineStatusProvider(function(arr, obj) {
    //     $http({
    //         url: "/online.json"
    //     }).success(function(rep) {
    //         obj.onSuccess(rep.data);
    //     })
    // });

}]);