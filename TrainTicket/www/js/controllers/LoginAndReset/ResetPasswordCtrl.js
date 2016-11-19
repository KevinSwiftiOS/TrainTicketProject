/**
 * Created by hcnucai on 2016/10/23.
 */
app.controller("ResetPsswordCtrl",function ($scope,$state) {


    $scope.config = function () {
        //如果密码
        var newPassword = angular.element(document.querySelector('#newPassword')).val();
        var configNewPassword = angular.element(document.querySelector('#configNewPassword')).val();

        if(newPassword === configNewPassword){
         //验证密码相同后进行修改 跳转到主界面
            $state.go('tab.BookTicket');
        }else {
            swal({
                title:"提醒",
                type:"error",
                text:"密码填写不相同",
            },(function () {

            }));
        }
    }
});
