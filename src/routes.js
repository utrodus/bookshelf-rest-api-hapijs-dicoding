const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
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
  // TODO: create route for edit book
  // TODO: create route for delete book
];

module.exports = routes;
