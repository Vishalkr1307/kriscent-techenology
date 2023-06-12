const express=require("express")
const router=express.Router()
const Employee=require("..//module/employee")
const newToken=require("..//utlies/token")
const {body,validationResult}=require("express-validator")
const formatOfError=require("..//utlies/validations")


router.post("/register",body("email").isEmail().notEmpty().withMessage("it takes a email"),body("password").isLength({min:5}).withMessage("password must be greater that 5"),async (req,res)=>{
    try{
        let error=validationResult(req)
        
        if(!error.isEmpty()){
            return res.status(400).send(formatOfError(error.array()).join(" "))


        }
        let employee=await  Employee.findOne({email:req.body.email}).lean().exec()
        
        if(employee){
            return res.status(400).send("email already in use")
        }
        employee=await Employee.create(req.body)
        const token=newToken(employee)
        
            

         return res.status(200).send({employee,token})


    }
    catch(err){
        return res.status(400).send("error occurred ")
    }
})
router.post("/login",body("email").isEmail().notEmpty(),async (req,res)=>{

    try{
        let error=validationResult(req)
        
        if(!error.isEmpty()){
            return res.status(400).send(formatOfError(error.array()).join(" "))


        }
        let employee=await Employee.findOne({email:req.body.email})
        if(!employee){
            return res.status(400).send("email is not exist");
        }
        const match=employee.checkPassword(req.body.password)
        if(!match){
            return res.status(400).send("password is incorrect");
        }
        const token=newToken(employee)
        return res.status(200).send({employee,token});



    }
    catch(err){
        return res.status(400).send("error creating")

    }
})
router.get("",async (req,res)=>{
    try{
        let employee=await Employee.find().lean().exec()

        return res.send(employee)

    }
    catch(err){
        return res.status(400).send("error creating")


    }
})
module.exports=router