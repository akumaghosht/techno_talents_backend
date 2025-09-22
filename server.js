const express = require("express")
const fs = require("fs")
const app = express()
const PORT = 8000
const connectdb=require("./config/connectionDB")
connectdb()

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
