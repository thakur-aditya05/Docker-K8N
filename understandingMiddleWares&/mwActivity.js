const express=require("express");
const app = express();

//1) first middleware ka best use yahi hai (protection);
    // app.use("/api",(req,res,next)=>{
    //     let {token} = req.query;
    //     if(token==="giveaccess"){
    //         next();
    //     }
    //     res.send("ACCESS DENIED")
    // });


// multiple middleware can be passed  to any type of request (get post patch);

const checkToken=(req,res,next)=>{
        let {token} = req.query;
        if(token==="giveaccess"){
            next();
        }
        res.send("ACCESS DENIED")
    }


app.get("/api",checkToken,(req,res,next)=>{
    res.send("multiple middleware can be passed  to any type of request (get post patch)");

});

app.get("/api",(req,res,next)=>{
    res.send("this middleware is protecting all routes  starting with '/api' and layer of authentication required " )
});



app.get("/",(req,res)=>{
    res.send("hi  i am root ")
});

app.get("/random",(req,res)=>{
    res.send("this is randome page ");
});

app.listen(8080,()=>{
    console.log("server listening to the port 8080");
    console.log("server started listing");

});