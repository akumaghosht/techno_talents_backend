const mongoose = require("mongoose")
const entertainment_schema = new mongoose.Schema({
    title:String,
    description:String,
    category:String,
    images:[String],
    price:Number,
    organizer:String
})
module.exports = mongoose.model("entertainment_schema",entertainment_schema)