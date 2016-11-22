/**
 * Created by hcnucai on 2016/11/22.
 */
app.controller("CompleteInfoCtrl",function ($scope,$ionicActionSheet,$state,httpPost) {
  var ls = window.localStorage;
  $scope.user = {
    username:ls.getItem("username"),

    name:ls.getItem("name"),
    cardType:ls.getItem("cardType"),
    cardId:ls.getItem("cardId"),

    email:ls.getItem("email"),
    tel:ls.getItem("mobile"),
  };
  //选择身份证的类别
  $scope.selectType = function () {
    $ionicActionSheet.show({
      buttons: [
        {text: '二代身份证'},
        {text:"港澳通行证"},
        {text:"台湾通行证"},
        {text:"护照"}
      ],
      cancelText: '取消',
      buttonClicked: function (index) {
        //到修改密码的界面
        switch (index){
          case 0:
            $scope.user.cardType = "二代身份证";
            break;
          case 1:
            $scope.user.cardType = "港澳通行证";
            break;
          case 2:
            $scope.user.cardType = "台湾通行证";
            break;
          case 3:
            $scope.user.cardType = "护照";
            break;
          default:break;

        }
        return true;
      }

    });
  }
  //完成按钮
  $scope.complete = function () {
    if($scope.user.name == ""){
      swal({
          title: "提醒",
          text: "姓名为必填字段",
          type: "error",
          height: 10000,
          width: 100,
        },
        function () {

        });
    }else if($scope.user.cardId == ""){
      swal({
          title: "提醒",
          text: "证件号码为必填字段",
          type: "error",
          height: 10000,
          width: 100,
        },
        function () {

        });
    }else{
      //可以拿到值并且保存成功个人信息
      //保存的动作
      var url = "http://localhost:3000/save";
      var param = $scope.user;
var promise = httpPost.post(url,param);
      promise.success(function (res) {
          if (res["success"] == 1) {
            //设置变量的值
            ls.setItem("name", param.name);
            ls.setItem("mobile", param.tel);
            ls.setItem("cardId", param.cardId);
            ls.setItem("email", param.email);
            ls.setItem("cardType", param.cardType);
            swal({
                title: "恭喜您",
                text: "保存成功",
                type: "success",
                height: 10000,
                width: 100,
              },
              function () {
                 //跳转到订单界面
                $state.go("tab.BookTicket-ConfirmOrder");
              });
          }
        });

    }
  }
})
