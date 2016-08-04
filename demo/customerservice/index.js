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
        // appkey:"3argexb6r934e",//selfe
        // token:"I8zRoTYOdtHug+ox4s7HapUnU/cREmEFuMhOJuGv5bP+dl6CkOlF+WuQPPbm30kCrX6ygPNSBvlJzwuiv72NPw==",//selfe kefu
        // customerServiceId:"KEFU145914839332836",//selfe

        // appkey:"e5t4ouvptkf6a",//kehu
        // token:"SIs+A1dNqAGzDekNSEhTDFkorAnYm9Nmdw8vnrfMyunoplOHJxCyEHlkzhq1P1A8aR8MDR1+5Us3yH7RcuzUOA15G+GXlZ2T7QWk/DpW1zu94mpXoD3AMQ==",
        // kefuId:"KEFU146787560842415",

        appkey:"e0x9wycfx7flq",//xiaoqiao
        // token:"4FGXZfT05dvLJYDfnLTu8hnk1aK4cFsKdlugrlEUcJ1Up9M1NxrkDRCYrs3oWBKkSg8cGCMaW6mKOtbWRl67FOEToZ3N32hf",
        token:"6x9aV25Hf7cc0/Hb4s6B9k9URnmOqIZtiIUxmNB69UCl33e7kSvE5JqwDG/XC7Ib4sQvYieZvgoqJu4AS2kCov9806s1JpIX",
        customerServiceId:"KEFUxiaoqiaoPrestaShop1",
        customerServiceGroup:[{id:"1",name:"group1"},{id:"2",name:"group2"}],
        reminder:"在线咨询",
        // displayMinButton:false,
        position:RongCustomerService.Position.right,
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


  // RongCustomerService.setProductInfo({title:"这是啦啦啦",imageUrl:"https://www.baidu.com/img/bd_logo1.png",extra:visitHistory})


    $scope.show = function() {
      RongCustomerService.show();
    }

    $scope.hidden = function() {
      RongCustomerService.hidden();
    }
}]);
