const app = angular.module("app", ['ui.bootstrap', 'ui.router']);

app.config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider){
  'use strict';

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}]);

app.run(['$rootScope', '$state', function($rootScope, $state){
  'use strict';

  $rootScope.appName = 'app';
  $rootScope.$state = $state;
}]);
