import React, { useState, useRef } from "react";
import axios from "axios";
import "./AddBook.css";

const AddBook = ({ addBook }) => {
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookPages, setBookPages] = useState("");
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            title: bookTitle.trim(),
            author: bookAuthor.trim(),
            pages: bookPages,
            isRead: false,
        };
        axios
            .post("http://localhost:8000/books", newBook)
            .then((res) => {
                setBookTitle("");
                setBookAuthor("");
                setBookPages("");
                addBook(res.data);
            })
            .catch((error) => console.log(error));
    };

    return (
        <header className="addBook">
            <h1 className="title">My Book Inventory</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label className="label" htmlFor="title">
                    Title
                    <input
                        maxLength={50}
                        autoFocus
                        ref={inputRef}
                        type="text"
                        id="title"
                        placeholder="Add title"
                        required
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                    />
                </label>

                <label className="label" htmlFor="author">
                    Author
                    <input
                        maxLength={50}
                        type="text"
                        id="author"
                        placeholder="Add author"
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
                        placeholder="Add pages"
                        required
                        value={bookPages}
                        onChange={(e) => setBookPages(e.target.value)}
                    />
                </label>
                <button type="submit" onClick={() => inputRef.current.focus()}>Add Book</button>
            </form>
        </header>
    );
};

export default AddBook;
