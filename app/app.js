"use strict";

let app = angular.module("FlowerApp", ["ngRoute"])
  .constant("FirebaseURL", "https://flower-power-angular.firebaseio.com/");



app.config(function($routeProvider) {
    $routeProvider.
        when('/list', {
            templateUrl: "partials/list.html",
            controller: "ListCtrl"
        }).
         otherwise("/");



});
