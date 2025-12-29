const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main()
  .then(()=> {
    console.log("connnection successfull");
  })
  .catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ffakeWhatsApp');
}   

let chats=[
    {
        from:"neha",
        to:"priti",
        message:"send me notes",
        created_at:new Date(),
    },
    {
        from:"rohit",
        to:"rahul",
        message:"send me notes 2",
        created_at:new Date(),
    },
    {
        from:"raaj",
        to:"humja",
        message:"send me notes 3",
        created_at:new Date(),
    },

];

Chat.insertMany(chats)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err)
            });