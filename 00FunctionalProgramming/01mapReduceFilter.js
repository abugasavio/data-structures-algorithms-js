const books = [
  {
    name: 'Learn JS',
    langauge: 'JS',
  }, {
    name: 'YDKJS',
    langauge: 'JS',
  }, {
    name: 'Advanced OOP in Python',
    langauge: 'Py',
  }, {
    name: 'Introduction to C++',
    language: 'C++',
  },
];
/*
* Filter
*/

const isPython = function (book) {
  return book.langauge === 'Py';
};

const pythonBooks = books.filter(isPython);

console.log(pythonBooks);

/*
* Map
*/
console.log('***** Using Map ********');
const bookNames = [];

for (let i = 0, len = books.length; i < len; i += 1) {
  bookNames.push(books[i].name);
}

const bookNamesMap = books.map(book => `${book.name} is a ${book.langauge} book`);

console.log(bookNames);
console.log(bookNamesMap);


console.log('**** End using Map ******');

console.log('**** Using Reduce ******');

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

let totalAmount = 0;

for (let index = 0; index < orders.length; index += 1) {
  totalAmount += orders[index].amount;
}

const totalAmountReduce = orders.reduce((sum, order) => sum + order.amount
, 0);

console.log(totalAmount);
console.log(totalAmountReduce);
