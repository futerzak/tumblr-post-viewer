angular.module('app')
.service('TumblrService', function($http, $state) {
  this.getData = (userName, params) => {
    query = "";

    for(param in params){

      query += param + "=" + params[param] + "&";
    }


    let result = {};
    return $http.get("/api/" + userName + "?" + query )
    .then((response) => {

      const tumblrData = JSON.parse(response.data.substr(22).slice(0, -2));

      result = tumblrData;
      return tumblrData;
    })
  }
})
.service('PostService', function(TumblrService) {
  this.find = (userName, postId) => {

    return TumblrService.getData(userName, {id: postId}).then((tumblrData) => {
      return tumblrData.posts[0];
    })
  }
})
