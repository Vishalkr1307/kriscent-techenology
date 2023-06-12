const express=require("express")
const router=express.Router()
const Admin=require("..//module/admin")
const  newToken=require("..//utlies/token")
const {body,validationResult} =require("express-validator")
const formatOfError=require("..//utlies/validations")


router.post("/register",body("email").isEmail().notEmpty(),body("password").isLength({min:5}).withMessage("password must be greater than 5"), async (req,res)=>{
    try{
        let error=validationResult(req)
        
        if(!error.isEmpty()){
            return res.status(400).send(formatOfError(error.array()).join(" "))


        }
        let admin=await Admin.findOne({email:req.body.email}).lean().exec()
        
        if(admin){
            return res.status(400).send("email is already registered")
        }
        admin=await Admin.create(req.body)
        const token=newToken(admin)
        return res.status(200).send({admin,token})

    }
    catch(err){
        return res.status(400).send("error occurred")
    }
})
router.post("/login",body("email").isEmail().notEmpty(), async (req,res)=>{
    try{
        let error=validationResult(req)
        
        if(!error.isEmpty()){
            return res.status(400).send(formatOfError(error.array()).join(" "))


        }
        let admin=await Admin.findOne({email:req.body.email})
        if(!admin){
            return res.status(400).send("email is not existing")
        }
        const match=admin.checkPassword(req.body.password)
        if(!match){
            return res.status(400).send("password is not correct")

        }
        const token=newToken(admin)
        return res.status(200).send({admin,token})
        

    }
    catch(err){
        return res.status(400).send("error occurred")
    }
})
module.exports=router
