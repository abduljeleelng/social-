const mongoose = require('mongoose');
const {ObjectId}= mongoose.Schema;
const postSchma = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        minlength:4,
        maxLength:150,
    },
    body:{
        type:String,
        require:true,
        minlength:5,
        maxlength:2050,
    },
    photo:{
        data:Buffer,
        contentType:String,
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    },
    created:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model("Post",postSchma);