angular.module('app')
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state('post', {
      url: '/:userName/post/:postId',
      templateUrl: 'app/post/post.html',
      controller: 'PostCtrl',
      resolve: {
        post: function($stateParams, PostService) {
          return PostService.find($stateParams.userName, $stateParams.postId);
        }
      }
    });

    let types = [
      {
        type: "text",
        label: "regular"
      },
      {
        type: "quote",
        label: "quote"
      },
      {
        type: "photo",
        label: "photo"
      },
      {
        type: "link",
        label: "link"
      },
      {
        type: "chat",
        label: "conversation"
      },
      {
        type: "video",
        label: "video"
      },
      {
        type: "audio",
        label: "audio"
      }
    ];
    for(let type in types) {
      $stateProvider.state(types[type].label, {
        url: '/:userName/post-'+types[type].type+'/:postId',
        templateUrl: 'app/post/post-'+types[type].type+'.html',
        controller: 'PostCtrl',
        resolve: {
          post: function($stateParams, PostService) {
            return PostService.find($stateParams.userName, $stateParams.postId);
          }
        }
      });
    }

  }]);
