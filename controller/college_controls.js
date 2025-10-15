const Colleges = require("../models/hostel_schema")

const get_colleges=async(req,res)=>{
    const colleges_details=await Colleges.find()
    res.json(colleges_details)
}
const get_college=async(req,res)=>{
    const college_detail=await Colleges.findById(req.params.id)
    res.json(college_detail)
}
const get_indian_collegees=async(req,res)=>{
    const college_details=await Colleges.find({country_of_origin:{$eq: "India"}})
    res.json(college_details)
}
const get_global_collegees=async(req,res)=>{
    const college_details=await Colleges.find({country_of_origin:{$ne: "India"}})
    res.json(college_details)
}
module.exports={get_colleges,get_college,get_indian_collegees,get_global_collegees}
