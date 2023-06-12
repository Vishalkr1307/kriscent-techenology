const jwt=require("jsonwebtoken")
require("dotenv").config()
const verifyToken=(token)=>{
    return new Promise ((resolve, reject)=>{
        jwt.verify(token,process.env.PRIVATE_KEY,function (err,decoded){
            if(err){
                reject(err)
            }
            resolve(decoded)
        })
    })
}
module.exports=async  (req,res,next)=>{
    
 

       if(!req?.headers?.authorization) return  res.status(400).send("please provide authorization token")
       const bearerToken = req?.headers?.authorization
       if(!bearerToken.startsWith("Bearer")) return res.status(400).send("please provide bearer token")
       const token=bearerToken.split(" ")[1]
       let admin;
       try{
        admin=await verifyToken(token)

       }
       catch(err){
        return res.status(400).send("error occurred")
       }
       req.admin=admin.user
       
       
       next()
       

       

       
    
    
}