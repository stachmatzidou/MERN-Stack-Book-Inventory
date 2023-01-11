const express = require("express");
const router = require("./routes/routes");
const cors = require("cors");
const app = express();
require("./models/booksDB");

app.use(express.json());
app.use(cors());
app.use("/books", router);

app.listen("8000", error => {
    if (error) console.log(error);
    console.log("Server is running on port 8000.");
});