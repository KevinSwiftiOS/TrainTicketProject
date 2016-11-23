/**
 * Created by hcnucai on 2016/11/23.
 */
app.controller("SubmitOrderCtrl",function ($scope,trainTicket,$timeout) {
  $scope.detail = trainTicket.detail;
  var ls = window.localStorage;
  console.log(ls.getItem("name"));
  console.log(ls.getItem("cardId"));
  $scope.person = {
    name:ls.getItem("name"),
    cardId:ls.getItem("cardId")
  }
  $scope.h = 30;
  $scope.m = 60;
  //设置定时器
  var updateClock = function () {
    if( $scope.m > 0) {
      $scope.m--;

      $timeout(function () {
        updateClock();
      }, 1000);
    }else{
      $scope.m = 60;
      $scope.h--;
      updateClock();
    }
  };
  updateClock();
})
