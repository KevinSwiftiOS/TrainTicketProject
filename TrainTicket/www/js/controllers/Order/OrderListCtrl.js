/**
 * Created by hcnucai on 2016/11/20.
 */
app.controller("OrderListCtrl",function ($scope,$stateParams,$state) {
  console.log($stateParams.title);
  $scope.goToDetail = function () {
    $state.go("tab.Order-OrderDetail");
  }
})
