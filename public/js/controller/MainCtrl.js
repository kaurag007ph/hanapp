hanApp.controller('MainCtrl', ['$scope', '$location', function($scope, $location){

    $scope.viewHome = function() {
        $location.path('/')
    }
    $scope.viewLost = function(){
        $location.path('/lost');
    }

    $scope.viewFound = function() {
        $location.path('/found');
    }
}]);