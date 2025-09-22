const Coachings = require("../models/coaching_schema")

const get_coachings=async(req,res)=>{
    const coaching_details=await Coachings.find()
    res.json(coaching_details)
}
const get_jee_coaching=async(req,res)=>{
    const iit_coachings=await Coachings.find({coaching_category:"IIT-JEE"})
    res.json(iit_coachings)
}
const get_neet_coachings=async(req,res)=>{
    const neet_coachings=await Coachings.find({coaching_category:"NEET"})
    res.json(neet_coachings)
}
const get_cat_coachings=async(req,res)=>{
    const cat_coachings=await Coachings.find({coaching_category:"CAT"})
    res.json(cat_coachings)
}
const get_cuet_coachings=async(req,res)=>{
    const cuet_coachings=await Coachings.find({coaching_category:"CUET"})
    res.json(cuet_coachings)
}
const get_upsc_coachings=async(req,res)=>{
    const upsc_coachings=await Coachings.find({coaching_category:"UPSC"})
    res.json(upsc_coachings)
}
const get_gre_gmat_coachings=async(req,res)=>{
    const gre_gmat_coachings=await Coachings.find({coaching_category:"GRE/GMAT"})
    res.json(gre_gmat_coachings)
}
module.exports={get_coachings,get_jee_coaching,get_neet_coachings,get_cat_coachings,get_cuet_coachings,get_upsc_coachings,get_gre_gmat_coachings}
