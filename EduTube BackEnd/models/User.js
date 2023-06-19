const mongoose=require("mongoose")
const validator=require("validator")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"]
    },
    email:{
        type:String,
        required:[true,"please enter your email"],
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:String,
        required:[true,"please enter your password"],
        minLength:[6,"password must be at least 6 characters"],
        select:false
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
        
    },
    subscription:{
        id:String,
        status:String
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }

    },
    playlist:[
        {
            course:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Course"
            },
            postser:String
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now,
    
    },
    ResetPasswordToken:String,
    ResentPasswordExpire:String
})

const User=mongoose.model("User",userSchema)
module.exports=User