const Coachings = require("../models/coaching_schema")

const get_coachings=async(req,res)=>{
    const coaching_details=await Coachings.find()
    res.json(coaching_details)
}
const get_spec_coaching=async(req,res)=>{
    const category=req.params.specify
    const spec_coachings=await Coachings.find({coaching_category:category})
    res.json(spec_coachings)
}
const get_coaching=async(req,res)=>{
    const spec_coaching=await Coachings.findById(req.params.id)
    res.json(spec_coaching)
}
module.exports={get_coachings,get_spec_coaching,get_coaching}
