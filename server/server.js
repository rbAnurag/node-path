const path=require("path");
const express=require("express");
var router = express.Router();


var app=express();
const publicpath=path.join(__dirname,'..','/public/');
 const port= process.env.PORT || 3000;
app.use(express.static(publicpath));

router.get("/",function(req,res){
    res.sendFile(publicpath + "index.html");
  });

  router.get("/about",function(req,res){
    res.sendFile(publicpath + "about.html");
  });

  
  router.get("/contact",function(req,res){
    res.sendFile(publicpath + "contact.html");
  });
 
  app.use("/",router);


  app.use("*",function(req,res){
    res.sendFile(publicpath + "error_404.html");
  });

app.listen(port,() =>{
    console.log(`Server is up on  ${port}`);
});

