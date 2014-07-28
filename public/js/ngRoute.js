hanApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/lost', {
            templateUrl: 'views/lost.html'
        })
        .when('/found', {
            templateUrl: 'views/found.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
}]);
