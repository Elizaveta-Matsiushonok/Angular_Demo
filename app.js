var app = angular.module("app" , ['userService']);

app.controller("loginController", function($scope, userService ){
  
    $scope.loginSubmit = function(){
       userService.login($scope.login, $scope.password);
    };
});
   