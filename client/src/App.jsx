import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import Footer from "./components/Footer";

function App() {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/books/")
            .then((res) => {
                setBookList(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const addBook = (newBook) => {
        setBookList([...bookList, newBook]);
    };

    const updateStatus = (book) => {
        const newList = [...bookList];
        newList.forEach(item => {
            if (item._id === book._id) {
                item.isRead = book.isRead
            }
        })
        setBookList(newList);
    };

    const removeBook = (book) => {
        const newList = bookList.filter(item => item._id !== book._id);
        setBookList(newList);
    };

    return (
        <div className="App">
            <h1 className="title">My Book Inventory</h1>
            <AddBook addBook={addBook} />
            <BookList
                bookList={bookList}
                updateStatus={updateStatus}
                removeBook={removeBook}
            />
            <Footer length={bookList.length}/>
        </div>
    );
}

export default App;
