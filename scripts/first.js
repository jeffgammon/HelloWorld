var myApp = angular.module('myApp', []);
myApp.factory('Data', function () {
    return { name: 'test' };
});

myApp.directive('superman', function () {
    return {
        restrict: 'E',
        template: '<div>This is superman...saving the day!</div>'
    };
});

myApp.directive('flash', function () {
    return {
        restrict: 'A',
        link: function () {
            alert('flash is working');
        }
    };
});

myApp.directive('enter', function () {
    return {
        restrict: 'A',
        link: function (scope, el, attrs) {
            el.bind('mouseenter', function () {
                console && console.log('mouse entering');
            });
        }
    };
});

myApp.directive('leave', function () {
    return function (scope, el, attrs) {
        el.bind('mouseleave', function () {
            console && console.log('mouse leaving');
        });
    };
});

function FirstCtrl($window, $scope, Data) {
    $scope.data = Data;

    $scope.reversed = function (message) {
        console.log('in reversed');
        return message.split('').reverse().join('');
    };

    $scope.onPushMe = function () {
        $window.alert('push me clicked');
    };
}