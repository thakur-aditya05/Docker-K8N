const express=require("express");
//ab router object creat krni padegi 
//issko create krne ke liye router 
//express object ke pass ek router method hota hoi jisse execute kkrte hai to create new couter object
const router =express.Router()//to get router object and  "router()" is method under in express

// ab yaha pe app.(method) nahi use krne wale hai 

// app.get("/",(req,res)=>{ 
//     res.send("<h1>3000 is listing </h1>")
// });


// //USERS ROUTES
// //Index Route
// app.get("/users",(req,res)=>{
//     res.send("GET for request for users")
// });
// //Show Route
// app.get("/users/:id",(req,res)=>{
//     res.send("GET for request for users")
// });
// // POST ROUTE 
// app.get("/users",(req,res)=>{
//     res.send("POST for request for users")
// });
// //DELETE-route  users
// app.delete("/users/:id",(req,res)=>{
//     res.send("DELETE for request  for users id ")
// });
// now
console.log("helloe");
// express ke pata hai ki  router ke pass saari access hoti hai  get,post ,patch, delete, inn sb cheezo ki 
// //Index Route
// router.get("/users",(req,res)=>{
//     res.send("GET for request for users")
// });
// //Show Route
// router.get("/users/:id",(req,res)=>{
//     res.send("GET for request for users")
// });
// // POST ROUTE 
// router.post("/users",(req,res)=>{
//     res.send("POST for request for users")
// });
// //DELETE-route  users
// router.delete("/users/:id",(req,res)=>{
//     res.send("DELETE for request  for users id ")
// });


//"/users"  common niak liya ap.use ne 

//Index Route
router.get("",(req,res)=>{
    res.send("GET for request for users")
});
//Show Route
router.get("/:id",(req,res)=>{
    res.send("GET for request for users"+ req.params.id)
});
// POST ROUTE 
router.post("",(req,res)=>{
    res.send("POST for request for users")
});
//DELETE-route  users
router.delete("/:id",(req,res)=>{
    res.send("DELETE for request  for users id " + req.params.id)
});

module.exports = router; //router ek object hai uske under hmne upper methods defined kr diya ab usse export krne ki bari aayi hai 

