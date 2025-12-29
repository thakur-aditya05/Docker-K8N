const mongoose=require("mongoose");
const { Schema }=mongoose;



main()
    .then(()=>{console.log("connection successfull")})
    .catch((err)=>{console.log(err)});



async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");

}


const userSchema=new Schema({
    username:String,
    adressess:[
        {
            _id:false,
            location:String,
            city:String,
        }
    ],

});

const User=mongoose.model("User",userSchema);

// const addUser= async ()=>{
//     let user1=new User({
//         username:"aditya singh",
//         adressess:[
//             {
//                 location:"Gram Bara, Post: Bara",
//                 city:"Unnao",
//             },
//         ],
//     });
//     user1.adressess.push({location:"MANIT BHOPAL",city:"Bhopal"});
//     let result=await user1.save();
//     console.log(result)
   
     
// }

const addUser= async ()=>{
    let user1=new User({
        username:"aditya singh",
        adressess:[
            {  
                
                location:"Gram Bara, Post: Bara",
                city:"Unnao",
            },
        ],
    });
    user1.adressess.push({location:"MANIT BHOPAL",city:"Bhopal"});
    let result=await user1.save();
    console.log(result)
   
     
}

addUser();