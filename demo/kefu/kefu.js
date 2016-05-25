var demo = angular.module("demo", ["RongWebIMWidget"]);

demo.controller("main", ["$scope","$http","WebIMWidget", function($scope,$http,WebIMWidget) {
  $scope.title="asdf";
  WebIMWidget.init({
        appkey:"3argexb6r934e",//selfe
        token:"I8zRoTYOdtHug+ox4s7HapUnU/cREmEFuMhOJuGv5bP+dl6CkOlF+WuQPPbm30kCrX6ygPNSBvlJzwuiv72NPw==",//selfe kefu
        kefuId:"",//selfe
        reminder:"在线咨询",
        __isKefu:true,
        style:{
          height:500,
          width:500,
          right:10
        },
        onSuccess:function(e){
          console.log(e);
        }
  })
  WebIMWidget.onShow=function(){
    WebIMWidget.setConversation(WebIMWidget.EnumConversationType.CUSTOMER_SERVICE, "KEFU145914839332836","客服")
  }

    $scope.show = function() {
      WebIMWidget.show();
    }

    $scope.hidden = function() {
      WebIMWidget.hidden();
    }
}]);
