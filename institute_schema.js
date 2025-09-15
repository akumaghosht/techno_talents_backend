const mongoose = require("mongoose")
const ins_scheme = new mongoose.Schema({
    institute_name: String,
    institute_description: String,
    institute_category: String,
    institute_id: String
})

module.exports = mongoose.model("institute_schema",ins_scheme)