var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/home', {
        controller: 'HomeController',
        templateUrl: 'app/views/home.html'
    })
    .when('/lists', {
        controller: 'ListsController',
        templateUrl: 'app/views/lists.html'
    })
    .when('/manage', {
        controller: 'ManageController',
        templateUrl: 'app/views/manage.html'
    })
    .when('/report', {
        controller: 'ReportController',
        templateUrl: 'app/views/report.html'
    })
    .otherwise({ redirectTo: '/home' });
}]);