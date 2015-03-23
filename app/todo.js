angular.module('todo', [])
  .controller('TodoController', ['$scope', function($scope) {
    $scope.list = [];
  }]);