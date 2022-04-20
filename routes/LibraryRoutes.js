const express = require("express")
const app = express()
const bookModel = require("../models/book")

//Get All Books
app.get("/books", async (req, res) => {
  const books = await bookModel.find({});
  try {
    res.send(books)
  } catch (error) {
    res.status(500).send(error)
  }
})
  
module.exports = app
