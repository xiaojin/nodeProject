'use strict';

var angular = require('angular');

var app = angular.module('myApp', []);

app.controller('HelloCtrl', function($scope) {
  $scope.test = 'Test varretjes';
});
