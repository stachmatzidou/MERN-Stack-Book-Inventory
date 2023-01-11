const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title : String,
    author : String,
    pages: Number,
    isRead : Boolean,
    description: String
});

const Book = mongoose.model("book", BookSchema);

module.exports = Book;