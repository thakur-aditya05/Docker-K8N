// const express=require("express");
// //ab router object creat krni padegi 
// //issko create krne ke liye router 
// //express object ke pass ek router method hota hoi jisse execute kkrte hai to create new couter object
// const router =express.Router()//to get router object and  "router()" is method under in express
// postsRoutes.js

const express = require("express");
const router = express.Router();
//             exxpress.router ek method
// Index Route (GET /posts)
// router.get("/posts", (req, res) => {
//   res.send("GET request for posts");
// });

// // Show Route (GET /posts/:id)
// router.get("/posts/:id", (req, res) => {
//   res.send("GET request for post with id: " + req.params.id);
// });

// // POST Route (POST /posts)
// router.post("/posts", (req, res) => {
//   res.send("POST request for creating a post");
// });

// // DELETE Route (DELETE /posts/:id)
// router.delete("/posts/:id", (req, res) => {
//   res.send("DELETE request for post with id: " + req.params.id);
// });
//   "/posts"  app.use ne common nikal liya sbme se 
router.get("", (req, res) => {
    res.send("GET request for posts");
  });
  
  // Show Route (GET /posts/:id)
  router.get("/:id", (req, res) => {
    res.send("GET request for post with id: " + req.params.id);
  });
  
  // POST Route (POST /posts)
  router.post("", (req, res) => {
    res.send("POST request for creating a post");
  });
  
  // DELETE Route (DELETE /posts/:id)
  router.delete("/:id", (req, res) => {
    res.send("DELETE request for post with id: " + req.params.id);
  });
  
module.exports = router; // Export router to be used in the main app
