const mongoose=require('mongoose');
const contactMsg=new mongoose.Schema({
    userId:{
        type:String,
        require:true,
        unique:false
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    Message:{
        type:String,
        require:true
    }
})
const UserMsg=mongoose.model('UserMsg',contactMsg);
module.exports=UserMsg;