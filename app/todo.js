angular.module('todo', [])
  .controller('TodoController', ['$scope', function($scope) {

    $scope.list = ['test', 'execute', 'refactor'];

    $scope.add = function(item) {
      $scope.list.push(item);
    };

    $scope.remove = function(item) {
      var index = $scope.list.indexOf(item);
      $scope.list.splice(index, 1)
    };

  }]);