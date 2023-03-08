 const mongoose=require('mongoose');

 async function main(){
    try {
        await mongoose.connect('mongodb://localhost:27017/getapet');
    console.log('conectou ao mongoose ✈ ');
    } catch (error) {
        console.log(error)
    }
 }
module.exports=mongoose
