

'use strict';// this is mostly irrelevant.
'use strict';

/* App Module */

angular.module('phonecat', ['phonecatFilters', 'phonecat.Services']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: DeviceCtrl}).
      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]);
/* Controllers */

function PhoneListCtrl($scope, Movie) {
  $scope.movies = Movie.query();
  $scope.orderProp = 'genre';
  $scope.movies = [
    {
        "Title": "21 & Over",
        "Release Date": "01-Mar-13",
        "Genre": "Comedy",
        "Number of Discs": "1",
        "Price Tier": "1",
        "Type": "Movie",
        "Summary": "The night before his big medical school interview, a promising student celebrates his 21st birthday with his two best friends.",
        "altImage": "0000.jpg",
        "Image": "0001.jpg"
    },
    {
        "Title": "42",
        "Release Date": "12-Apr-13",
        "Genre": "Biography/Drama/Sport",
        "Number of Discs": "1",
        "Price Tier": "1",
        "Type": "Movie",
        "Summary": "The life story of Jackie Robinson and his history-making signing with the Brooklyn Dodgers under the guidance of team executive Branch Rickey.",
        "altImage": "0000.jpg",
        "Image": "0002.jpg"
    },
    {
        "Title": "Alex Cross",
        "Release Date": "19-Oct-12",
        "Genre": "Action/Crime/Mystery",
        "Number of Discs": "1",
        "Price Tier": "1",
        "Type": "Movie",
        "Summary": "A homicide detective is pushed to the brink of his moral and physical limits as he tangles with a ferociously skilled serial killer who specializes in torture and pain.",
        "altImage": "0000.jpg",
        "Image": "0004.jpg"
    }
    ];
    }
   $scope.hello = "My Movie Collection"
   
//Refresh your browser to make sure it says "Hello World"

//PhoneListCtrl.$inject = ['$scope', 'Phone'];



function PhoneDetailCtrl($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];

