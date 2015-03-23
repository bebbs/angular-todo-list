describe('Todo List', function() {
  var todoListItems;

  beforeEach(function() {
    browser.get('/');
    todoListItems = element.all(by.repeater('item in list'));
  });

  it('Displays the list of items', function() {
    expect(todoListItems.count()).toEqual(3);
  });
});