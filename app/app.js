var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/main", {
        templateUrl : "views/main.html",
        controller : "auth"
    })
    .when("/login", {
        templateUrl : "views/login.html",
        controller : "auth"
    })
    .when("/dashboard", {
        templateUrl : "views/dashboard.html",
        controller : "auth"
    })
    .otherwise({
        redirectTo: '/main'
    });  
});