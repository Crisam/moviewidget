//'use strict'


var movieServices = angular.module('MovWid', []);

// Set up our mappings between URLs, templates, and controllers
function NavRouteConfig($routeProvider) {
  $routeProvider.
    when('/', {
      controller: CarouselController,
      templateUrl: 'movielist.html'
    }).
// Notice that for the detail view, we specify a parameterized URL component
// by placing a colon in front of the id
    when('/order', {
      controller: CarouselController,
      templateUrl: 'movieSearch.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}