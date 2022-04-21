const Post = require("../Models/coachSchema")
exports.post = async(req,res)=>{
    try{
        const{Name,speciality}=req.body
        const newpost = new Post({Name,speciality})
        const post = await newpost.save();
        res.status(200).json({post})
    }
    catch{
        res.status(500).json({msg:`something went wrong ${error}`})
    }
}