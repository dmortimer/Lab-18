var app = angular.module('appMod');

app.factory('challengeService', function() {
 var word;
    return {
        checkNum: function(i) {


            if (((i % 3) === 0) && ((i % 5) === 0)) {
                console.log("FizzBuzz");
                word = "fizzbuzz";
            } else if ((i % 3) === 0) {
                console.log("Buzz");
                word = "buzz";
            } else if ((i % 5) === 0) {
                console.log("Fizz");
                word = "fizz";
            };
            // console.log(word);
            return word;


        }
    }
});
