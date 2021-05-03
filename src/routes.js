const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
} = require("./handler.js");
const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdHandler,
  },
  // TODO: create route for edit book
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookByIdHandler,
  },
  // TODO: create route for delete book
];

module.exports = routes;
