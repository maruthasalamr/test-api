const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id:{
        type:Number
    },
     name:{
        type:String
     },
     email:{
        type:String
     },
     dob:{
        type:String
     },
     created:{
        type: Date,
        default: Date.now
     },
     updated:{
        type: Date,
        default: Date.now
     }
})


module.exports = mongoose.model(
    "users",
    userSchema,
    "users"
);