const mongoose= require("mongoose")
const dotenv=require("dotenv").config()
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const connectdb=async()=>{
    await mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING,clientOptions).then(()=>console.log("Mongoose is connected"))
    await mongoose.connection.db.admin().command({ ping: 1 })
}

module.exports=connectdb