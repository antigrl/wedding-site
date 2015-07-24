'use strict';

angular.module('wedding')
  .controller('FooterCtrl', function ($scope) {
    $scope.date = new Date();
  });
