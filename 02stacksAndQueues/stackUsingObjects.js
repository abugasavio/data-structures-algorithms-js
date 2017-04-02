function Stack() {
  this.storage = {};
}

Stack.prototype.push = function (val) {
  this.storage[this.count()] = val;
};

Stack.prototype.pop = function () {
  const poppedItem = this.storage[this.count() - 1];
  delete this.storage[this.count()];
  return poppedItem;
};

Stack.prototype.peek = function () {
  const key = this.count() - 1;
  return this.storage[key.toString()];
};

Stack.prototype.count = function () {
  return Object.keys(this.storage).length;
};

module.exports = Stack;

const myMeals = new Stack();
myMeals.push('Nyama');
myMeals.push('Githeri');
console.log(myMeals);
console.log(myMeals.count());
console.log(myMeals.peek());


