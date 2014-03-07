var app = angular.module('app', ['ngResource']);
app.factory('Cardbox', ['$resource', function ($resource) {
    return $resource('/data/carbox.json');
}]);
app.controller('CardBoxCtrl', ['$scope', 'Cardbox',
function ($scope, Cardbox) {
    var boxes = Cardbox.query(function () {
        $scope.Cardboxes = boxes;
    });
    $scope.OpenMoreBox = function (boxId) {
        alert(boxId);
    }
}]);