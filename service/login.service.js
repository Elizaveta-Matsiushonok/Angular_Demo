angular.module('userService', [])
    .service('userService', function($http){
        this.login = function(login, password){
            $http.post('http:localhost:8081/login', {login, password})
            .then(function(result){
                console.log("success");
            },function(result){
                console.log("error");
            })
        }
    });