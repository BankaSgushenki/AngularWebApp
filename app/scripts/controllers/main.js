'use strict';

/**
 * @ngdoc function
 * @name testWebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testWebAppApp
 */
angular.module('testWebAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
