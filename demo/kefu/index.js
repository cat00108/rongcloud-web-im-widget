var demo = angular.module("demo", ["RongWebIMWidget"]);

demo.controller("main", ["$scope","$http","RongKefu", function($scope,$http,RongKefu) {
  $scope.title="asdf";
  RongKefu.init({
        appkey:"3argexb6r934e",//selfe
        token:"I8zRoTYOdtHug+ox4s7HapUnU/cREmEFuMhOJuGv5bP+dl6CkOlF+WuQPPbm30kCrX6ygPNSBvlJzwuiv72NPw==",//selfe kefu
        kefuId:"KEFU145914839332836",//selfe

        position:RongKefu.KefuPostion.right,
        style:{
          // height:500,
          width:320
        },
        onSuccess:function(e){
          console.log(e);
        }
  })


    $scope.show = function() {
      RongKefu.show();
    }

    $scope.hidden = function() {
      RongKefu.hidden();
    }
}]);
