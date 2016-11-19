/**
 * Created by hcnucai on 2016/10/23.
 */
//注入ctrl
app.controller("SendIdentityCtrl",function ($scope,$timeout,$state) {
    var totalTime;
    var updateClock = function () {
        if(totalTime >= 0) {
            $scope.clock = totalTime--;

            $timeout(function () {
                updateClock();
            }, 1000);
        }
    };

    //进行确认的按钮

    $scope.makeSure = function () {

        //进行重置totalTime
        var identityText = angular.element(document.querySelector('#identityText')).val();

        //验证码没有错误后进行跳转
        $state.go('ResetPassword');
    }
    //监听视图进入
    $scope.$on("$ionicView.beforeEnter",function () {
         totalTime = 60;
        updateClock();
    })
    //当视图消失的时候 totalTime也变为60
    $scope.$on("$ionicView.beforeLeave",function () {
        totalTime = 0;
        updateClock();
    })
})