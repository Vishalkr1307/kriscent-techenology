const mongoose=require("mongoose")
const taskSchema=new mongoose.Schema({
    title:{type:String,required:true},
    deadline:{type:Date,required:true,default:new Date()},
    employee_id:{type:mongoose.Types.ObjectId,ref:"Employee",required:true},
    status:{type:String},
    comment:{type:String}
},{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("task",taskSchema)