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
app.get("/chats", async (req, res) => {
    try {
        let chats = await Chat.find({});
        res.render("index.ejs", { chats });
    } catch (err) {
        throw err;
    }
});

// new route
app.get("/chats/new", (req, res) => {
    try {
        // throw new ExpressError(404,"page not found");  //---------->line number 91
        res.render("new.ejs");
    } catch (err) {
        throw err;
    }

});

// create route 
app.post("/chats", async (req, res) => {
    try {
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
    } catch (err) {
        throw next(err);
        // try ne error ko detect kiya and catch ne error ko catch kiya and hamre default error ko call kr diya gaya (next(err));
    }
});

// New--Show Route 
app.get("/chats/:id", async (req, res, next) => {
    try {
        let { id } = req.params;

        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
    } catch (err) {
        throw next(err);
    }

});

// Edit Route 
app.get("/chat/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    console.log(chat);
    res.render("edit.ejs", { chat });
});
// Update Route 

app.put("/chats/:id", async (req, res) => {
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

// Destroy Route 
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    const chat = await Chat.findByIdAndDelete(id);
    if (!chat) {
        // throw new ExpressError(404,"eror for asynchronous function");
        // ye asynchrouns error through hua hai 
        // orr jb bhi asynchronous error through hota hai to uss case me by default next(err) ko call nahi jati hai 
        // agar next() ko call nahi llagayega to error handling proper nahi hogi 
        // to iss case me explicitly next ko call lagani padti hai 
        // to ab asynch error ke ke liye next koo call karo aise-----
        next(new ExpressError(404, "eror for asynchronous function"));
    }
    console.log(`deleted : ${chat}`);
    res.redirect("/chats");

});

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


// mogooose error
// jo id send ki hai client side se wo id galat length ki send ki hai to wo searrc kia hi nahi ja skta
// bt id of same length ki bheji hai but  uske result nahi hai (ya wo exits nahi krti mongoose me )


// if(!chat){
//     next(new ExpressError(404,"eror for asynchronous function"));
// }
// iss tarah keval hmm  undefined type error ko handle kr skte hai yani jo error jisme id search krne pr id mili na


// ejs template apne alag error error generate krta hai
//  jo keaval try{} catch{} block se shambhale ja skte hai


// vallidation error  yani jis type error mongoose bhejta hai 

// casting  err wo error jo ek form se dusare form me convert krtte samaye face krne padte hai 
// id----->_id  by monggose 




// way of handling error 
// 1) normal errors 
// 2) asynch express eror
// 3) try- catch (bulky tarika hai )
// using wrapAsynch 






