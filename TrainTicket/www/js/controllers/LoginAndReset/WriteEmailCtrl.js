/**
 * Created by hcnucai on 2016/10/23.
 */
//注入ctrl
app.controller('LoginWriteEmailCtrl',function ($scope,$state) {

$scope.writeEmail = function () {

    var email  = angular.element(document.querySelector('#email')).val();
    //发送验证码 随后跳转到下一写验证码的界面
    //报错

   $state.go('SendIdentity');

}

});
