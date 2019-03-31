mainApp.directive('pages', function () {
    return {
        restrict: 'EA',
        templateUrl: 'partials/templates/page-container/index.html',
        replace: true,
        transclude: true
    }
});

mainApp.directive('loadScreen', function () {
    return {
        restrict: 'EA',
        templateUrl: 'partials/templates/load-screen/index.html',
        replace: true,
        transclude: true
    }
});

mainApp.directive('pageHeader', function () {
    return {
        restrict: 'EA',
        templateUrl: 'partials/templates/header/index.html',
        replace: true,
        transclude: true
    }
});

mainApp.directive('homePage', function () {
    return {
        restrict: 'EA',
        templateUrl: 'partials/templates/home/index.html',
        replace: true,
        transclude: true
    }
});

mainApp.directive('aboutPage', function () {
    return {
        restrict: 'EA',
        templateUrl: 'partials/templates/about/index.html',
        replace: true,
        transclude: true
    }
});

mainApp.directive('workPage', function () {
    return {
        restrict: 'EA',
        templateUrl: 'partials/templates/work/index.html',
        replace: true,
        transclude: true
    }
});

mainApp.directive('contactPage', function () {
    return {
        restrict: 'EA',
        templateUrl: 'partials/templates/contact/index.html',
        replace: true,
        transclude: true
    }
});