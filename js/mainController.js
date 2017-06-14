(function() {

var app = angular.module('App', [ 'ngMaterial']);
app.controller('AppCtrl', function($scope, $mdSidenav){

  $scope.toggleSidenav = function(menu) {
          if ($mdSidenav(menu).isOpen()){
            $mdSidenav(menu).close();
          } else {
            $mdSidenav(menu).toggle();
          }
      };


});

}());
