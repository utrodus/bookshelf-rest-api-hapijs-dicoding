const { addBookHandler } = require("./handler.js");
const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  // TODO: create route for get all books
  // TODO: create route for detail book
  // TODO: create route for edit book
  // TODO: create route for edit book
  // TODO: create route for delete book
];

module.exports = routes;
