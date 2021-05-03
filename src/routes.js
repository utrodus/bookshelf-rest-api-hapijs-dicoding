const { addBookHandler, getAllBooksHandler } = require("./handler.js");
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
  // TODO: create route for detail book
  
  // TODO: create route for edit book
  // TODO: create route for edit book
  // TODO: create route for delete book
];

module.exports = routes;
