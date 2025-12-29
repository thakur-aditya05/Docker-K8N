const express = require("express");
const app = express();
const ExpressError=require("./ExpressError");

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    // throw err// ek object hai 
    throw new ExpressError(404, "ACCESS DENIED!")// my  custom error message by custom class 
}
app.get("/api", checkToken, (req, res, next) => {
    res.send("my  custom error message by custom class if this msg was not goes wrong  ");

});
app.get("/err", (req, res) => {
   abcd=abcd; //jo error object hai uske pass koi valid erro code nahin  hai 
});
app.get("/", (req, res) => {
    res.send("hi  i am root ")
});
app.get("/random", (req, res) => {
    res.send("this is randome page ");
});

app.use((err, req, res, next) => {
    console.log(err);
    console.log("--------------------error--------------");
    // ek baar next() na chale ke dekho 
    // next();// ek baar aise dekhoo ---->it will search for the path /
    next(err);//ek baar aise 

})


app.use((err, req, res, next) => {
    console.log("--------------------error2--------------");
    next(err);
});

// app.use((err, req, res, next) => {

//     console.log("--------------------error2--------------");
//     // next(err);
//     // res.send(err);
//     res.send(err.status);
// });



// this is custom error error handling middleware 
app.use((err, req, res, next) => {

    console.log("--------------------error2--------------");
    
    // let {status,message}=err;
    // res.status(status).send(message);
    // agar express nahi bhej raha hai status code to hame error status code bhjenna hoga 
    let {status =400,message = "some error occured"}=err;
    res.status(status).send(message);

});
// error bhej rahe hai client side ko 
// khud ki error class ko kase defined krte hai 

// status code 401 tha jasei hi response object ke pass satus 401 aaya to res ko tpta chal gaya
//  ki error bhejna hai na ki wo 201 wala ``






app.listen(8080, () => {
    console.log("server listening to the port 8080");
    console.log("server started listing");

});