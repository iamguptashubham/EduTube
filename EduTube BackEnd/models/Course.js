const mongoose=require("mongoose")

const courseSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"please enter your course title"],
        minLength:[4,"Title must be at least 4 characters"],
        maxLength:[18,"Title must be at most 18 characters"]
    },
    lectures:[
        {
            title:{
                type:String,
                required:[true,"please enter your course title"],
            },
            description:
            {
                type:String,
                required:[true,"please enter your course description"],
                minLength:[20,"Title must be at least 20 characters"]
            },
            video:{
                public_id:{
                    type:String,
                    required:true
                },
                url:{
                    type:String,
                    required:true
                }
        
            },
            poster:{
                public_id:{
                    type:String,
                    required:true
                },
                url:{
                    type:String,
                    required:true
                }
        
            },
            views:{
                type:Number,
                default:0
            },
            numOfVideos:{
                type:Number,
                default:0
            },
            category:{
                type:String,
                required:true
            },
            createdBy:{
                type:String,
                required:[true,"Enter course creator name"]
            },
            createdAt:{
                type:Date,
                default:Date.now
            }
        }
    ]
})

const Course=mongoose.model("Course",courseSchema)
module.exports=Course``