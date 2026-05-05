const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');

// get the chat model
const Chat=require('./model/chat');
app.set("views",path.join(__dirname,"views"));


//set the view engine to ejs
app.set("view engine","ejs");

//attach the static files
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));

main().then(()=>{
    console.log('Connected to MongoDB');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//get all the chats between sujal and gopi
 app.get('/chats',async (req,res)=>{
    let chats= await Chat.find();
    res.render("index.ejs",{chats});
 });

  //create a new chat between sujal and gopi

 app.get('/chats/new',async(req,res)=>{
    res.render("new.ejs");
 })
 app.post('/chats',async(req,res)=>{
    let {from, to, message} = new Chat(req.body);
        let newChat = new Chat({
        from : from,
        to: to,
        message: message,
        created_st: Date(),
    });
console.log(newChat);   
    await newChat.save();
    res.redirect('/chats');
 });

 //edit a chat
 app.get('/chats/:id/edit',async(req,res)=>{
    let chat=await Chat.findById(req.params.id);
   res.render("edit.ejs",{chat});
 });

app.post('/chats/:id',async(req,res)=>{
   const {from, to, message} = req.body;
   await Chat.findByIdAndUpdate(req.params.id,{ message});
   res.redirect('/chats');
});


//delete a chat
app.post('/chats/:id/delete',async(req,res)=>{
     const deletedChat = await Chat.findByIdAndDelete(req.params.id);
     res.redirect('/chats');
     console.log(deletedChat);
});

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.listen(8080,()=>{
    console.log('Server is running on port 8080');
});