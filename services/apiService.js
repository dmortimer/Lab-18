var app = angular.module('appMod');

app.factory('apifactory', function($http){
  console.log('factory has loaded');

  var obj = {};
obj.getData = function () {
  return $http.get('https://api.chucknorris.io/jokes/random');
  }
  return obj;



});
