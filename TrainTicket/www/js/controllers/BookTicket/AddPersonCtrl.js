/**
 * Created by hcnucai on 2016/11/22.
 */
app.controller("AddPersonCtrl",function ($scope,$ionicHistory) {
  $scope.user = {};
$scope.items  = [{
  name:"曹凯强",
  cardId:"330********3710",
  type:"学生",
},
  {
    name:"卓樱桃",
    cardId:"330********0401",
    type:"智障",
  }]
  $scope.finishAddPerson = function () {
    swal({
        title: "恭喜您",
        text: "保存成功",
        type: "success",
        height: 10000,
        width: 100,
      },
      function () {
        $ionicHistory.goBack();
      });

  }
})
