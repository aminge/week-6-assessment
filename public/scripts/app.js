var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/entry', {
            templateUrl: '/views/templates/heroEntry.html',
            controller: 'EntryController'
        })
        .when('/listing', {
            templateUrl: '/views/templates/heroListing.html',
            controller: 'ListingController'
        })
        .otherwise({
            redirectTo: 'entry'
        });
}]);