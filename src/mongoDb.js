const mongoose = require("mongoose");

async function connectToMongoDb() {
    await mongoose.connect("mongodb://localhost:27017/discussion-board-db");
}

module.exports = connectToMongoDb;