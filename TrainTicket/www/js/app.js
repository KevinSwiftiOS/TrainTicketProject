// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  //setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
      cache:false,
    templateUrl: 'templates/tabs/tabs.html',
     controller:"TabsCtrl"
  })
    // Each tab has its own nav history stack:
  //3个tab
  .state('tab.BookTicket', {
    url: '/BookTicket',
    views: {
      'menuContent': {
        templateUrl: 'templates/tabs/BookTicket.html',
        controller: 'BookTicketCtrl'
      }
    }
  })
    .state('tab.Order', {
      url: '/Order',

      views: {
        'menuContent': {
          templateUrl: 'templates/tabs/Order.html',
          controller: 'OrderCtrl'
        }
      }
    })
    .state('tab.Personal', {
      url: '/Personal',
      views: {
        'menuContent': {
          templateUrl: 'templates/tabs/Personal.html',
          controller: 'PersonalCtrl'
        }
      }
    })
  //第四个模块 个人中心模块的修改密码界面
  .state('tab.Personal-ResetPassword',{
    url:'/Personal/ResetPassword',
    views:{
      'menuContent': {
        templateUrl: 'templates/Personal/ResetPassword.html',
        controller: 'PersonalResetPasswordCtrl',
      }
    }

  })
  //注册登录页面
    .state('Login',{
      url:'/Login',
      templateUrl:'templates/LoginAndReset/Login.html',
      controller:'LoginCtrl',


    })
    //忘记密码填写邮箱
    .state('WriteEmail',{
      url:'/WriteEmail',
      templateUrl:'templates/LoginAndReset/WriteEmail.html',
      controller:'LoginWriteEmailCtrl',


    })
    //发送验证码的
    .state('SendIdentity',{
      url:'/SendIdentity',
      templateUrl:'templates/LoginAndReset/SendIdentity.html',
      controller:'SendIdentityCtrl',


    })
    //重置密码
    .state('ResetPassword',{
      url:'/ResetPassword',
      templateUrl:'templates/LoginAndReset/ResetPassword.html',
      controller:'ResetPsswordCtrl',


    })
  //注册
    .state('Register',{
      url:'/Register',
      templateUrl:'templates/LoginAndReset/Register.html',
      controller:'RegisterCtrl',
    })
  //第二个模块 订单列表页面
    .state('tab.Order-Orderlist',{
      url:'/Order/OrderList',
      params:{title:null},
      views:{
        'menuContent': {
          templateUrl: 'templates/Order/OrderList.html',
          controller: 'OrderListCtrl',
        }
      }

    })
//第二个模块 订单列表的详细页面
    .state('tab.Order-OrderDetail',{
    url:'/Order/OrderDetail',

    views:{
      'menuContent': {
        templateUrl: 'templates/Order/OrderDetail.html',
        controller: 'OrderDetailCtrl',
      }
    }

  })
    //第一个模块 查询开始和结束车站
    .state('tab.BookTicket-Search',{
      url:'/BookTicket/Search',
      params:{type:null},
      views:{
        'menuContent': {
          templateUrl: 'templates/BookTicket/SearchStation.html',
          controller: 'SearchStationCtrl',
        }
      }

    })
    //第一个模块 查询结果
    .state('tab.BookTicket-Result',{
      url:'/BookTicket/Result',
      params:{date:null,time:null,type:null},
      views:{
        'menuContent': {
          templateUrl: 'templates/BookTicket/QueryResult.html',
          controller: 'QueryResultCtrl',
        }
      }

    })
    //第一个模块 完善个人信息
    .state('tab.BookTicket-CompleteInfo',{
      url:'/BookTicket/CompleteInfo',

      views:{
        'menuContent': {
          templateUrl: 'templates/BookTicket/CompleteInfo.html',
          controller: 'CompleteInfoCtrl',
        }
      }

    })
    //第一个模块 确认订单
    .state('tab.BookTicket-ConfirmOrder',{
      url:'/BookTicket/ConfirmOrder',

      views:{
        'menuContent': {
          templateUrl: 'templates/BookTicket/ConfirmOrder.html',
          controller: 'ConfirmOrderCtrl',
        }
      }

    })
    //第一个模块 添加联系人
    .state('tab.BookTicket-AddPerson',{
      url:'/BookTicket/AddPerson',

      views:{
        'menuContent': {
          templateUrl: 'templates/BookTicket/AddPerson.html',
          controller: 'AddPersonCtrl',
        }
      }

    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/BookTicket');

});
