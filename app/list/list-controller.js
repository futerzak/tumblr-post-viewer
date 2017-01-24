angular.module('app')
  .controller('ListCtrl', ['$rootScope', '$scope', '$http', 'tumblrData', 'TumblrService', function ($rootScope, $scope, $http, tumblrData, TumblrService) {

    $scope.contents = "To jest strona o nas";

    $scope.userName = $rootScope.userName;
    $scope.tumblrData = tumblrData;

    $scope.types = [
      {
        type: "text",
        label: "text"
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
        label: "chat"
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

    $scope.params = {
      page: 1,
      numberOnPage: 20,
      type: "",
      tags: ""
    }
    $scope.queryParams = {
      start: ($scope.params.page-1)*$scope.params.numberOnPage,
      num: $scope.params.numberOnPage,
      type: $scope.params.type,
      id: "",
      filter: "text",
      tagged: $scope.params.tags,
      chrono: ""
     };

     $scope.next = () => {
         $scope.params.page++;
     }

     $scope.prev = () => {
         if($scope.params.page > 1){
             $scope.params.page--;
         }
     }

    for(param in $scope.params) {


      $scope.$watch('params.'+param, () => {

        $scope.queryParams = {
          start: ($scope.params.page-1)*$scope.params.numberOnPage,
          num: $scope.params.numberOnPage,
          type: $scope.params.type,
          id: "",
          filter: "",
          tagged: $scope.params.tags,
          chrono: ""
        };


        TumblrService.getData($rootScope.userName, $scope.queryParams).then(re => {
          $scope.tumblrData = re;
          return re;
        });
      });
    }


}]);
