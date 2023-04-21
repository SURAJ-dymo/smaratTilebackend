const express=require('express');

const userRoute=require('./Routes/userRoute');
const imageRoute=require('./Routes/imageRoute');
const imagefRoute=require('./Routes/imagefRoute');
const categoryRoute=require("./Routes/categoryRoute");

const cors=require("cors");
const body_parser=require("body-parser");
const cookie_parser=require("cookie-parser");
const err=require("./Middelwares/error")

const fileUpload = require("express-fileupload");



const app=express();


app.use(express.json());
app.use(cors())
app.use(body_parser.urlencoded({extended:true}));
app.use(cookie_parser());
app.use(fileUpload());





app.use("/api/v1",userRoute)
app.use("/api/v1",categoryRoute)
app.use("/api/v1",imageRoute)
app.use("/api/v1",imagefRoute)

app.use(err);
module.exports=app;