/**
 * Created by hcnucai on 2016/10/23.
 */
app.controller('LoginCtrl',function ($scope,$state,httpPost,img) {


    $scope.login = function () {

       //登录服务
        var username = angular.element(document.querySelector('#username')).val();
        var password = angular.element(document.querySelector('#password')).val();
      var url = "http://localhost:3000/login";
      var param = {
        username:username,
        password:password
      };
      var promise = httpPost.post(url,param);
      promise.success(function (res) {
        if(res["success"] == 0){
          swal({
              title: "提醒",
              text: "登录失败",
              type: "error",
              height: 10000,
              width: 100,
            },
            function () {
            });
        }
        else{
          var data = res["data"];
          console.log(data.username);
          //设置值
          var ls = window.localStorage;

          ls.setItem("username",data.username);
          ls.setItem("name",data.name);
          ls.setItem("password",data.password);
          ls.setItem("mobile",data.mobile);
          if(data.cardTye == ""){
            ls.setItem("cardType","二代身份证");
          }else{
            ls.setItem("cardType",data.cardTye);
          }
          ls.setItem("cardId",data.cardId);
          ls.setItem("email",data.email);
          //设置头像
       img.src = "http://dodo.hznu.edu.cn/Upload/editor/776de979-dead-4a60-83ca-a6aa00be839a.jpg";
          $state.go("tab.BookTicket");
        }
      })

    }


});
