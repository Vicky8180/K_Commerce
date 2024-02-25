const express= require("express")
const router=express.Router();
const userModel = require("../models/userModel")
// const setCookies = require("../Authentication/setCookies");


router.post('/login',async(req,res)=>{


    try {
           
        const email=req.body.email;
        const password=req.body.password;

        
        const userExists= await  userModel.findOne({$and: [{ password }, { email }] })
        return res.status(200).json({
            "data":userExists,
            "message":"successfully logged in",
             status:true
        })
        
    } catch (error) {
        
        return res.json({
            data:"User Does Not exists",
            status:false,
        
          })
    }
})

module.exports=router;