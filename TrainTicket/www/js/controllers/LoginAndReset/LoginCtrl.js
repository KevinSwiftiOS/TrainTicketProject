/**
 * Created by hcnucai on 2016/10/23.
 */
app.controller('LoginCtrl',function ($scope,$state,httpPost) {


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
        }else{
          console.log(res["data"])
          $state.go("tab.BookTicket");
        }
      })

    }


});
