// Using head and tail;

function Queue(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.head = 0;
  this.tail = 0;
}

Queue.prototype.enqueue = function (value) {
  this.tail += 1;
  this.storage[this.tail] = value;
};

Queue.prototype.dequeue = function () {
  const dequeuedItem = this.storage[this.head];
  this.head += 1;
  return dequeuedItem;
};

Queue.prototype.peek = function () {
  return this.storage[this.tail];
};

Queue.prototype.count = function () {
  return this.tail - this.head;
};

module.exports = Queue;
