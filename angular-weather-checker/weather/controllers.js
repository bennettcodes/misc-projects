// CONTROLLERS

weatherApp.controller('homeController', ['$scope', '$resource', '$routeParams',
    function ($scope, $resource, $routeParams) {

        $scope.tileContainer = $('#tile-container');

        var loneDelay;

        var currentLoneTile;

        $scope.tile = document.getElementsByClassName('tile');

        $scope.days = $routeParams.days || 7;

        $scope.weatherLarge = $('.weather-large');

        $scope.weatherSmall = $('.weather-small');

        for (i = 0; i < $('.tile').length; i++) {
            $('.tile').eq(i).velocity({
                opacity: ['1', '0'],
                translateY: ['0px', '100px']
            }, {
                duration: 1000,
                easing: 'easeOutCirc',
                delay: 0,
                queue: false
            });
        }



        $scope.weatherSmall.css({
            left: $scope.weatherLarge.width()
        });

        /*$scope.city = currentCity;*/

        $scope.city = Cookies.get('currentCity');

        $('.form-control').click(function () {
            Cookies.set('currentCity', $('.form-control').val());
            console.log('inside of watch: ' + Cookies.get('currentCity'));
        });

        $('.form-control').keyup(function () {
            Cookies.set('currentCity', $('.form-control').val());
        });

        /*$('.form-control').keyup(function () {
        });*/

        $scope.$watch('city', function () {

            $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=a3cfa68a6be81069730c43c604e7a827', {
                callback: 'JSON_CALLBACK'
            }, {
                get: {
                    method: 'JSONP'
                }
            });

            $scope.weatherResult = $scope.weatherAPI.get({
                q: Cookies.get('currentCity'),
                cnt: $scope.days
            });

            $scope.convertToFahrenheit = function (degK) {
                var result = Math.round((1.8 * (degK - 273)) + 32);

                for (i = 0; i < $('.int-degree').length; i++) {

                    switch (true) {
                    case $('.int-degree').eq(i).text() < 10:
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#cea2ff',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 10) && ($('.int-degree').eq(i).text() < 15):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#b573ff',
                            color: '#ffffff'
                        });

                        break;
                    case ($('.int-degree').eq(i).text() >= 15) && ($('.int-degree').eq(i).text() < 20):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#9b73ff',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 20) && ($('.int-degree').eq(i).text() < 25):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#8773ff',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 25) && ($('.int-degree').eq(i).text() < 30):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#7673ff',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 30) && ($('.int-degree').eq(i).text() < 35):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#738aff',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 35) && ($('.int-degree').eq(i).text() < 40):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#739bff',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 40) && ($('.int-degree').eq(i).text() < 45):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#73aeff',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 45) && ($('.int-degree').eq(i).text() < 50):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#73c2ff',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 50) && ($('.int-degree').eq(i).text() < 55):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#73e3ff',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 55) && ($('.int-degree').eq(i).text() < 60):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#56ddff',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 60) && ($('.int-degree').eq(i).text() < 65):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#56fff9',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 65) && ($('.int-degree').eq(i).text() < 70):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#56ffa9',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 70) && ($('.int-degree').eq(i).text() < 75):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#86ff56',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 75) && ($('.int-degree').eq(i).text() < 80):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#b5ff56',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 80) && ($('.int-degree').eq(i).text() < 85):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#f25f32',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 85) && ($('.int-degree').eq(i).text() < 90):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#f25232',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 90) && ($('.int-degree').eq(i).text() < 95):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#f24432',
                            color: '#ffffff'
                        });
                        break;
                    case ($('.int-degree').eq(i).text() >= 95) && ($('.int-degree').eq(i).text() < 100):
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#e31414',
                            color: '#ffffff'
                        });
                        break;
                    case $('.int-degree').eq(i).text() >= 100:
                        $('.weather-stats').eq(i).css({
                            backgroundColor: '#ff0000',
                            color: '#ffffff'
                        });
                        break;
                    }

                    switch (true) {
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(206, 262, 255)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(206, 262, 255, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(181, 115, 255)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(181, 115, 255, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(155, 115, 255)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(155, 115, 255, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(135, 115, 255)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(135, 115, 255, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(118, 115, 255)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(118, 115, 255, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(115, 138, 255)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(115, 138, 255, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(115, 155, 255)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(115, 155, 255, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(115, 174, 255)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(115, 174, 255, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(115, 194, 255)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(115, 194, 255, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(115, 227, 255)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(115, 227, 255, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(86, 221, 255)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(86, 221, 255, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(86, 255, 249)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(86, 255, 249, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(86, 255, 169)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(86, 255, 169, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(134, 255, 86)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(134, 255, 86, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(181, 255, 86)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(255, 0, 0, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(242, 95, 50)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(242, 95, 50, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(242, 82, 50)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(242, 82, 50, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(242, 68, 50)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(242, 68, 50, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(227, 20, 20)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(227, 20, 20, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    case ($('.weather-stats').eq(0).css('backgroundColor') === 'rgb(255, 0, 0)') && ($('.form-control').val() !== ''):
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(255, 0, 0, 0.5)'
                        });
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 1
                        });
                        break;
                    default:
                        TweenMax.to($('#tile-container'), 0, {
                            opacity: 0
                        });
                        TweenMax.to($('#grey-bg'), 1, {
                            opacity: 0.1
                        });
                        TweenMax.to($('#container-bg'), 1, {
                            backgroundColor: 'rgba(0, 0, 0, 0)'
                        });
                        break;
                    }

                }
                return result;
            };

            $scope.convertToClouds = function (clouds) {
                return Math.round(clouds);
            };

            $scope.convertToDay = function (dt) {
                return new Date(dt * 1000);
            };

            $scope.convertToDate = function (dt) {
                return new Date(dt * 1000);
            };

            /*currentCity = document.forms['search-wrapper'].search.value;*/

            /*$scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=a3cfa68a6be81069730c43c604e7a827', {
                callback: 'JSON_CALLBACK'
            }, {
                get: {
                    method: 'JSONP'
                }
            });*/

        });

        /*$scope.$watch(currentRows, function () {

            switch (true) {
            case rowAmount === 2:
                window.location.hash = '#/2';
                $scope.weatherResult = $scope.weatherAPI.get({
                    q: $scope.city,
                    cnt: 2
                });
                break;
            case rowAmount === 5:
                window.location.hash = '#/5';
                $scope.weatherResult = $scope.weatherAPI.get({
                    q: $scope.city,
                    cnt: 5
                });
                break;
            case rowAmount === 7:
                window.location.hash = '#/7';
                $scope.weatherResult = $scope.weatherAPI.get({
                    q: $scope.city,
                    cnt: 7
                });
                break;
            }

        });*/

}]);