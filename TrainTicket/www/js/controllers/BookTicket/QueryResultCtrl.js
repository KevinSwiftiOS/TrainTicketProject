/**
 * Created by hcnucai on 2016/11/21.
 */
app.controller("QueryResultCtrl",function ($scope,$stateParams,station,$state,trainTicket) {
$scope.date = ($stateParams.date);
  console.log($stateParams.time);
  console.log($stateParams.type);
  $scope.items = [{
    train:"G147",
    price:"$336",
    dur:"6时9分",
    startTime:"15:41",
    startStaion:station.start,
    seatType:$stateParams.type,
    endTime:"16:41",
    number:"241张",
    endStation:station.end,
    date:$scope.date,
  },
    {
      train:"G222",
      price:"$336",
      dur:"6时9分",
      startTime:"13:41",
      startStaion:station.start,
      seatType:$stateParams.type,
      endTime:"15:41",
      number:"2张",
      endStation:station.end,
      date:$scope.date,
    },
    {
      train:"G330",
      price:"$336",
      dur:"6时9分",
      startTime:"11:41",
      startStaion:station.start,
      seatType:$stateParams.type,
      endTime:"12:41",
      number:"24张",
      endStation:station.end,
      date:$scope.date,
    },
  ]
  //购买火车票 身份证必填
   $scope.buy = function ($index) {
     var ls = window.localStorage;
     var name = ls.getItem("name");
     var cardId = ls.getItem("cardId");
     //车票信息的注入
     trainTicket.detail = $scope.items[$index];
     //身份证信息和名字必填
     if(name == "" || cardId == "" ) {
       $state.go("tab.BookTicket-CompleteInfo");
     }else{
       $state.go("tab.BookTicket-ConfirmOrder");
     }
   }

})
