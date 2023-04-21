const mongoose=require("mongoose");
const imageSchema=new mongoose.Schema({
    iname:{
        type:String,
        required:true
    },
    idesc:{
      type:String,
      required:true
  },
  ilink:{
    type:String,
    required:true
},
icat:{
  type:String,
  required:true
},
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    
    createdAt: {
        type: Date,
        default: Date.now,
      },
})

const Image=new mongoose.model("images",imageSchema);


module.exports=Image;