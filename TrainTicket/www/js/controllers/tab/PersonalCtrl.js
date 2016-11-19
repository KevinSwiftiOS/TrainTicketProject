/**
 * Created by hcnucai on 2016/10/25.
 */
app.controller('PersonalCtrl', function($scope,$rootScope,$state,$ionicHistory,$ionicActionSheet,$cordovaCamera){
  $scope.avatar = "http://dodo.hznu.edu.cn/Upload/editor/776de979-dead-4a60-83ca-a6aa00be839a.jpg";

  $scope.stu = {
    username:"2015001001",

    name:"曹凯强",
    compus:"仓前校区",
    xy:"软工142",
    sex:"男",
    birth:new Date(1995,9,3),
    email:"154985049804@qq.com",
    tel:"2015001001",
    address:"2015001001",
    postcode:"315502",
    showSwal:false,
  };
  //监听页面进入的时候 tab消失
  $scope.$on("$ionicView.beforeEnter",function () {
    $rootScope.hideTabs = true;
  });
  //进行保存的操作
  $scope.save = function () {

    //可以拿到值并且保存成功个人信息
    swal({
        title: "恭喜您",
        text: "保存成功",
        type: "success",
        height: 10000,
        width: 100,
      },
      function () {




      });
  }
  //性别的使用
  if($scope.stu.sex == "男") {
    $scope.woman = {
      show:false
    }
    $scope.man = {
      icon:{
        "margin-left":"50px",
      },
      show:true
    }
  }else{
    $scope.woman = {
      show:true
    }
    $scope.man = {
      icon:{
        "margin-left":"80px",
      },
      show:false
    }
  }
  //选择男女性别
  $scope.selectWoman = function() {
    $scope.woman = {
      show:true
    }
    $scope.man = {
      icon:{
        "margin-left":"80px",
      },
      show:false
    }
  }
  $scope.selectMan = function(){
    $scope.woman = {
      show:false
    }
    $scope.man = {
      icon:{
        "margin-left":"50px",
      },
      show:true
    }
  }
  //账号的设置
  $scope.accountSetting = function () {
    //隐藏键盘

    $ionicActionSheet.show({
      buttons: [
        {text: '修改密码'},

      ],
      destructiveText: '退出登录',
      cancelText: '取消',
      buttonClicked: function (index) {
        //到修改密码的界面
        $state.go('tab.Personal-ResetPassword');

      },
      destructiveButtonClicked:function () {
        //退出的动作
        swal({   title: "提醒",
            text: "你确认退出吗?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: true,
            closeOnCancel: true },
          function(isConfirm){

            if (isConfirm) {
              //进行缓存的清理和跳转
              $state.go('Login');
            }

          });
      return true;
      }

    });
  }
  //更改头像的动作
  $scope.selectHead = function () {
    $ionicActionSheet.show({
      buttons: [
        {text: '相册'},
        {text: '相机'}

      ],
      cancelText: '取消',
      buttonClicked: function (index) {
        //根据不同的情况来进行选择
        switch(index){
          case 0:
            document.addEventListener("deviceready", function () {
              //调取相册

              var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation:true
              };

              $cordovaCamera.getPicture(options).then(function (imageData) {

                var image = document.getElementById('myImage');
                $scope.avatar = "data:image/jpeg;base64," + imageData;
                //将base64字符串转化为二进制
                var binaryData = atob(imageData);
                console.log(imageData);
                console.log(binaryData);
              }, function (err) {
                //错误的信息

              });
            })
            break;
          case 1:
            document.addEventListener("deviceready", function () {

              var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation:true
              };
              $cordovaCamera.getPicture(options).then(function (imageData) {

                var image = document.getElementById('myImage');
                $scope.avatar = "data:image/jpeg;base64," + imageData;
              }, function (err) {
                // error
              });
            })
            break;

          default:break;

        }
        return true;
      },
    })
  }
});
