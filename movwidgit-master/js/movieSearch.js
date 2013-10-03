'use strict';
var movieServices = angular.module('MovWid', []);
/* Controllers */

 // Retrieve and set data 
function movieSearchController($scope, $http) {
    $http.get("working.json").success(function(movieData) {
        $scope.movies = movieData;
        console.log(movieData);
    });
}
//PhoneListCtrl.$inject = ['$scope', 'Phone'];


/*
function PhoneDetailCtrl($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

*/