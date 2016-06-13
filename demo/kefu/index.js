var demo = angular.module("demo", ["RongWebIMWidget"]);

demo.controller("main", ["$scope","$http","RongKefu", function($scope,$http,RongKefu) {
  $scope.title="asdf";
  RongKefu.init({
        // appkey:"3argexb6r934e",//selfe
        // token:"I8zRoTYOdtHug+ox4s7HapUnU/cREmEFuMhOJuGv5bP+dl6CkOlF+WuQPPbm30kCrX6ygPNSBvlJzwuiv72NPw==",//selfe kefu
        // kefuId:"KEFU145914839332836",//selfe

        appkey:"e0x9wycfx7flq",//selfe
        token:"+D+IpcolhuEHfLLCfAVpDKOd4p1PG0cvD2kpyDJu+i1gFt8YZEeLr6gLxTQKbMCAYAYKPvbHrR38rU1cJ+tZeA==",//selfe kefu
        kefuId:"KEFUxiaoqiaoZhubajie1",
        reminder:"在线咨询",
        position:RongKefu.KefuPostion.right,
        // displayMinButton:false,
        style:{
          // height:500,
          width:400
        },
        onSuccess:function(e){
          console.log(e);
        }
  })

    RongKefu.setProductInfo({title:"长",url:"http://www.baidu.com",imageUrl:"https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",content:"这个商品信息啊"})

    $scope.show = function() {
      RongKefu.show();
    }

    $scope.hidden = function() {
      RongKefu.hidden();
    }
}]);
