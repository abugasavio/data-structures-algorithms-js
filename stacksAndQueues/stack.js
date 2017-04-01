const Stack = function () {
  this.storage = '';
};

Stack.prototype.push = function (val) {
  const storage = this.storage;
  if (storage) {
    this.storage = storage.concat(`,${val}`);
  } else {
    this.storage = storage.concat(val);
  }
};

Stack.prototype.pop = function () {
  const items = this.items();

  if (this.size) {
    this.storage = items.splice(0, items.length - 1).join(',');
    return items[items.length - 1];
  }
  return 0;
};

Stack.prototype.items = function () {
  return this.storage.split(',').map(item => item.trim());
};

Stack.prototype.size = function () {
  return this.storage.split(',').length;
};

const myWeeklyMenu = new Stack();

myWeeklyMenu.push('RedBeans');
myWeeklyMenu.push('Tacco');
myWeeklyMenu.push('Pizza');
console.log(myWeeklyMenu.pop());


