const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { addBook, getAllBooks, getSingleBookByTitle } = require("./controllers");

bookRouter.post("/books/addBook", addBook);

// get all books

bookRouter.get("/books/getAllBooks", getAllBooks);

// update book author

// delete a single book by title

// get a single book by title

bookRouter.get("/books/getSingleBookByTitle/:title", getSingleBookByTitle);

module.exports = bookRouter;