const mongoose=require('mongoose');

const chatSchema=new mongoose.Schema({
    from:String,
    to:String,
    message:String,
    created_st:Date,
});

module.exports=mongoose.model('Chat', chatSchema);