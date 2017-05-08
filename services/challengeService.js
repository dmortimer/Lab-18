var app = angular.module('appMod');

app.factory('challengeService', function() {

    return {
        checkNum: function(i) {

            for (var i = 1; i <= 100; i++) {
              if (((i % 3) === 0) && ((i % 5) === 0)) {
                console.log("FizzBuzz");
                var word = "fizzbuzz";
              } else if ((i % 3) === 0) {
                console.log("Buzz");
                var word = "buzz";
              } else if ((i % 5)=== 0) {
                console.log("Fizz");
                var word = "fizz";
              } else {
                console.log(i);
              }
            }


        }
    }
});
