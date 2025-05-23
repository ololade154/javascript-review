const data = [
  {
    id: 1,
    title: 'first book',
    publicationDate: '10-08-2002',
  },
  {
    id: 2,
    title: 'second book',
    publicationDate: '10-08-2003',
  },
  {
    id: 3,
    title: 'Third book',
    publicationDate: '10-08-2004',
  },
];
function getBooks() {
  return data;
}
function getBook(id) {
  return data.find(function (book) {
    return book.id == id;
  });
}
console.log(getBook(3));
const books = getBooks();
books;
const bookTitle = getBook(2);
const { title, publicationDate } = bookTitle;
console.log(title, publicationDate);
