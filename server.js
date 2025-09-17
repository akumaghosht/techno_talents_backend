const express = require("express")
const fs = require("fs")
const app = express()
const PORT = 8000
const mongoose = require("mongoose")
const institutes = require("./institute_schema")

mongoose.connect("mongodb://localhost:27017/institute")
app.use(express.urlencoded({ extended: false }))
//get requtest for iit-jee institutes
app.get("/institutes/iit_jee",async(req,res)=>{
  const institute_details = await institutes.find({institute_category:"IIT-JEE"})
  res.send(institute_details)
})
//get request for neet institutes
app.get("/institutes/neet",async(req,res)=>{
  const institute_details = await institutes.find({institute_category:"NEET"})
  res.send(institute_details)
})
//get requtest for cat institutes
app.get("/institutes/cat",async(req,res)=>{
  const institute_details = await institutes.find({institute_category:"CAT"})
  res.send(institute_details)
})
//get requtest for cuet institutes
app.get("/institutes/cuet",async(req,res)=>{
  const institute_details = await institutes.find({institute_category:"CUET"})
  res.send(institute_details)
})

app.get("/institutes/upsc",async(req,res)=>{
  const institute_details = await institutes.find({institute_category:"UPSC"})
  res.send(institute_details)
})

app.get("/institutes/gre_gmat",async(req,res)=>{
  const institute_details = await institutes.find({institute_category:"GRE/GMAT"})
  res.send(institute_details)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
