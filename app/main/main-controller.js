angular.module('app')
  .controller('MainCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $htt) {
    $scope.lists = [];
    $rootScope.userName = $scope.userName;

    $scope.$watch('userName', (n, o) => {
      $rootScope.userName = n;
    })

  }]);
