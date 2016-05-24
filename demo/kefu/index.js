var demo = angular.module("demo", ["RongCloudkefu"]);

demo.controller("main", ["$scope","$http","RongKefu", function($scope,$http,RongKefu) {
  $scope.title="asdf";
  RongKefu.init({
        appkey:"3argexb6r934e",//selfe
        token:"I8zRoTYOdtHug+ox4s7HapUnU/cREmEFuMhOJuGv5bP+dl6CkOlF+WuQPPbm30kCrX6ygPNSBvlJzwuiv72NPw==",//selfe kefu
        kefuId:"KEFU145914839332836",//selfe

        // appkey:"e0x9wycfx7flq",
        // token:"napqkvtU6A8HfLLCfAVpDKOd4p1PG0cvD2kpyDJu+i2gjCorUT/e51XiWWKqQOLQQaxpT108WXpQcoM+dxIjvw==",
        // kefuId:"KEFUxiaoqiaoZhubajie1",

        // appkey:"8brlm7ufrnfa3",
        // token:"qmi2DP0GTLOTdnwXc9ASAkJGE6CUea+VYHqv2I8LN/80VvDnGE9m0gFhVwV4pwWlcKaZvPUUF0VPIlOk5iRxrw51WQTHnwL1lHRP4bxQ3dE=",
        // kefuId:"KEFU145932387671898",
        reminder:"在线咨询",
        position:RongKefu.KefuPostion.right,
        displayMinButton:false,
        style:{
          height:500,
          width:500
        },
        onSuccess:function(e){
          console.log(e);
        }
  })
  // $http({
  //     method:"get",
  //     url:"http://gwkf.rongcloud.cn"
  //   }).then(function(data){
  //     RongKefu.init({
  //           appkey:"n19jmcy59f1q9",
  //           token:data.data,
  //           kefuId:"KEFU146001495753714",
  //           reminder:"在线咨询",
  //           position:RongKefu.KefuPostion.right,
  //           onSuccess:function(e){
  //             console.log(e);
  //           }
  //     })
  //   })
    $scope.show = function() {
      RongKefu.show();
    }

    $scope.hidden = function() {
      RongKefu.hidden();
    }
}]);
