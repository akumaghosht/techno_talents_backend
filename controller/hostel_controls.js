const Hostels = require("../models/hostel_schema")

const get_hostels=async(req,res)=>{
    const hostels_details=await Hostels.find()
    res.json(hostels_details)
}
const get_hostel=async(req,res)=>{
    const hostel_detail=await Hostels.findById(req.params.id)
    res.json(hostel_detail)
}
module.exports={get_hostels,get_hostel}
