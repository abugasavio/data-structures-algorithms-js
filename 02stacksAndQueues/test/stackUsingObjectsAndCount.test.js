const Stack = require('./../stackUsingObjectsAndCount');
const expect = require('chai').expect;

describe('Stack', () => {
  describe('constructor', () => {
    const myTodo = new Stack();
    it('should contain intitial item values', () => {
      expect(myTodo.count).to.eq(0);
      expect(myTodo.storage).to.eql({});
    });
  });

  describe('queue', () => {
    const myTodos = new Stack();
    it('should add item to the stack', () => {
      myTodos.push('Call mum');
      expect(myTodos.storage).to.have.all.keys(['1']);
      expect(myTodos.storage).to.eql({ 1: 'Call mum' });
    });
  });

  describe('pop', () => {
    const myTodo = new Stack();
    myTodo.push('Learn JS');
    myTodo.push('Learn ReactJs');
    it('should remove the last item from stack', () => {
      const poppedVal = myTodo.pop();
      expect(poppedVal).to.eq('Learn ReactJs');
      expect(myTodo.count).to.eq(1);
    });
  });
});
