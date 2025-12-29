// const express=require("express");
// const app=express();
// const users =require("./routes/user.js");
// const posts=require("./routes/post.js")

// // ..................for..........................................
// const path=require("path");
// const ejsMate=require("ejs-mate");
// // ...............................................................
// // lets reqquire cookies to use it and read it 
// const cookieParser = require('cookie-parser');
// //  ..........................................................
// // let reqquire flash  so to make pop-up msgs for suxxess warning
// const flash = require('connect-flash'); 
// // for ejs 
// app.engine("ejs",ejsMate);
// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));



// // /................................express session .....................
// // link for express session --------------->https://www.npmjs.com/package/express-session#sessionoptions
// const session = require('express-session');

// // app.use(session({secret: "mysupersecretstring" }));//kayi saare differet differet options hote hai   jisme se secret options important hai and REQUIRED hota hai ki jab bhi session creat karenge to uss case me secret option ka use krna hi padega 
// // secret
// // Required option
// // This is the secret used to sign the session ID cookie, This can be either a single secret, or an array of multiple secrets.
// // The secret itself should be not easily parsed by a human and would best be a random set of characters
// //mysupersecretstring----> ye accha idea nahi hai kyo ye ek GENERAL string hai 

// // to remove these two errors  "resave" and "saveUninitialized" ye do error hatane padenge 
// //express-session deprecated undefined resave option; provide resave option server.js:18:9
// //express-session deprecated undefined saveUninitialized option; provide saveUninitialized option server.js:18:9
// const sessionOptions={secret: "mysupersecretstring",saveUninitialized:true,resave:false,};
// app.use(session(sessionOptions));//-----> ab koi deprecated warning nahi aayegi 
// // .....................MW for flash
// app.use(flash());


// // ............................one more best way to local as a creating middle ware
// app.use((req,res,next)=>{
//     res.locals.successMsg= req.flash("success");// likhna hai aga ejs template me use krna hai to local variable ke under store kara skte hai req.local.message ek variable hai 
//     res.locals.messageMsg= req.flash("error");
//     next();
// })










// app.get("/register",(req,res)=>{ //hmmm chathte hai ki users hamre web paage pe aake register kr paaye ya kr sake 
//     let {name="anonymous"}=req.query; // and ye registration query strings ke through hogi /register?name=aditya to name yaha aditya ke equal hai orr isse yaha se extract krna hoga jo ki query strings ke through hoga  ,,,req.query---> this method is used to access query string from url end point           
//     // res.send(`our registered member is ${name}`);
//     req.session.name=name;// ye cheech smjhna important hai  ki dusare function me bhi issko use kr skte hai yani hrrr req ko req.session accessble hota hai yani "/hello  route me bhi access able "
//     // console.log(req.session);
//     console.log(req.session.name);
//     // res.send(`our registered member is ${name}`);

//     // req.flash("success","user registered successfully");//success  is the key jisse isske  msgs("user registered successfully") ko successfull access kiya ja sake 
//     if(name==="anonymous")req.flash("error","user not  registered  ");
//     else req.flash("success","user registered successfully");


//     res.redirect("/hello");//---> redirect kr jaao /hello route pr 0p;/l., 
// });
// //agar issko kisi ka naam pass hota hai to ye "/hello" route issko hello bol dega 
// app.get("/hello",(req,res)=>{
//     // res.send("hello");
//     console.log(req.session);// session obje console.log(req.session);
//     // res.send(`"hello,${req.session.name}"`);
//     // Session {
//     //     cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }
//     //   }
//     // this shows session is an object and any number of variable can be made it out from -----jaise count wala variable create kiya tha 
    
//     // console.log(req.flash("success"));//--->[ 'user registered successfully' ]array of msgs
     
//     // res.render("page.ejs", { name: req.session.name, msg: req.flash("success") });//ek baar hi keval use kiya ja skta hai 
   
//     res.locals.successMsg= req.flash("success");// likhna hai aga ejs template me use krna hai to local variable ke under store kara skte hai req.local.message ek variable hai 
//     res.locals.messageMsg= req.flash("error");//ajb kafi msgs hote hai to local wala variable tarika badhiya  hota hai 
//     res.render("page.ejs", { name: req.session.name});//likhna hai 
// // res(response) object ka part hai locals
// } )












// // app.get("/reqcount",(req,res)=>{
// //     //res.send(`you sent a request x time`);
// //     // req.session.count=1;//naya variable create kr rahe hai count naam ka ofrr isski value set kr rahe hai 1;
// //     if(req.session.count){// agar isski value exists krti hai to count increse
// //         req.session.count++;
// //     }else{
// //         req.session.count=1;
// //     }    
// //     res.send(`you sent a request ${req.session.count} time`);//---> we want ki "/reqcount" route pe ek session ke request count krna hai (/reqcount pr kitni baar req dala gaya hai ) to uske lie we added (35,10) if(req.session.count) that is req.session.count if existsthen icrease the count 
// //});









// // app.get("/test",(req,res)=>{
// //     res.send("test successful");
// // // jahe jo type ki request ho post patch delete hrr type ki request ke liye ek session id generate hogi and store ki jayegi gi cookies ke form me web browser ke under 
// // // connect.sid--->currect connection ke liye ye jo session id aayi hai orr s:c9Ym0Ak7eJPtOdQVzA1mhkOFsMEK6Hqf.dgl4z/4fuSDsTLe9FW0LBiM7Nddg+lgTvT5DbdHwNM8 ye uski value hai
// // });






// app.use("/users",users);
// app.use("/posts",posts);//jitne bhi routes hai jinke pass hamari request ja rahi hai jo jo routes hamre slash se start hote hai un saare routes ko match kiya jayega jo bhi unka path bach gaya "posts" wale paths se 
// //yanni "/posts " wale saare paths ko match kiya jayega hamre posts wale saare paths se (const posts=require("./routes/post.js")) wale paths se and usse uska respose milega to thik nahi to aaage bbaaat pass kr di jayegi 
// // app.use(cookieParser());// this is for unsigned type 
// app.use(cookieParser("secretcode"));//this is for signed cookies























// // app.get("/getcokies",(req,res)=>{
// //     res.cookie("greet","hello");
// //     res.cookie("greet1","hello1");
// //     res.cookie("greet2","hello2");
// //     res.send("https://expressjs.com/en/5x/api.html#res.cookie    this website is used to read th document");

// // });



// // app.get("/getsignedcokies",(req,res)=>{
// //     res.cookie("greet","hello",{signed:true});//for sending cookies and sealing it (andin terms of cookies this is called signed cookies)
// //     res.cookie("greet1","hello1",{signed:true});//for sending cookies and sealing it (andin terms of cookies this is called signed cookies)
// //     res.cookie("greet2","hello2",{signed:true});//for sending cookies and sealing it (andin terms of cookies this is called signed cookies)
// //     res.send("https://expressjs.com/en/5x/api.html#res.cookie    this website is used to read th document");

// // });

// // // to verify 
// // app.get("/verfy",(req,res)=>{
// //     console.dir(req.signedCookies);//[Object: null prototype] { greet: 'hello', greet2: 'hello2' }
// //     console.log(req.cookies);//---->object for unsigned 
// //     console.log(req.signedCookies);
// //     console.dir(req.cookies);//---->object for unsigned 
 
   
// //     res.send(`verified`);
// // })










// // // small authentication actiivity
// // app.get("/greet",(req,res)=>{
// //     let {name=anonymous} = req.cookies;// ab jahe jo ho jaye ek baar ye cookie saved kr dene pr or ek baar /greet route pe aaajane ke baad hamesha isske wali information saved rahegi yani {name = aditya passed as a cookies manuaaly } wo saved rahegi 
// //     res.send(`hi this is ${name}`);
// // })
// // app.get("/",(req,res)=>{ 
// //     console.dir(req.cookies);//-----> gives undifined  without cookies pareser middleware  
// //     res.send("<h1>3000 is listing </h1>")
// // });



// //  going to write  a heavy code  at heavy website "/users, /users/:id, /users/new" iss traha ke kayi route honge 



// // //USERS ROUTES

// // //Index Route
// // app.get("/users",(req,res)=>{
// //     res.send("GET for request for users")
// // });




// // //Show Route
// // app.get("/users/:id",(req,res)=>{
// //     res.send("GET for request for users")
// // });




// // // POST ROUTE 
// // app.get("/users",(req,res)=>{
// //     res.send("POST for request for users")
// // });



// // //DELETE-route  users
// // app.delete("/users/:id",(req,res)=>{
// //     res.send("DELETE for request  for users id ")
// // });





// // console.log("posts")
// // // //POSTS request 

// // // //Index Route
// // // app.get("/posts",(req,res)=>{
// // //     res.send("GET for request for posts")
// // // });
// // // //Show Route
// // // app.get("/posts/:id",(req,res)=>{
// // //     res.send("GET for request for posts")
// // // });
// // // // POST ROUTE 
// // // app.get("/posts",(req,res)=>{
// // //     res.send("POST for request for posts")
// // // });
// // // //DELETE-route  users
// // // app.delete("/posts/:id",(req,res)=>{
// // //     res.send("DELETE for request users id for posts ")
// // // });

// // console.log("posts khtama")
// // //but size ka file jada badh gaya hai users and posts ke keval route badh gaya hai 
// // //to yaha pe aata hai  kaam express router ka ki wo issko destructure krne me help krta yani kuch bhi pata nahi chalegga but server side alag tarike se code likh payenge gt












// // app.get("/",(req,res)=>{ 
// //     console.dir(req.cookies);//-----> gives undifined  without cookies pareser middleware  
// //     res.send("<h1>3000 is listing </h1>")
// // });



// //for all type of route 
// // app.all("*",(req,res,next)=>{
// //     next(new ExpressError(404,"<h1>Page Note Found!</h1>"));
// // });

// //listing to the port 
// app.listen(3000,()=>{
//     console.log("server start listening on the port 3000");
// });





