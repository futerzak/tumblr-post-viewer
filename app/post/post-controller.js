angular.module('app')
  .controller('PostCtrl', ['$rootScope', '$scope', '$http', '$sce', 'post', 'PostService', function ($rootScope, $scope, $http, $sce, post, PostService) {

    $scope.contents = "To jest strona o nas";
    $scope.userName = $rootScope.userName;

    $scope.post = post;

    $scope.renderHtml = function (htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };

  }]);
