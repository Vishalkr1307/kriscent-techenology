const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const employeeSchema=new mongoose.Schema({
    email:{type:String,require:true},
    password:{type:String,require:true},
    role:{type:Array,default:"employee",require:true}

},{
    versionKey:false,
    timestamps:true
})
employeeSchema.pre("save",function(next){
    if(!this.isModified("password")) return next()
    this.password= bcrypt.hashSync(this.password,12)
    next()
})
employeeSchema.methods.checkPassword=function (password){
    return bcrypt.compareSync(password,this.password)
}
module.exports=mongoose.model("Employee",employeeSchema)