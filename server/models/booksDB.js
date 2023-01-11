const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

module.exports = mongoose.connect("mongodb+srv://stachmatzidou:6937332384@cluster0.jgd6vra.mongodb.net/bookInventory?retryWrites=true&w=majority", error => {
    if (error) console.log("Error in database connection");
    console.log("MongoDb Connection Succeeded...");
});