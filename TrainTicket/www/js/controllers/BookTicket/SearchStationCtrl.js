/**
 * Created by hcnucai on 2016/11/21.
 */
app.controller("SearchStationCtrl",function ($scope,$stateParams,station,$ionicHistory) {

  $scope.user = {};
  $scope.items = [{
    station:"北京"
  },
    {
      station:"上海"
    },
    {
      station:"南京"
    },
    {
      station:"杭州东"
    },
    {
      station:"宁波"
    },]
  $scope.endSearch = function (stationName) {
   //查询是开始还是结束
    var type = $stateParams.type;
    if(type == 0){
      station.start = stationName;
    }else{
      station.end = stationName;
    }
    $ionicHistory.goBack();
  }

  //取消的动作
  $scope.removeSearch = function () {

    $scope.user = {};
  }
})
