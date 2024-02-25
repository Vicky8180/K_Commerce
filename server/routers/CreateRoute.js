const express= require("express")
const router=express.Router();
const userModel = require("../models/userModel")
// const setCookies = require("../Authentication/setCookies");

router.post('/register',async(req,res)=>{

    try {
    //   console.log(req)
     const email= req.body.email;
    //  console.log(2)
     const userExists=  await userModel.findOne({email:email});
    //  console.log(3)
     if(userExists){
        return res.json({data:"User Exists", success:true});
     }else {

        const password=req.body.password;
        let name=req.body.name;
        console.log(req.body.name )
     name= name.charAt(0).toUpperCase() + name.slice(1)
    const newUser= {name,email,password};
 
        const data= await userModel.create(newUser);  
        console.log(data ) 
        return res.status(200).json({data:data,
            messages:"data fetched successfully",
        status:true})
     }


    } catch (error) {
     
        return res.json({status:false,message:"User Exists or invalid!"});

    }

})

module.exports=router;