const mongoose = require("mongoose")
const ins_scheme = new mongoose.Schema({
    institute_name: String,
    institute_description: String,
    institute_category: [String],
    unique_id: String,
    offline_locations: [String],
    institute_image:{
        type: String,
        required: false
    }

})

module.exports = mongoose.model("institute_schema",ins_scheme)