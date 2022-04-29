const express = require("express");
const bookModel = require("../models/book");
const app = express();

//GET
app.get("/books", async (request, response) => {
  const books = await bookModel.find({});

  try {
    response.send(books);
  } catch (error) {
    response.status(500).send(error);
  }
});

//Create Route
app.post("/books", async (request, response) => {
  const book = new bookModel(request.body);

  try {
    await book.save()
    response.send(book);
  } catch (error) {
    response.status(500).send(error);
  }
})

//Update Route
app.patch("/books/:id", async (request, response) => {
  try {
    await bookModel.findByIdAndUpdate(request.params.id, request.body);
    await bookModel.save();
    response.send(book);
  } catch (error) {
    response.status(500).send(error);
  }
});

//Delete Route
app.delete("/books/:id", async (request, response) => {
  try {
    const book = await bookModel.findByIdAndDelete(request.params.id);

    if (!book) response.status(404).send("No item found")
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
})


module.exports = app;
