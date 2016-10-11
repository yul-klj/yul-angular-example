var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
    .when('/photos/:id', {
      controller: 'PhotoController',
      templateUrl: 'views/photo.html'
    })
    .when('/weather', {
      controller: 'ForecastController',
      templateUrl: 'views/weather.html'
    })
    .when('/app', {
      controller: 'AppController',
      templateUrl: 'views/app.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
