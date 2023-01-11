import React from "react";
import "./Card.css";
import axios from "axios";

const Card = ({ book, updateStatus, removeBook }) => {
    // console.log(book);

    const toggleStatus = () => {
        axios.put(`http://localhost:8000/books/${book._id}`, {
            _id: book._id,
            title: book.title,
            author: book.author,
            isRead: !book.isRead
        })
        .then(res => updateStatus(res.data))
        .catch(error => console.log(error));
    };

    const handleRemove = () => {
        axios.delete(`http://localhost:8000/books/${book._id}`)
        .then(res => removeBook(res.data))
        .catch(error => console.log(error));
    };

    return (
        <article className="card">
            <h1 className="bookTitle">{book.title}</h1>
            <p className="bookAuthor">{`by ${book.author}`}</p>
            <p className="bookPages">{`${book.pages} pages`}</p>
            <button
                className={book.isRead ? "read" : "notRead" }
                onClick={toggleStatus}
            >
                {book.isRead ? "Read" : "Not Read"}
            </button>
            <button className="remove" onClick={handleRemove}>Remove</button>
        </article>
    );
};

export default Card;
