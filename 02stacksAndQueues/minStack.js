


function Stack(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.count = 0;
  this.minStack = new Stack();
}

Stack.prototype.push = function push(val) {
  if (this.minStack.peek() < val) {
    this.minStack.push(this.minStack.peek());
  } else {
    this.minStack.push(val);
  }
  this.storage[this.count += 1] = val;
  return this.count;
};

Stack.prototype.pop = function pop() {
  this.minStack.pop();
  const val = this.storage[this.count];
  delete this.storage[this.count];
  this.count -= 1;
  return val;
};


Stack.prototype.peek = function peek() {
  return this.storage[this.count - 1];
};

Stack.prototype.count = function count() {
  return this.count;
};

const myLunch = new Stack();
myLunch.push('Beans');
console.assert(myLunch.storage, 'storage');
