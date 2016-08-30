var demo = angular.module("demo", ["RongWebIMWidget"]);

demo.controller("main", ["$scope","$http","RongCustomerService", function($scope,$http,RongCustomerService) {
  $scope.title="asdf";

  var groups={"code":200,
  "list":[{"group_id":"1","kefu_id":"KEFUxiaoqiaoPrestaShop1","group_name":"group1"},
  {"group_id":"2","kefu_id":"KEFUxiaoqiaoPrestaShop1","group_name":"group2"}]
  };
  var customerServiceGroup=[];
  for(var i=0,len=groups.list.length;i<len;i++){
    customerServiceGroup.push({
      id:groups.list[i].group_id,
      name:groups.list[i].group_name
    })
  }

  RongCustomerService.init({
        appkey:"3argexb6r934e",//selfe
        token:"I8zRoTYOdtHug+ox4s7HapUnU/cREmEFuMhOJuGv5bP+dl6CkOlF+WuQPPbm30kCrX6ygPNSBvlJzwuiv72NPw==",//selfe kefu
        customerServiceId:"KEFU145914839332836",//selfe

        // appkey:"e5t4ouvptkf6a",//kehu
        // token:"SIs+A1dNqAGzDekNSEhTDFkorAnYm9Nmdw8vnrfMyunoplOHJxCyEHlkzhq1P1A8aR8MDR1+5Us3yH7RcuzUOA15G+GXlZ2T7QWk/DpW1zu94mpXoD3AMQ==",
        // kefuId:"KEFU146787560842415",

        // appkey:"e0x9wycfx7flq",//xiaoqiao
        // token:"3+oyaLdUoAQhGjI0NzA6gO9cj/O9TE0XZXnIWiJyFcQqE4cUBSEOqCIBHjDNnDgInXrI6LqQOeqiHcVqQzKdLuqi4w2E+KrN",
        // customerServiceId:"KEFUxiaoqiaoPrestaShop1",
        // customerServiceId:'KEFUxiaoqiaoZhubajie1',
        // customerServiceGroup:[{id:"1",name:"group1"},{id:"2",name:"group2"}],
        reminder:"在线咨询",
        // displayMinButton:false,
        position:RongCustomerService.Position.right,
        style:{
          // height:500,
          width:320
        },
        onSuccess:function(e){
          console.log(e);
        },
        onError:function(e){
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


  RongCustomerService.setProductInfo({title:"呵呵哈哈",imageUrl:"https://www.baidu.com/img/bd_logo1.png",extra:{history:visitHistory}})


    $scope.show = function() {
      RongCustomerService.show();
    }

    $scope.hidden = function() {
      RongCustomerService.hidden();
    }
}]);
