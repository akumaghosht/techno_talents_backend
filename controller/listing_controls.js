const Coachings=require("../models/coaching_schema")
const Hostels=require("../models/hostel_schema")
const Colleges=require("../models/college_schema")
const Entertainments=require("../models/entertainment_schema")
list_partner=async(req,res)=>{
    const type=req.params.partnertype
    if(type=="coaching"){
        const newcoaching=req.body
        if(newcoaching.coaching_name==null || newcoaching.coaching_description==null || newcoaching.coaching_category==null){
            return res.json({message:"required fields are necessary"})
        }
        const addcoaching= await Coachings.create(newcoaching)
        res.json({message:"Coaching listed"})
    }
    else if(type=="hostel"){
        const newhostel=req.body
        if(newhostel.hostel_name==null || newhostel.hostel_description==null || newhostel.hostel_address==null){
            return res.json({message:"required fields are necessary"})
        }
        const addcoaching= await Hostels.create(newhostel)
        res.json({message:"Hostel listed"})
    }
    else if(type=="college"){
        const newcollege=req.body
        if(newcollege.college_name==null || newcollege.college_description==null || newcollege.estd_year==null || newcollege.degree_offered==null || newcollege.country_of_origin==null || newcollege.courses_offered==null){
            return res.json({message:"required fields are necessary"})
        }
        const addcoaching= await Colleges.create(newhostel)
        res.json({message:"College listed"})
    }
    else if(type=="entertainment"){
        const newentertainment=req.body
        if(newentertainment.title==null||newentertainment.description==null||newentertainment.category==null||newentertainment.organizer==null){
            return res.json({message:"required fields are necessary"})
        }
        const addentertainment= await Entertainments.create(newentertainment)
        res.json({message:"Entertainment listed"})
    }
    else{
        res.json({message:"no category found"})
    }
}
module.exports=list_partner