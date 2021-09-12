const mongoose = require('mongoose');

const cardsSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

module.exports = mongoose.model("myCards", cardsSchema);