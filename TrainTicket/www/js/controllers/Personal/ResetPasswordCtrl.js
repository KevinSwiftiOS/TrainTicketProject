/**
 * Created by hcnucai on 2016/10/24.
 */
app.controller('PersonalResetPasswordCtrl', function($scope,$ionicHistory,$rootScope){
    //tab隐藏
    $scope.$on("$ionicView.beforeEnter",function () {
        $rootScope.hideTabs = true;
    });
//获取到值后进行返回到主界面
    $scope.config = function () {


        var oldPassword = angular.element(document.querySelector('#oldPassword')).val();
        var newPassword = angular.element(document.querySelector('#newPassword')).val();
        var configNewPassword = angular.element(document.querySelector('#configNewPassword')).val();
       //返回上一个界面
        $ionicHistory.goBack();
    }
    });