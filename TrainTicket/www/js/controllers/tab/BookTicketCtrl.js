/**
 * Created by hcnucai on 2016/11/19.
 */
app.controller("BookTicketCtrl",function ($scope,$ionicActionSheet,$state,station) {

  $scope.user = {
//初始化时间和席别
  time :"12:00--18:00",
  type: "不限",
   date:new Date(2016,10,11)
}
  $scope.changed = function () {
    console.log($scope.user.isStu);
  }
  //选择出发时间
  $scope.selectTime = function () {
    $ionicActionSheet.show({
      buttons: [
        {text: "00:00--24:00"},
        {text: "00:00--06:00"},
        {text: "06:00--12:00"},
        {text: "12:00--18:00"},
        {text: "18:00--24:00"},
      ],
      cancelText: '取消',
      buttonClicked: function (index) {
        //到修改密码的界面
        switch (index) {
          case 0:
            $scope.user.time =  "00:00--24:00";
            break;
          case 1:
            $scope.user.time =  "00:00--06:00";
            break;
          case 2:
            $scope.user.time =  "06:00--12:00";;
            break;
          case 3:
            $scope.user.time =  "12:00--18:00";
            break;
          case 4:
            $scope.user.time = "18:00--24:00";
          default:
            break;

        }
        return true;
      }
    });
  }
  //选择席别
  var type = ["不限","商务座","特等座","一等座","二等座"];
  $scope.selectType = function () {
    $ionicActionSheet.show({
      buttons: [
        {text: "不限"},
        {text: "商务座"},
        {text: "特等座"},
        {text: "一等座"},
        {text: "二等座"},
      ],
      cancelText: '取消',
      buttonClicked: function (index) {
        //到修改密码的界面

          $scope.user.type = type[index];

        return true;
      }
    });
  }
  //初始化颜色
  //选择车的种类
  $scope.all = function () {
    $scope.all.color = "blue";
    $scope.GDC.color = "black";
    $scope.Z.color = "black";
    $scope.T.color = "black";
    $scope.K.color = "black";

  }
  $scope.GDC = function () {
    $scope.all.color = "black";
    $scope.GDC.color = "blue";
  }
  $scope.Z = function () {
    $scope.all.color = "black";
    $scope.Z.color = "blue";
  }
  $scope.T = function () {
    $scope.all.color = "black";
    $scope.T.color = "blue";
  }
  $scope.K = function () {
    $scope.all.color = "black";
    $scope.K.color = "blue";
  }
  //开始站点和结束站点
  $scope.station = station;
  $scope.$watch('station',function (newVal,oldVal) {
    if(newVal !== oldVal){
      $scope.station = newVal;
    }
  },true);
  //选择开始和结束的车站
  $scope.selectStart = function () {
    $state.go("tab.BookTicket-Search",({type:0}));
  }
  $scope.selectEnd = function () {
    $state.go("tab.BookTicket-Search",({type:1}));
  }
  $scope.query = function () {
       var user = $scope.user;
    //获取日期
    var date = user.date.getFullYear() + "-" + (user.date.getMonth() + 1) + "-" + (user.date.getDate());
    var param = {
      date:date,
      time:user.time,
      type:user.type
    }
    $state.go("tab.BookTicket-Result",(param));
  }
});
