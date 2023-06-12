const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
// const { type } = require("os");

const adminSchema=new mongoose.Schema({
    email:{type:String,require:true},
    password:{type:String,require:true},
    role:{type:Array,default:"admin",require:true}
    

},{
    versionKey:false,
    timestamps:true
})
adminSchema.pre("save",function(next){
    if(!this.isModified("password")) return next()
    this.password= bcrypt.hashSync(this.password,12)
    next()
})
adminSchema.methods.checkPassword=function (password){
    return bcrypt.compareSync(password,this.password)
}
module.exports=mongoose.model("Admin",adminSchema)