// DIRECTIVES

weatherApp.directive('weatherReport', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            dayDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            convertToDay: "&",
            dateFormat: "@",
            dayFormat: "@",
            cloudFormat: "&"
        },
        compile: function (elem, attr) {
            var self = this;
            var delay = 0;
            console.log('initial delay: ' + delay);
            return {
                post: function (scope, elems, attr) {
                    TweenMax.from(elems, 1, {
                        opacity: 0
                    }, 1);
                    console.log('incremented delay: ' + delay);
                }
            }
        }
    }
});