/*

Author: Chris Samuel
title: navigationRoute.js
Description: Navigation Routes for the dvdepot nav. This page will help
             control the views of the Single page application with every new link added to the  
             site only the part of the page will be updated by the server and allow a more
             dynamically controlled site.

Email :       ksamuel.chris@Gmail.com

Date          10/19/2013
***********************************************************************************
reference code 

    // Create a module for our core AMail services
var aMailServices = angular.module('AMail', []);

// Set up our mappings between URLs, templates, and controllers
function emailRouteConfig($routeProvider) {
  $routeProvider.
    when('/', {
      controller: ListController,
      templateUrl: 'angular-list.html'
    }).
// Notice that for the detail view, we specify a parameterized URL component
// by placing a colon in front of the id
    when('/view/:id', {
      controller: DetailController,
      templateUrl: 'angular-detail.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}

// Set up our route so the AMail service can find it
aMailServices.config(emailRouteConfig);

// Some fake emails
messages = [{
  id: 0, sender: 'jean@somecompany.com', subject: 'Hi there, old friend',
  date: 'Dec 7, 2013 12:32:00', recipients: ['greg@somecompany.com'],
  message: 'Hey, we should get together for lunch sometime and catch up.'
    +'There are many things we should collaborate on this year.'
}, {
  id: 1,  sender: 'maria@somecompany.com',
  subject: 'Where did you leave my laptop?',
  date: 'Dec 7, 2013 8:15:12', recipients: ['greg@somecompany.com'],
  message: 'I thought you were going to put it in my desk drawer.'
    +'But it does not seem to be there.'
}, {
  id: 2, sender: 'bill@somecompany.com', subject: 'Lost python',
  date: 'Dec 6, 2013 20:35:02', recipients: ['greg@somecompany.com'],
  message: 'Nobody panic, but my pet python is missing from her cage.'
    +'She doesn\'t move too fast, so just call me if you see her.'
} ];

// Publish our messages for the list template
function ListController($scope) {
  $scope.messages = messages;
}

// Get the message id from the route (parsed from the URL) and use it to
// find the right message object.
function DetailController($scope, $routeParams) {
  $scope.message = messages[$routeParams.id];
}
  
    When creating a 'routeProvider' config({'$routeProvider',function($routeProvider){
        $routeProvider.when('/veiw1'.{templateUrl;'partials /partial1.html,controller:'MyCtrl1});
        $routeProvider.when('/veiw2'.{templateUrl;'partials /partial2.html,controller:'MyCtrl2});
    */


// Lets create a module for our core Movie services movWid App Module



    var movieWidgetServices = angular.module('MovWid' , []); //the name of the ngModule is MovWid

// Set up mappings between URLs, template, and controllers function

function menuNavRouteConfig($routeProvider) {$routeProvider.
    when('/', {controller: CarouselController,templateUrl: 'partials/home.html'}).
    when('/search', {controller: CarouselController,templateUrl: 'partials/search.html'}).
   
  
  //otherwise redirect to '/'
  otherwise({redirectsTo:'/'}).

  )};

 //set up our route so that the movWid service can find it

    movieWidgetServices.config(menuNavRouteConfig);












































