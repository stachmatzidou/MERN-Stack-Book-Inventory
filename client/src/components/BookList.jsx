import React from "react";
import "./BookList.css";
import Card from "./Card";

const BookList = ({ bookList, updateStatus, removeBook }) => {
    const list = bookList.map((book) => {
        return (
            <Card
                book={book}
                key={book._id}
                updateStatus={updateStatus}
                removeBook={removeBook}
            />
        );
    }).reverse();
    return <main className="bookList">{list}</main>;
};

export default BookList;
