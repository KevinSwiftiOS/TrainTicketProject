/**
 * Created by hcnucai on 2016/11/19.
 */
app.controller("OrderCtrl",function ($scope,$state) {
  $scope.doneTab = "tab-item active";
  $scope.noDoneTab = "tab-item";
  //选择头部的按钮
  $scope.hasDone = function () {
    $scope.doneTab = "tab-item active";
    $scope.noDoneTab = "tab-item";
  }
  $scope.noDone = function () {
    $scope.noDoneTab = "tab-item active";
    $scope.doneTab = "tab-item";
  }
  //日期的使用
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var xinqi = date.getDay();
  var han = ["日","一","二","三","四","五","六"];
  $scope.date = year + "年" + (month + 1) + "月" + day + "日 星期" + han[xinqi];
  $scope.goToOrderList = function (title) {

   $state.go("tab.Order-Orderlist",{title:title});
  }
})
