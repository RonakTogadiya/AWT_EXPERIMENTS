const express=require('express');
const fs=require('fs');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;

//Built-in Middleware - parses urlencoded form data
app.use(express.urlencoded({extended:false}));

//Built-in Middleware - parses JSON bodies
app.use(express.json());

//Third-party Middleware - cookie-parser
app.use(cookieParser());

//Custom Middleware - logging
app.use((req,res,next)=>{
    fs.appendFile("./logs.txt",`\n${Date.now()} : ${req.method} ${req.ip} ${req.path}`,(err,data)=>{
        next();
    });
});

//GET Routes
app.get('/',(req,res)=>{
    return res.send('Hello World! Welcome to Express Server');
});

app.get("/about",(req,res)=>{
    return res.send("About Us Page: "+req.query.name);
});

app.get("/contact",(req,res)=>{
    return res.send("Contact Us Page");
});

//GET - show cookies
app.get("/get-cookies",(req,res)=>{
    console.log("Cookies:",req.cookies);
    return res.json(req.cookies);
});

//GET - set a cookie
app.get("/set-cookie",(req,res)=>{
    res.cookie("username","Ronak",{maxAge:900000});
    return res.send("Cookie has been set");
});

//POST Route
app.post("/signup",(req,res)=>{
    const body=req.body;
    console.log("Signup Body:",body);
    return res.json({status:"User registered",data:body});
});

app.listen(port,()=>{console.log(`Server is running on port ${port}`)});
