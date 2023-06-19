const express=require("express")
const getAllCourses=require( "../Controllers/courseController.js")

const router=express.Router()
router.route("/courses").get(getAllCourses)

module.exports=router