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

  it('Returns items in the correct order', function() {
    expect(scope.list).toEqual(['test', 'execute', 'refactor']);
  });
});