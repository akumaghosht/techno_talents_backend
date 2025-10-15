const Entertainments=require("../models/entertainment_schema")
const get_fests=async(req,res)=>{
    const fest_details=await Entertainments.find({category:{$eq:"fest"}})
    res.json(fest_details)
}
const get_concerts=async(req,res)=>{
    const concert_details=await Entertainments.find({category:{$eq:"concert"}})
    res.json(concert_details)
}
const get_otts=async(req,res)=>{
    const ott_details=await Entertainments.find({category:{$eq:"ott"}})
    res.json(ott_details)
}
const get_gyms=async(req,res)=>{
    const gym_details=await Entertainments.find({category:{$eq:"gym"}})
    res.json(gym_details)
}
const get_clubs=async(req,res)=>{
    const club_details=await Entertainments.find({category:{$eq:"club"}})
    res.json(club_details)
}
const get_meetups=async(req,res)=>{
    const meetup_details=await Entertainments.find({category:{$eq:"meetup"}})
    res.json(meetup_details)
}
const get_workshops=async(req,res)=>{
    const workshop_details=await Entertainments.find({category:{$eq:"workshop"}})
    res.json(workshop_details)
}
const get_hackathons=async(req,res)=>{
    const hackathon_details=await Entertainments.find({category:{$eq:"hackathon"}})
    res.json(hackathon_details)
}
module.exports={get_fests,get_concerts,get_otts,get_gyms,get_clubs,get_meetups,get_workshops,get_hackathons}