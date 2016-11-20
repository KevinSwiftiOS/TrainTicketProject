/**
 * Created by hcnucai on 2016/10/24.
 */
app.controller('PersonalResetPasswordCtrl', function($scope,$ionicHistory,$rootScope,httpPost){
    //tab隐藏
    $scope.$on("$ionicView.beforeEnter",function () {
        $rootScope.hideTabs = true;
    });
//获取到值后进行返回到主界面
    $scope.config = function () {


        var oldPassword = angular.element(document.querySelector('#oldPassword')).val();
        var newPassword = angular.element(document.querySelector('#newPassword')).val();
        var configNewPassword = angular.element(document.querySelector('#configNewPassword')).val();


      //判断密码是否相同
      var ls = window.localStorage;
      if(ls.getItem("password") != oldPassword){
        swal({
            title: "提醒",
            text: "原密码填写不正确",
            type: "error",
            height: 10000,
            width: 100,
          },
          function () {



          });
      }else if(newPassword != configNewPassword){
        swal({
            title: "提醒",
            text: "新密码填写不相同",
            type: "error",
            height: 10000,
            width: 100,
          },
          function () {
          });
      }else{
        var url = "http://localhost:3000/changePassword";
        var param = {
          username:ls.getItem("username"),
          oldpassword:oldPassword,
          newpassword:newPassword};
        var promise = httpPost.post(url,param);
        promise.success(function (res) {
          if(res["success"] == 1){
            ls.setItem("password",newPassword);
            swal({
                title: "恭喜您",
                text: "修改密码成功",
                type: "success",
                height: 10000,
                width: 100,
              },
              function () {

                //返回上一个界面
                $ionicHistory.goBack();

              });
          }else{
            swal({
                title: "提醒",
                text: "修改密码失败",
                type: "error",
                height: 10000,
                width: 100,
              },
              function () {

                //返回上一个界面


              });
          }
        })
      }

    }
    });
