'use strict';

/**
 * @ngdoc function
 * @name edevWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the edevWebApp
 */
angular.module('edevWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
