/**
 * Created by hcnucai on 2016/11/19.
 */
app.controller("RegisterCtrl",function ($scope,$state,httpPost) {
$scope.user = {};
//随机生成验证码
  $scope.receiveAuthCode = function () {
    if($scope.user.mobile != null) {
      $scope.authcode = "";
      var qian = Math.ceil(Math.random() * 9);
      $scope.authcode += qian;
      var bai = Math.ceil(Math.random() * 9);
      $scope.authcode += bai;
      var shi = Math.ceil(Math.random() * 9);
      $scope.authcode += shi;
      var ge = Math.ceil(Math.random() * 9);
      $scope.authcode += ge;
    }else{
      swal({
        title: "提醒",
        text: "请输入手机号",
        type: "warning",
        height: 10000,
        width: 100,
      },
        function () {
          return true;
        })
    }
  }

//注册
$scope.register = function () {
  //随后进行判断
  var user = $scope.user;
  if(user.username.length < 6 || user.username.length > 30){
    swal({
        title: "提醒",
        text: "输入用户名不正确",
        type: "warning",
        height: 10000,
        width: 100,
      },
      function () {

        return true;


      });
  }
  else if(user.password != user.configpassword || user.password.length < 6){
    swal({
        title: "提醒",
        text: "输入密码不相同",
        type: "warning",
        height: 10000,
        width: 100,
      },
      function () {

        return true;


      });
  }else if($scope.authcode != user.authcode){
    swal({
        title: "提醒",
        text: "验证码输入不正确",
        type: "warning",
        height: 10000,
        width: 100,
      },
      function () {

        return true;


      });
  }else{
    //将用户名 密码 手机号进行注册 插入到数据库中

var url = "http://localhost:3000/register";
    var user = $scope.user;

    var param = {
      username:user.username,
      password:user.password,
    mobile:user.mobile};
    var promise = httpPost.post(url,param);
    promise.success(function (res) {
      if(res["success"] == 1){

        //注册成功
        swal({
            title: "恭喜您",
            text: "注册成功",
            type: "success",
            height: 10000,
            width: 100,
          },
          function () {

            $state.go("tab.BookTicket");


          });
      }else{
        //注册成功
        swal({
            title: "提醒",
            text: "注册失败",
            type: "error",
            height: 10000,
            width: 100,
          },
          function () {



          });
      }
    })





  }

}


})
