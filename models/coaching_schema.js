const mongoose = require("mongoose")
const coaching_schema = new mongoose.Schema({
    coaching_name: String,
    coaching_description: String,
    coaching_category: [String],
    unique_id: String,
    offline_locations: [String],
    coaching_image:[String]

})

module.exports = mongoose.model("institute_schema",coaching_schema)