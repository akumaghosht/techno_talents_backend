const express=require("express")
const router=express.Router()
const list_partner=require("../controller/listing_controls")
router.post("/:partnertype",list_partner)
module.exports=router