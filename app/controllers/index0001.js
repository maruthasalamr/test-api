//Imports
var userModel = require('../models/user.model.schema');


module.exports ={
    
    postAddusers : async (req,res,next) =>{

         const {username,email,dob} = req.body;

         console.log('req',req.body)

         if(!username){
            return res.json({
                status:0,
                message:'Need to pass username'
            })
         }
         else if(!email){
            return res.json({
                status:0,
                message:'Need to pass email'
            })
         }
         else if(!dob){
            return res.json({
                status:0,
                message:'Need to pass dob'
            })
         }
         else {
            try {
                var user_data = new userModel({
                    name : username,
                    email: email,
                    dob:dob
                })
                var result = await user_data.save();
                 res.status(200).json({data:result})
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
         }
    },

    getUser : async(req,res)=>{
        console.log("req",req.params)
        if(!req.params.id){
            return res.json({
                status:0,
                message:'Need to pass user_id'
            })
        }
        else {
            try {
                var result = await userModel.findById({_id:req.params.id})
                res.status(200).json({data:result})
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
           
        } 
    },
    removeUser: async(req,res) =>{
         if(!req.params.id){
            return res.json({
                status:0,
                message:'Need to pass user_id'
            })
         }
         else{
            try {
                var result = await userModel.findByIdAndDelete({_id:req.params.id})
                res.status(200).json({data : result,message:'success'})
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
         }
    }
}