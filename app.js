var app = angular.module('appMod', ["ngRoute", "ngAnimate"]);

app.config(function($routeProvider){
    $routeProvider
    .when('/challengeview', {
      controller: 'challengeCtrl',
      templateUrl: 'views/challengeView.html'
    })
    .when('/apiview', {
      controller: 'apiCtrl',
      templateUrl: 'views/apiView.html'
    })
    .otherwise({
      redirectTo: '/challengeview'
    });

});
