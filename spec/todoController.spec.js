describe('TodoController', function() {
  beforeEach(module('todo'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('TodoController', {$scope: scope});
  }));

  it('Defines a list object', function() {
    expect(scope.list).toBeDefined();
  });
});