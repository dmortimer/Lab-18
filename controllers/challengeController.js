var app = angular.module('appMod');
app.controller('challengeCtrl', function($scope, challengeService) {

    $scope.getNum = function(enteredNum) {
        var i = enteredNum;
        console.log(i);
    }
    



});
