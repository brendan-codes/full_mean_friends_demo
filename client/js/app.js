var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {templateUrl: '../partials/main.html'})
  .when('/friend/:id')
  .otherwise({redirectTo: '/'})
});


app.factory('friendsFactory', function($http){
  var factory = {};

  factory.showFriends = function(callback){
    $http.get('/friends').then(function(all_friends){
      callback(all_friends.data);
    })
  }

  factory.createFriend = function(newFriend, callback){
    console.log(newFriend);
    $http.post('/friend/new', newFriend).then(function(created_friend){
      console.log(created_friend);
      console.log('Got back from the server!');
      callback(created_friend);
    })
  }

  return factory;
});

app.controller('friendsController', ['friendsFactory', '$scope', function(friendsFactory, $scope){

  $scope.friends = [];

  friendsFactory.showFriends(function(data){
    console.log(data);
    $scope.friends = data;
  })

  $scope.createFriend = function(){
    var friend = $scope.newFriend;
    friendsFactory.createFriend(friend, function(data){

      if(data.errors){
        $scope.
      }else{
        friendsFactory.showFriends(function(data){
          $scope.friends = data;
        })
      }
    });
  }



}])
