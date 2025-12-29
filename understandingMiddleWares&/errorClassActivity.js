// activity to protect the path of "./admin" and throw err of 403


const express = require("express");
const app = express();
const ExpressError=require("./ExpressError");

app.get("/err", (req, res) => {
   abcd=abcd; //jo error object hai uske pass koi valid erro code nahin  hai 
});

app.get("/admin",(req,res)=>{
        throw new ExpressError(403," ACCESS TO THE '/admin' DENIED!");
});

app.get("/", (req, res) => { 
    res.send("hi  i am root ")
});
app.get("/random", (req, res) => {
    res.send("this is randome page ");
});

app.use((err, req, res, next) => {
    console.log("--------------------error--------------");
    next(err);
    

})


app.use((err, req, res, next) => {
    console.log("--------------------error2--------------");
    next(err);
});

app.use((err, req, res, next) => {

    console.log("--------------------error33--------------");
    next(err);
    // res.send(err);
    // res.send(err.status); 
});

app.use((err,req,res,next)=>{
    console.log(err.name);  
    next(err);
});

// this is custom error error handling middleware 

app.use((err, req, res, next) => {

    console.log("--------------------error2--------------");
    let {status =400,message = "some error occured"}=err;
    res.status(status).send(message);

});






app.listen(8080, () => {
    console.log("server listening to the port 8080");
    console.log("server started listing");

});