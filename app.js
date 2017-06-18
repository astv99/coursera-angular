(function () {
  'use strict';

  angular.module('testApp', [])
    .controller('testController', function ($scope) {
      $scope.name = "Hello Angular!";
      $scope.hello = function () { return "Hello World"; };
    });
})();
