const mongoose=require('mongoose');
const chat=require('./model/chat');

// app.set("views",path.join(__dirname,"views"));
// app.set("view engine","ejs");

main().then(()=>{
    console.log('Connected to MongoDB');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

chat.insertMany([
    {
        from:"Sujal",
        to:"gopi",
        message:"hello gopi",
        created_st:Date(),
    },
    {
        from:"gopi",
        to:"Sujal",
        message:"hello sujal",  
        created_st:Date(),
    },
    {   
        from:"Sujal",
        to:"gopi",
        message:"how are you?",     
        created_st:Date(),
    },
    {
        from:"gopi",
        to:"Sujal",
        message:"I am fine, how are you?",      
        created_st:Date(),
    },
    {       
        from:"Sujal",
        to:"gopi",
        message:"I am fine too",
        created_st:Date(),
    },
    {
        from:"gopi",
        to:"Sujal",
        message:"That's great to hear!",
        created_st:Date(),
    }
]);