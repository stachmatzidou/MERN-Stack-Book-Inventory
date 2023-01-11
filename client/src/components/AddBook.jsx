import React, { useState } from "react";
import axios from "axios";
import "./AddBook.css";

const AddBook = ({addBook}) => {
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookPages, setBookPages] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            title: bookTitle.trim(),
            author: bookAuthor.trim(),
            pages: bookPages,
            isRead: false
        };
        axios.post("http://localhost:8000/books", newBook)
        .then(res => {
            setBookTitle("");
            setBookAuthor("");
            setBookPages("");
            addBook(res.data);
        })
        .catch(error => console.log(error));
    };

    return (
        <div className="addBook">
            <form className="form" onSubmit={handleSubmit}>
                <label className="label" htmlFor="title">
                    Title
                    <input
                        type="text"
                        id="title"
                        placeholder="Add book title"
                        required
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                    />
                </label>

                <label className="label" htmlFor="author">
                    Author
                    <input
                        type="text"
                        id="author"
                        placeholder="Add book author"
                        required
                        value={bookAuthor}
                        onChange={(e) => setBookAuthor(e.target.value)}
                    />
                </label>

                <label className="label" htmlFor="pages">
                    Pages
                    <input
                        type="number"
                        id="pages"
                        placeholder="Add number of pages"
                        required
                        value={bookPages}
                        onChange={(e) => setBookPages(e.target.value)}
                    />
                </label>
                <button type="submit">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
