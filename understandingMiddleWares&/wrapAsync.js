const express = requrire("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");
const { error } = require("console");

main()
    .then(() => {
        console.log("connnection successfull");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ffakeWhatsApp');
}

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// /Index route
app.get("/chats", asyncWrap(
    async (req, res) => {
        let chats = await Chat.find({});
        res.render("index.ejs", { chats });
    })
);

// new route
app.get("/chats/new", asyncWrap(
    async (req, res) => {
        res.render("new.ejs");
    
    })
);

// create route 
app.post("/chats",asyncWrap(
    async (req, res) => {
        console.log(req);
        let { from, to, message } = req.body;

        let newChat = new Chat({
            from: from,
            to: to,
            message: message,
            created_at: new Date(),
        });

        await newChat.save();
        res.redirect("/chats");
})
);

// New--Show Route 
app.get("/chats/:id", asyncWrap(
        async (req, res, next) => {
        let { id } = req.params;
    
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
    
    })
);



// Edit Route 
app.get("/chat/:id/edit", asyncWrap(
        async (req, res) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        console.log(chat);
        res.render("edit.ejs", { chat });
    })
);

// Update Route 

app.put("/chats/:id", asyncWrap(
        async (req, res) => {
        let id = req.params;
        let message = req.body;
        const chat = await Chat.findByIdAndUpdate(
            id,
            { message: message },
            { runValidators: true, new: true },
        );
        console.log(chat);
        res.redirect("/chats");
    })
);

// Destroy Route 
app.delete("/chats/:id",
    asyncWrap( async (req, res) => {
        let { id } = req.params;
        const chat = await Chat.findByIdAndDelete(id);
        console.log(`deleted : ${chat}`);
        res.redirect("/chats");
    
    })
);

// Custom Error Handling Middleware
app.use((err, req, res, next) => {
    let { status = 400, message = "some error occured" } = err;
    res.status(status).send(message);
});

// Root Route 
app.get("/", (req, res) => {
    let { id } = req.params;
    res.send("working root");

});

// Port listner
app.listen(8080, () => {
    console.log("app is listening")
});

            // asynchwrap function 
// function asyncWrap(fn){
//     return function(req,res,next){
//         fn(req,res,next).catch((err)=> next(err));
//     };
// }



// // similar to rhis working 
                // function asyncWrap(){
                //     return function(){
                //         fn();
                //     };
                // }

                // const hello =()=>console.log("hello");
                // undefined
                // hello()
                // hello()
                // asyncWrap(hello);
                // ƒ (){
                //         fn();
                //     }
                // const retVal=asyncWrap(hello);
                // retVal()
                // retVal()
                // function asyncWrap(){
                //     return function(){
                //         fn();
                //     };
                // }
                // const retVal=asyncWrap(hello);
                // undefined
                // retVal();



// cast error 
// validation error 
//    but in sabhi ke liye common middle ware handle define kiya hai 
//    but hrr error ke ke under uska name chipa hota hai jo batata hai ki wo kis type ka error hai  and to print the error ---
// app.use((err,req,res,next)=>{
//         console.log(err.name);
//         next(err);
// });
//validation error, cast error
    //specific error ke liye kuch specific type ke handler banana chahate hai to uske liye 
    app.use((err,req,res,next)=>{
                console.log(err.name);
                if(err.name==="ValidationError")console.log("validation error");
                next(err);
        });
// same ek aur cheej bhi kr skte hai lets create function 
// const handleValidationErr=(err)=>{
//     console.log("this was validation error. please follow rules ");
//     console.dir(err)
//     return err;
// } 
// app.use((err,req,res,next)=>{
//     console.log(err.name);
//     if(err.name==="ValidationError"){
//         handleValidationErr(err);
//         err = handleValidationErr(err);
    
//     }
//     next(err);
// });