const express=require("express");
const app = express();
// MW does nothi  g at this point nor callinng next function and nor sending response 
    // app.use(()=>{
    //     console.log("hi,Hi m  middleware");
    // });

// hrr ek incoming reqest ke saath execute hoga 
    // app.use((req,res)=>{
    //     //reqest respose object access ki ja skti hai even kuch add krna hua  request object me to wo bhi kr skte hai    
    //     let {query}=req.query;
    //     console.log(query);
    //     res.send("this is response only sending middileware and ending req respose cycle");
    // });

//
//     app.use((req,res,next)=>{
//         console.log("hi, i am middlware who is calling for next()");
// //next () call kr ke MW apna kaam kr ke khatam ho jayega orr next ko call lagayega  (yani incoming request 
// // apna path match karegi or correct route ke  pass pahuche gi or orr correct respose bhejegi is there is no more middleware exists if exist to middleware call ho jayega) 
//         next();
//     });
//     app.use((req,res,next)=>{
//         console.log("hi, i am  2nd middlware who is calling for next() and passing request to next middleware");
//         next();

//     }); 

// app.use((req,res,next)=>{
//     console.log("hi, i am middlware who is calling for next()");
//     next();
//     //we can also write executable code after next 
//     console.log("work after next"); //but not a choice of good developer 
// });

    // app.use((req,res,next)=>{
    //     console.log("hi, i am middlware who is calling for next()");
    //     return next();//sign of good developer 
    //     console.log("work after next");
    // });

// creating utility middlewares ------> acting likes as logger()

//     app.use((req,res,next)=>{
//         // console.log(req);
//         console.log(req.method, req.hostname, req.path);
//         req.time=Date.now();//not of readble format 
//         console.log(req.time);
//         req.time1=new Date(Date.now());//of readble format 
//         console.log(req.time1);
//         req.time2=new Date(Date.now()).toString();
//         console.log(req.time2);
//         // res.send(req.method);
//         next();
// //same sa kaam ye logger wala morgen bhi krta hai  krta  

//     });

// best use  middleware ka  kaam ye hai ki--> jb kisi specified paath ko ya specified series of path ko protect krna chahte hai (jaise /api, /api/listings, /api/listings/:id, )
// and beecch me ek authenthication wali layer dalna chahte hai to wo kaam respose bhejne se pahle ka hota hai to middlwaree ka best use yahi hai 

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

// 2nd best use of middleware  
// that is pahle kisi route ke saath hamari request match nahi kari hai to user ne galat jagah request daal di hai 
// error handling middleware 
    app.use((req,res,next)=>{
        // res.send("<h1><u>page not found</u> </h1>");
        //  mostly cartoon wagaire bhejte hai
        res.status(404).send("<h1><u>page not found</u> </h1>");

        next();
    });


//middleware to test whether it will work at very last or not 
    // app.use((req,res,next)=>{
    //     console.log("middleware definesd at very last");
    //     //if Mw is at last then it will not work 
    //     next();
    // });
    
