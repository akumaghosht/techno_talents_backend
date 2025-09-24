const express=require("express")
const router=express.Router()
const {get_hostels,get_hostel}=require("../controller/hostel_controls")
router.get("/",get_hostels)
router.get("/:id",get_hostel)
module.exports=router