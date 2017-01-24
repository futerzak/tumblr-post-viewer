angular.module('app')
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state('list', {
      url: '/:userName',
      templateUrl: 'app/list/list.html',
      controller: 'ListCtrl',
      resolve: {
        tumblrData: ($stateParams, TumblrService) => {
          return TumblrService.getData($stateParams.userName, $stateParams.queryParams={}).then(re => {
            return re;
          });
        }
      }
    });
  }]);
