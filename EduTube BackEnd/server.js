const app=require("./app")
const User=require("./models/User")
const Course=require("./models/Course")

const PORT=process.env.PORT
app.listen(PORT,()=>
{
    console.log("server is listening at "+PORT)
})