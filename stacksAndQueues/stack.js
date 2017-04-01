const Stack = function () {
  this.storage = '';
};

Stack.prototype.push = function (val) {
  if (this.storage) {
    this.storage = this.storage.concat(`,${val}`);
  } else {
    this.storage = this.storage.concat(val);
  }
};

Stack.prototype.pop = function () {
  if (this.size) {
    this.storage = this.items().splice(0, this.items().length - 1).join(',');
    return this.items()[this.items().length - 1];
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


