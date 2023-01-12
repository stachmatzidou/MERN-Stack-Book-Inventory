const express = require("express");
const router = require("./routes/routes");
require("dotenv").config();
const cors = require("cors");
const app = express();
require("./models/booksDB");
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use("/books", router);

app.listen(port, error => {
    if (error) console.log(error);
    console.log(`Server is running on port ${port}.`);
});