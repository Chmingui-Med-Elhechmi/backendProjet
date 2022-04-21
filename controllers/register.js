
const User = require("../Models/userSchema")
const bcrypt = require('bcryptjs')
const  jwt  = require('jsonwebtoken')


const register = async(req,res)=>{
    try{
        const { FirstName,Email,Password, CIN, LastName, Age, PhoneNumber, role } = req.body
        const existuser = await User.findOne({email:Email})
        if (existuser) res.status(400).json({message:"you have an account already registered"})
        else{
            const cryptPassword = await bcrypt.hash(Password,12)
        
            const newuser = new User({ FirstName : FirstName , Email : Email ,Password:cryptPassword, CIN : CIN ,LastName : LastName ,  
                Age : Age ,PhoneNumber : PhoneNumber, role : role
                    } )
            const user = await newuser.save();
            
            const token =jwt.sign({Email,id:user._id},'workshop',{expiresIn:"2h"})
            console.log("hello")
            res.status(200).json({user,token});
        }
    }catch{
        console.log(req.body)
        res.status(500).json({message:"somthing went wrong"})
    }
}
module.exports={register}