/**
 * Created by hcnucai on 2016/11/22.
 */
app.controller("ConfirmOrderCtrl",function ($scope,trainTicket,$state) {
  $scope.img = {
    img1:"img/img1.png",
    img2:"img/img2.png",
    img3:"img/img3.png",
    img4:"img/img4.png",
    img5:"img/img5.png",
    img6:"img/img6.png",
    img7:"img/img7.png",
    img8:"img/img8.png",


  }



$scope.detail = trainTicket.detail;
  //添加联系人
  $scope.addPerson = function () {
    $state.go("tab.BookTicket-AddPerson");
  }
  //验证码
  $scope.selectImg1 = function () {
    $scope.img = {
      img1:"img/img1_checked.png",
      img2:"img/img2.png",
      img3:"img/img3.png",
      img4:"img/img4.png",
      img5:"img/img5.png",
      img6:"img/img6.png",
      img7:"img/img7.png",
      img8:"img/img8.png",


    }
  }
  //验证码
  $scope.selectImg2 = function () {
    $scope.img = {
      img1:"img/img1.png",
      img2:"img/img2_checked.png",
      img3:"img/img3.png",
      img4:"img/img4.png",
      img5:"img/img5.png",
      img6:"img/img6.png",
      img7:"img/img7.png",
      img8:"img/img8.png",


    }
  }
  //验证码
  $scope.selectImg3 = function () {
    $scope.img = {
      img1:"img/img1.png",
      img2:"img/img2.png",
      img3:"img/img3_checked.png",
      img4:"img/img4.png",
      img5:"img/img5.png",
      img6:"img/img6.png",
      img7:"img/img7.png",
      img8:"img/img8.png",


    }
  }
  //验证码
  $scope.selectImg4 = function () {
    $scope.img = {
      img1:"img/img1.png",
      img2:"img/img2.png",
      img3:"img/img3.png",
      img4:"img/img4_checked.png",
      img5:"img/img5.png",
      img6:"img/img6.png",
      img7:"img/img7.png",
      img8:"img/img8.png",


    }
  }
  //验证码
  $scope.selectImg5 = function () {
    $scope.img = {
      img1:"img/img1.png",
      img2:"img/img2.png",
      img3:"img/img3.png",
      img4:"img/img4.png",
      img5:"img/img5_checked.png",
      img6:"img/img6.png",
      img7:"img/img7.png",
      img8:"img/img8.png",


    }
  }
  //验证码
  $scope.selectImg6 = function () {
    $scope.img = {
      img1:"img/img1.png",
      img2:"img/img2.png",
      img3:"img/img3.png",
      img4:"img/img4.png",
      img5:"img/img5.png",
      img6:"img/img6_checked.png",
      img7:"img/img7.png",
      img8:"img/img8.png",


    }
  }
  //验证码
  $scope.selectImg7 = function () {
    $scope.img = {
      img1:"img/img1.png",
      img2:"img/img2.png",
      img3:"img/img3.png",
      img4:"img/img4.png",
      img5:"img/img5.png",
      img6:"img/img6.png",
      img7:"img/img7_checked.png",
      img8:"img/img8.png",


    }
  } //验证码
  $scope.selectImg8 = function () {
    $scope.img = {
      img1:"img/img1.png",
      img2:"img/img2.png",
      img3:"img/img3.png",
      img4:"img/img4.png",
      img5:"img/img5.png",
      img6:"img/img6.png",
      img7:"img/img7.png",
      img8:"img/img8_checked.png",


    }
  }


  //订单完成界面
  $scope.finish  = function () {
    $state.go("tab.BookTicket-SubmitOrder");
  }
})
