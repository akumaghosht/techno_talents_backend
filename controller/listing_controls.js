const Coachings=require("../models/coaching_schema")
const Hostels=require("../models/hostel_schema")
list_partner=async(req,res)=>{
    const type=req.params.partnertype
    if(type=="coaching"){
        const newcoaching=req.body
        if(newcoaching.coaching_name==null || newcoaching.coaching_description==null || newcoaching.coaching_category==null){
            res.json({message:"required fields are necessary"})
        }
        const addcoaching= await Coachings.create(newcoaching)
        res.json({message:"Coaching listed"})
    }
    else if(type=="hostel"){
        const newhostel=req.body
        if(newhostel.hostel_name==null || newhostel.hostel_description==null || newhostel.address==null){
            res.json({message:"required fields are necessary"})
        }
        const addcoaching= await Hostels.create(newhostel)
        res.json({message:"Coaching listed"})
    }
    else{
        res.json({message:"no category found"})
    }
}
module.exports=list_partner