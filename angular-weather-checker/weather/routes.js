// ROUTES

weatherApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })

    .when('/:days', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })

});