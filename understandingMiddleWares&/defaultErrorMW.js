const express=require("express");
const app = express();


// const checkToken=(req,res,next)=>{
//         let {token} = req.query;
//         if(token==="giveaccess"){
//             next();
//         }
//         res.send("ACCESS DENIED")
//     }





// ......................................................................................................................
// deafult error handling system by express 
const checkToken=(req,res,next)=>{
            let {token} = req.query;
            if(token==="giveaccess"){
                next();
            }
            throw new Error("ACCESS DENIED")// my  custom error message 
        }

// app.get("/api",checkToken,(req,res,next)=>{
//     res.send("multiple middleware can be passed  to any type of request (get post patch)");

// });
// app.get("/wrong",(req,res)=>{
//      abcd=abcd;
     
// });

// this is stack trace:---and default error handler ke through aaya hai 
//and  status code by 500 by express 
        // ReferenceError: abcd is not defined
        //     at C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\errorMW.js:19:6
        //     at Layer.handle [as handle_request] (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\layer.js:95:5)
        //     at next (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\route.js:149:13)
        //     at Route.dispatch (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\route.js:119:3)
        //     at Layer.handle [as handle_request] (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\layer.js:95:5)
        //     at C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\index.js:284:15
        //     at Function.process_params (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\index.js:346:12)
        //     at next (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\index.js:280:10)
        //     at expressInit (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\middleware\init.js:40:5)
        //     at Layer.handle [as handle_request] (C:\Users\thaku\OneDrive\Desktop\WEB-DEVELOPMENT\understandingMiddleWares&\node_modules\express\lib\router\layer.js:95:5)
// ............................................................................................................................................................






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