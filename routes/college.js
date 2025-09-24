const express=require("express")
const router=express.Router()
const {get_colleges,get_college,get_indian_collegees,get_global_collegees}=require("../controller/college_controls")
router.get("/",get_colleges)
router.get("/indian_colleges",get_indian_collegees)
router.get("/global_colleges",get_global_collegees)
router.get("/:id",get_college)


module.exports=router
