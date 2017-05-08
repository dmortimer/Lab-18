var app = angular.module('appMod');

app.controller ('apiCtrl', function(apifactory, $scope){
  console.log('api controller check');
  $scope.jokes = [];
  $scope.getJoke = function (){
      $scope.http = apifactory.getData();
      $scope.http.then(function(response){
        // $scope.posts = response.data.data.value;
        // console.log(response.data.value);
        $scope.jokes.push(response.data.value);
      }, function (error) {
        console.log(error);
      });
  }

  console.log($scope.jokes);
})
