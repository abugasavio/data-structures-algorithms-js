function Stack(capacity) {
  this.capacity = capacity || Infinity;
  this.count = 0;
  this.storage = {};
}

Stack.prototype.push = function (val) {
  if (this.count < this.capacity) {
    this.count += 1;
    this.storage[this.count] = val;
    return this.count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

Stack.prototype.pop = function () {
  const val = this.storage[this.count];
  delete this.storage[this.count];
  this.count -= 1;
  return val;
};

Stack.prototype.peek = function () {
  return this.storage[this.count];
};

Stack.prototype.size = function () {
  return this.count;
};

const myStack = new Stack(4);
console.log(myStack.push(1), 'should be 1');
console.log(myStack.push(2), 'should be 2');
console.log(myStack.push(4), 'should be 3');
console.log(myStack.push(7), 'should be 4');
console.log(myStack.push(5), 'should be Max capacity already reached. Remove element before adding a new one.');
console.log(myStack.size(), 'should be 4');


module.exports = Stack;
