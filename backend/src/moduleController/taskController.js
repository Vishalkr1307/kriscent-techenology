const express=require("express")
const router=express.Router()
const Task=require("..//module/task")
const authentication=require("..//middleware/authenticate")
const authorize=require("..//middleware/authroize")


router.post("",authentication,authorize(["admin"]),async (req,res)=>{
    try{
        let task=await Task.create(req.body)
        console.log(task)
        return res.status(200).send(task)

    }
    catch(err){
        console.log(err)
        return res.status(400).send("error occurred")
    }
})
router.get("",async (req,res)=>{
    try{
        let task=await Task.find().populate("employee_id","email").lean().exec()
       
        return res.status(200).send(task)

    }
    catch(err){
        
        return res.status(400).send("error occurred")
    }
})
router.get("/:id",async (req,res)=>{
    try{
        let task=await Task.findById(req.params.id).populate("employee_id","email").lean().exec()
        return res.status(200).send(task)

    }
    catch(err){
        return res.status(400).send("error occurred")
    }
})
router.delete("/:id",authentication,authorize(["admin"]),async (req,res)=>{
    try{
        let task=await Task.findByIdAndDelete(req.params.id).populate("employee_id","email").lean().exec()
        return res.status(200).send(task)

    }
    catch(err){
        return res.status(400).send("error occurred")
    }
})
router.put("/:id",authentication,authorize(["employee","admin"]),async (req,res)=>{
    try{
        let task=await Task.findByIdAndUpdate(req.params.id,req.body).populate("employee_id","email").lean().exec()
        return res.status(200).send(task)

    }
    catch(err){
        return res.status(400).send("error occurred")
    }
})
module.exports=router