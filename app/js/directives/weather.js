app.directive('weatherApp', function() {
  return {
    restrict: 'E',
    scope: {
      day: '='
    },
    templateUrl: 'views/directives/weather.html'
  };
});
