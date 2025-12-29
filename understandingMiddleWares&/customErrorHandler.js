const express=require("express");
const app = express();
const ExpressError=require("./ExpressError");



// const checkToken=(req,res,next)=>{
//     let {token} = req.query;
//     if(token==="giveaccess"){
//         next();
//     }
//     throw new Error("ACCESS DENIED")// my  custom error message 
// }

// app.get("/api",checkToken,(req,res,next)=>{
//     res.send("multiple middleware can be passed  to any type of request (get post patch)");

// });

// app.use((err,req,res,next)=>{
//     // console.log(err);
//     console.log("--------------------error--------------");
    
// //browser page stuk kr jayega   kyo ki na hi middleware ne response bhi nhi bheja hai orr   
// })


// app.use((err,req,res,next)=>{
//         // console.log(err);
//         console.log("--------------------error2--------------");
// //abhi next ko call kr denne pr braoser stuk nahi
// //karega and also next non error handling ko request chali jayegi it may be ge
//        next();
       
// // Cannot GET /err  ye  print hoga ki 
//     });

    // app.use((err,req,res,next)=>{
    //     // console.log(err);
    //     console.log("--------------------error2--------------");
//abhi next ko call kr denne pr browser stuck nahi
//karega and also next  error handling ko request chali jayegi
// jb error ko printkrwana hoga to issi ko call krenge 

    //    next(err);
       
// default error handler by express ko call jayegi 
//   print hoga ki 
    // });


    // ReferenceError: abcd is not defined
    // at C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\customErrorHandler.js:19:6
    // at Layer.handle [as handle_request] (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\layer.js:95:5)
    // at next (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\route.js:149:13)
    // at Route.dispatch (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\route.js:119:3)
    // at Layer.handle [as handle_request] (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\layer.js:95:5)
    // at C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\index.js:284:15
    // at Function.process_params (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\index.js:346:12)
    // at next (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\index.js:280:10)
    // at expressInit (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\middleware\init.js:40:5)
    // at Layer.handle [as handle_request] (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\layer.js:95:5)

    //  ye bahut ganda waay hai error ko print karane ka hamm chahate hai ki kuch acche orr better look me represent hoo err  to isliye ek error class banate hai 

const checkToken=(req,res,next)=>{
    let {token} = req.query;
    if(token==="giveaccess"){
         next();
    }
    // throw err// ek object hai 
    throw new ExpressError(401,"ACCESS DENIED!")// my  custom error message by custom class 
}

            app.get("/api",checkToken,(req,res,next)=>{
                res.send("my  custom error message by custom class if this msg was not goes wrong  ");
            
    });
app.get("/err",(req,res)=>{
        abcd=abcd;
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