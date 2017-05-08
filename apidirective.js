var app = angular.module('appMod');
app.directive ('apiDirective', function (){
return {
  restrict: 'AEC',
  replace: false,
  template: '<h2>Chuck Norris da gawd</h2>'
  }
});
