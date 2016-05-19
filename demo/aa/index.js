var demo = angular.module("demo", ["RongWebIMWidget"]);

demo.controller("main", ["$scope","WebIMWidget", "$http", function($scope,WebIMWidget,
  $http) {

  $scope.show = function() {
    WebIMWidget.show();
  }

  $scope.hidden = function() {
    WebIMWidget.hidden();
  }

  $scope.server = WebIMWidget;
  $scope.targetType=1;

  $scope.setconversation=function(){
    WebIMWidget.setConversation(Number($scope.targetType), $scope.targetId, "自定义:"+$scope.targetId);
  }

  angular.element(document).ready(function() {

    WebIMWidget.init({
      appkey: "3argexb6r934e",
      // token: "CIbKk/z1AOjB/ForzWFDWpUnU/cREmEFuMhOJuGv5bPlXUSQuAsZcSIX81T5zgZyU5xfoVDjRmdg2Mh5WIasRw==",
      token:"3Y2egzIYQ9g8M76BiwiTcoT92+VsUe7ien9j+5OQOOBXujb945nEL1nDAGUvIP/hzgPI+chetYG4lSO5xHmpaQ==",
      style:{
        width:600,
        positionFixed:true,
        bottom:20,
      },
      displayConversationList:true,
      voiceUrl:'../widget/images/sms-received.mp3',
      conversationListPosition:WebIMWidget.EnumConversationListPosition.right,
      onError:function(error){
        console.log("error:"+error);
      }
    });

    WebIMWidget.show();

    WebIMWidget.setUserInfoProvider(function(targetId,obj){
        $http({
          url:"/userinfo.json"
        }).success(function(rep){
          var user;
          rep.userlist.forEach(function(item){
            if(item.id==targetId){
              user=item;
            }
          })

          if(user){
            obj.onSuccess({id:user.id,name:user.name,portraitUri:user.portraitUri});
          }else{
            obj.onSuccess({id:targetId,name:"陌："+targetId});
          }
        })
    });

    WebIMWidget.setOnlineStatusProvider(function(arr,obj){
        $http({
          url:"/online.json"
        }).success(function(rep){
          obj.onSuccess(rep.data);
        })
    })

    WebIMWidget.onClose=function(){
      console.log("已关闭");
    }

    WebIMWidget.show();


    //设置会话
    //WebimWidget.setConversation("4", "cc", "呵呵");


  });

}]);
