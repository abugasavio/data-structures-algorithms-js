/* globals describe, it */

const Stack = require('../stackUsingObjects');
const expect = require('chai').expect;

describe('Stack', () => {
  const myMeals = new Stack();
  describe('push', () => {
    it('should add item to the stack', () => {
      myMeals.push('Githeri');
      expect(myMeals.count()).to.eql(1);
      expect(myMeals.storage).to.have.deep.property('0');
    });
  });

  describe('pop', () => {
    it('shoud return the popped item', () => {
      myMeals.push('Githeri');
      expect(myMeals.pop()).to.have.deep.property('0');
    });
  });

  describe('peek', () => {
    it('should return the last item but not pop it', () => {
      const myLunch = new Stack();
      myLunch.push('Pizza');
      myLunch.push('Chapati');
      expect(myLunch).to.have.property('storage');
      expect(myLunch.storage).to.have.all.keys(['0', '1']);
      expect(myLunch.peek()).to.eq('Chapati');
      expect(myLunch.storage).to.have.all.keys(['0', '1']);
    });
  });

  describe('count', () => {
    it('shoud return the size of the stack', () => {
      const myBooks = new Stack();
      myBooks.push('Professional JavaScript by Nicholas Zakas');
      myBooks.push('You Don\'t know JS by Kyle Simpson');
      myBooks.push('Learning JavaScript Design Patterns by Addy Osmani');
      expect(myBooks.storage).to.have.all.keys(['0', '1', '2']);
      expect(myBooks.count()).to.eq(3);
    });
  });
});
