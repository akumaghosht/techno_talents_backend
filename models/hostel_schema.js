const mongoose=require("mongoose")
const hostel_schema = new mongoose.Schema({
    hostel_name: String,
    hostel_description: String,
    hostel_address: String,
    hostel_image:[String]

})
module.exports=mongoose.model("hostel_schema",hostel_schema)