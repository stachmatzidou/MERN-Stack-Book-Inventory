const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

module.exports = mongoose.connect(process.env.MONGO_URI, error => {
    if (error) console.log("Error in database connection");
    console.log("MongoDb Connection Succeeded...");
});