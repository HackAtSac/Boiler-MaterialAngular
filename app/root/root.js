'use strict';

angular.module('myApp.root', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'res/root/root.html',
    controller: 'RootCtrl'
  });
}])

.controller('RootCtrl', [function() {
  console.log("Welcome to My AngularJS App!\n(This message brought to you by RootCtrl)");
}]);