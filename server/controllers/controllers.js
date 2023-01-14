const Book = require("../models/models");

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.log(error);
    }
};

const addBook = async (req, res) => {
    try {
        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            pages: req.body.pages,
            isRead: false,
        });
        await newBook.save();
        res.send(newBook);
    } catch (error) {
        res.send(error);
    }
};

const updateBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        book.isRead = req.body.isRead;
        await book.save();
        res.json(book);
    } catch (error) {
        console.log(error);
    };
};

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.json(book);
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook,
};
