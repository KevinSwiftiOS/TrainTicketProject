/**
 * Created by hcnucai on 2016/11/22.
 */
app.controller("ConfirmOrderCtrl",function ($scope,trainTicket,$state) {
$scope.detail = trainTicket.detail;
  //添加联系人
  $scope.addPerson = function () {
    $state.go("tab.BookTicket-AddPerson");
  }
  //验证码
  $scope.selectImg1 = function () {
    alert(2323);
  }
  //订单完成界面
  $scope.finish  = function () {

  }
})
