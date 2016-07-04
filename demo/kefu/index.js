var demo = angular.module("demo", ["RongWebIMWidget"]);

demo.controller("main", ["$scope","$http","RongKefu", function($scope,$http,RongKefu) {
  $scope.title="asdf";
  RongKefu.init({
        appkey:"3argexb6r934e",//selfe
        token:"I8zRoTYOdtHug+ox4s7HapUnU/cREmEFuMhOJuGv5bP+dl6CkOlF+WuQPPbm30kCrX6ygPNSBvlJzwuiv72NPw==",//selfe kefu
        kefuId:"KEFU145914839332836",//selfe

        reminder:"在线咨询",

        position:RongKefu.KefuPostion.right,
        style:{
          // height:500,
          width:320
        },
        onSuccess:function(e){
          console.log(e);
        }
  })

  var visitHistory = cookie.get("visitHistory");
  if (visitHistory) {
    visitHistory = JSON.parse(visitHistory);
    visitHistory.unshift({time:(new Date()).toLocaleString(),url:window.location.href})
  }else{
    var current=window.location.href;
    visitHistory=[{time:(new Date()).toLocaleString(),url:window.location.href}];
  }
  if (visitHistory.length>20) {
    visitHistory.pop();
  }
  cookie.set("visitHistory",JSON.stringify(visitHistory))


  RongKefu.setProductInfo({title:"这是啦啦啦",imageUrl:"https://www.baidu.com/img/bd_logo1.png",extra:visitHistory})


    $scope.show = function() {
      RongKefu.show();
    }

    $scope.hidden = function() {
      RongKefu.hidden();
    }
}]);
