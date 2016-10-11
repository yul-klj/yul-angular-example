app.directive('appInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/directives/appInfo.html'
  };
});
