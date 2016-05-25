var demo = angular.module("demo", ["RongWebIMWidget"]);

demo.controller("main", ["$scope", "WebIMWidget", function($scope,
  WebIMWidget) {

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
      // token: "tt8zu08SKMJxrv4Y0ymvoJUnU/cREmEFuMhOJuGv5bPlXUSQuAsZcVjEEwGrOODdblCL+ZfLmCJg2Mh5WIasRw==",
      token:"97OXpNS6Qh3097Db8bhFb5UnU/cREmEFuMhOJuGv5bPlXUSQuAsZcQYznanerk1j0KCcGO+n3Y+2SPAaFF5a9A==",
      voiceUrl:'../widget/images/sms-received.mp3',
      // desktopNotification:true,
      style:{
          right:10
      },
      onSuccess:function(id){
          console.log(id);
          WebIMWidget.setConversation(1, "cc", "呵呵");
      },
      onError:function(error){
        console.log("error:"+error);
      }
    });

    WebIMWidget.setUserInfoProvider(function(targetId,obj){
        obj.onSuccess({name:"陌："+targetId});
    });

    // WebIMWidget.onCloseBefore=function(obj){
    //   console.log("关闭前");
    //   setTimeout(function(){
    //     obj.close();
    //   },1000)
    // }

    WebIMWidget.onClose=function(){
      console.log("已关闭");
    }



  });

}]);
