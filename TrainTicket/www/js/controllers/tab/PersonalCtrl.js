/**
 * Created by hcnucai on 2016/10/25.
 */
app.controller('PersonalCtrl', function($scope,$rootScope,$state,$ionicHistory,$ionicActionSheet,$cordovaCamera,httpPost,img){
var imgData;
$scope.img = img;
  //监听
  $scope.$watch('img', function(newVal, oldVal) {
    if (newVal !== oldVal) {

    }
  }, true);
  //监听页面进入的时候 tab消失
  $scope.$on("$ionicView.beforeEnter",function () {
    var ls = window.localStorage;
    $scope.user = {
      username:ls.getItem("username"),

      name:ls.getItem("name"),
      cardType:ls.getItem("cardType"),
      cardId:ls.getItem("cardId"),

      email:ls.getItem("email"),
      tel:ls.getItem("mobile"),
    };
  });
  //选择证件类别
  $scope.selectType = function () {
    //选择身份类别
    $ionicActionSheet.show({
      buttons: [
        {text: '二代身份证'},
        {text:"港澳通行证"},
        {text:"台湾通行证"},
        {text:"护照"}
      ],
      cancelText: '取消',
      buttonClicked: function (index) {
        //到修改密码的界面
        switch (index){
          case 0:
            $scope.user.cardType = "二代身份证";
            break;
          case 1:
            $scope.user.cardType = "港澳通行证";
            break;
          case 2:
            $scope.user.cardType = "台湾通行证";
            break;
          case 3:
            $scope.user.cardType = "护照";
            break;
          default:break;

        }
      return true;
      }

    });
  }
  //进行保存的操作
  $scope.save = function () {
    //可以拿到值并且保存成功个人信息
    //保存的动作
        var url = "http://localhost:3000/save";
   var param = $scope.user;
      var promise = httpPost.post(url,param);
        promise.success(function (res) {
          if (res["success"] == 1) {
            //设置变量的值
            var ls = window.localStorage;
            ls.setItem("name", param.name);
            ls.setItem("mobile", param.tel);
            ls.setItem("cardId", param.cardId);
            ls.setItem("email", param.email);
            ls.setItem("cardType", param.cardType);
            $scope.img.src = imgData;
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
        });

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
                $scope.img.src = "data:image/jpeg;base64," + imageData;
                imgData = "data:image/jpeg;base64," + imageData;
                //将base64字符串转化为二进制
                // var binaryData = atob(imageData);
                // console.log(imageData);
                // console.log(binaryData);

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
                $scope.img.src = "data:image/jpeg;base64," + imageData;
                imgData = "data:image/jpeg;base64," + imageData;
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
