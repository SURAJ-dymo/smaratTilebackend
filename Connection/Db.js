
require("dotenv").config();
const mongoose=require("mongoose");


const Connection=()=>{
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then(()=>{
          console.log("data base connected successfully")
    }).catch((err)=>{
         console.log("something went wrong on database")
    })
}

module.exports=Connection;