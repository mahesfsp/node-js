const express = require("express");
const bookRouter = express.Router();
const BookController = require("./../controllers/BookController");
const authMiddleware = require("./../middleware/auth");

bookRouter
  .use(authMiddleware)
  .route("/book")
  .get(BookController.index)
  .post(BookController.store);

bookRouter
  .route("/book/:id")
  .get(BookController.getSingleBook)
  .patch(BookController.update)
  //res.send(`This book id id ${req.params.id} to update`)
  .delete(BookController.delete);
module.exports = bookRouter;
