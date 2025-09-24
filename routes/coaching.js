const express=require("express")
const router=express.Router()
const {get_coachings,get_spec_coaching,get_coaching}=require("../controller/coaching_controls")
router.get("/",get_coachings)
router.get("/:specify",get_spec_coaching)
router.get("/:specify/:id",get_coaching)
module.exports=router