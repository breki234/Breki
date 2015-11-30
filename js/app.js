var App = angular.module('championApp', ['ngRoute'])
    .config( ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/first', {
                templateUrl: 'pages/championlist.html',
                controller: 'listController'
            })
            .when('/second/:id', {
                templateUrl: 'pages/champion.html',
                controller: 'detailsController'

            })
            .when('/third/:id', {
                templateUrl: 'pages/skins.html',
                controller: 'detailsController'

            })
            .when('/forth/:id', {
                templateUrl: 'pages/lores.html',
                controller: 'detailsController'

            })
            .when('/fifth/:id', {
                templateUrl: 'pages/spells.html',
                controller: 'detailsController'

            })

            .otherwise({
                redirectTo: '/first'
            });
    }]);
