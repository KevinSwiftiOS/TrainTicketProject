/**
 * Created by hcnucai on 2016/11/9.
 */
app.controller("TabsCtrl",function ($scope,$state,img,$timeout) {
  //定义颜色
  var selectStyle = {
    "border-left-color":"blue",
    "border-right-color":"blue",
    "border-left-width":"5px",
    "border-right-width":"5px",
  }
  var onselectStyle = {
    "border-left-width":"2px",
    "border-right-width":"2px",
  }

  $scope.firstStyle = selectStyle;
  $scope.secondStyle = onselectStyle;
  $scope.thirdStyle = onselectStyle;
  $scope.fourthStyle = onselectStyle;
  //增加个人头像和账号信息
  $scope.username = "曹凯强";
  //监听变化
  $scope.img = img;
  $scope.$watch('img',function (newVal,oldVal) {
    if(newVal !== oldVal){
      $scope.img = newVal;
    }
  },true);


  //选择不同的按钮
  $scope.selectFirst = function () {
    $scope.firstStyle = selectStyle;
    $scope.secondStyle = onselectStyle;
    $scope.thirdStyle = onselectStyle;
    $scope.fourthStyle = onselectStyle;
  }
  $scope.selectSecond = function () {
    $scope.firstStyle = onselectStyle;
    $scope.secondStyle = selectStyle;
    $scope.thirdStyle = onselectStyle;
    $scope.fourthStyle = onselectStyle;
  }
  $scope.selectThird = function () {
    $scope.firstStyle = onselectStyle;
    $scope.secondStyle = onselectStyle;
    $scope.thirdStyle = selectStyle;
    $scope.fourthStyle = onselectStyle;
  }
  $scope.selectFourth = function () {
    $scope.firstStyle = onselectStyle;
    $scope.secondStyle = onselectStyle;
    $scope.thirdStyle = onselectStyle;
    $scope.fourthStyle = selectStyle;
  }

})
