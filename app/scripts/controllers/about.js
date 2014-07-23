'use strict';

/**
 * @ngdoc function
 * @name testWebAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testWebAppApp
 */
angular.module('testWebAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
