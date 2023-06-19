const express=require("express")
const app=express()
const dotenv =require("dotenv")
const course=require("./routes/courseRoutes.js")
const user=require("./routes/userRoutes.js")

dotenv.config({
    path:"./config/config.env"
})

app.use("/api/v1",course);
app.use("/api/v1",user);
module.exports=app