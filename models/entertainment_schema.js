const mongoose = require("mongoose")
const entertainment_schema = new mongoose.Schema({
    title:String,
    description:String,
    category:String,
    images:[String],
    price:Number,
    organizer:String
})
module.exports = mongoose.model("coaching_schema",entertainment_schema)