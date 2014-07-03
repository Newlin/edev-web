'use strict';

/**
 * @ngdoc function
 * @name edevWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the edevWebApp
 */
angular.module('edevWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
