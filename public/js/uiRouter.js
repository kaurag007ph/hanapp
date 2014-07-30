hanApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        .state('lost', {
            url: '/lost',
            templateUrl: 'views/lost.html'
        })
        .state('found', {
            url: '/found',
            templateUrl: 'views/found.html'
        });

    $urlRouterProvider.otherwise('/home');
}]);