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

  describe('Adding an item', function() {
    beforeEach(function() {
      scope.add('repeat');
    });

    it('Appends item to the end of the list', function() {
      var lastItemIndex = scope.list.length - 1;
      expect(scope.list[lastItemIndex]).toEqual('repeat');
    });
  });

  describe('Removing an item', function() {
    beforeEach(function() {
      scope.add('repeat');
      scope.remove('repeat');
    });

    it('Removes a specific item', function() {
      var lastItemIndex = scope.list.length - 1;
      expect(scope.list[lastItemIndex]).toEqual('refactor');
    });
  });
});