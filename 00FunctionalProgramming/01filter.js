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

