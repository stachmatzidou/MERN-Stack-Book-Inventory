const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title : String,
    author : String,
    pages: Number,
    isRead : Boolean,
});

const Book = mongoose.model("book", BookSchema);

module.exports = Book;