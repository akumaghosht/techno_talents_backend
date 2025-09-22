const express=require("express")
const router=express.Router()
const {get_coachings,get_jee_coaching,get_neet_coachings,get_cat_coachings,get_cuet_coachings,get_upsc_coachings,get_gre_gmat_coachings}=require("../controller/coaching_controls")
router.get("/",get_coachings)
router.get("/iit_jee",get_jee_coaching)
router.get("/neet",get_neet_coachings)
router.get("/cat",get_cat_coachings)
router.get("/cuet",get_cuet_coachings)
router.get("/upsc",get_upsc_coachings)
router.get("/gre_gmat",get_gre_gmat_coachings)

module.exports=router