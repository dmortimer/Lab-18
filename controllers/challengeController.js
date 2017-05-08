var app = angular.module('appMod');
app.controller('challengeCtrl', function($scope, challengeService) {

    $scope.getNum = function(enteredNum) {
        var i = enteredNum;
        // console.log(i);
        $scope.fizzReturn = challengeService.checkNum(i);
        console.log($scope.fizzReturn);


    }
});
app.directive('fizzbuzz', function() {

    return {
        restrict: 'E',
        replace: false,
        template: '<p>{{fizzReturn}}</p>'
    }

});
