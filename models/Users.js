 const mongoose=require('../db/conn');
 const {Shema}=mongoose;

 const User=mongoose.model(
    "User",
    new Shema({
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        image:{
            type:String
        },
        phone:{
            type:String,
            required:true
        },
    },
    {timestamps:true},
    ),
 );
 module.exports=User