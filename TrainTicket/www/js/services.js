var service = angular.module('starter.services', []);
//定义http服务
//自定义服务
service.factory('httpPost',function ($http) {
  return {
    post:function (url,param) {
      return $http({
        method:"POST",
        url:url,
        params:param
      });
    }
  }
});
//头像的路径
service.factory("img",function () {
  return {
    src: null
  }
});
//起始站点的选择
  service.factory("station",function () {
    return {
      start:"杭州东",
      end:"宁波",
    }
  });
//买的票
service.factory("trainTicket",function () {
  return {
    detail:null
  }
})
