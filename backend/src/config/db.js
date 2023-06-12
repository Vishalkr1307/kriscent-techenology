const mongoose=require("mongoose")
require("dotenv").config()
module.exports=()=>{
    return mongoose.connect(process.env.DB).then(()=>console.log("connection established")).catch(()=>console.log("connection rejected"))
}