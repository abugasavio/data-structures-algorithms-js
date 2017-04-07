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
  },
];

const isPython = function (book) {
  return book.langauge === 'Py';
};

const pythonBooks = books.filter(isPython);

console.log(pythonBooks);

