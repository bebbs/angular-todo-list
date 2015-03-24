describe('Todo List', function() {
  var todoListItems;

  beforeEach(function() {
    browser.get('/');
    todoListItems = element.all(by.repeater('item in list'));
  });

  it('Displays the list of items', function() {
    expect(todoListItems.count()).toBe(3);
  });

  it('Accepts a new item', function() {
    var newItem = element(by.model('item'));
    var addButton = element(by.css('[value="Add task"]'));

    newItem.sendKeys('repeat');
    addButton.click();

    expect(todoListItems.count()).toBe(4);
  });

  it('Deletes an item', function() {
    var deleteItem = element.all(by.css('.item-delete')).last();
    deleteItem.click();

    expect(todoListItems.count()).toBe(2);
  });
});