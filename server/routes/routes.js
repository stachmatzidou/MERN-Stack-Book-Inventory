const express = require("express");
const { getAllBooks, addBook, updateBook, deleteBook } = require("../controllers/controllers");
const router = express.Router();

router.get("/", getAllBooks);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

// router.get("/", (req, res) => {
//     Book.find((error, books) => {
//         if (error) console.log(error);
//         res.json(books);
//     });
// });

// router.get("/:id", (req, res) => {
//     Book.findById(req.params.id, (error, book) => {
//         if (error) console.log(error);
//         res.json(book);
//     });
// });

// router.post("/", (req, res) => {
//     const book = new Book(req.body);
//     book.save((error, doc) => {
//         if (error) console.log(error);
//         res.json(doc);
//     });
// });

// router.put("/:id", (req, res) => {
//     Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, doc) => {
//         if (error) console.log(error);
//         res.json(doc);
//     });
// });

// router.delete("/:id", (req, res) => {
//     Book.findByIdAndDelete(req.params.id, (error, doc) => {
//         if (error) {
//             res.status(404).json("No such book exists");
//             console.log(error);
//         }
//         res.json(doc);
//     });
// });

module.exports = router;
