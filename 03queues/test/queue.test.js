const expect = require('chai').expect;
const Queue = require('../queue');

describe('Queue', () => {
  describe('constructor', () => {
    it('should return default items', () => {
      const myItems = new Queue();
      expect(myItems.storage).to.eql({});
    });
  });
});

