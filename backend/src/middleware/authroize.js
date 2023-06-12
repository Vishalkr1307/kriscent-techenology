module.exports=(permittedRole)=>{
    return (req,res,next)=>{
        const admin=req.admin
        
        let isAllowed =false
        for(var i=0;i<admin.role.length;i++){
           if(permittedRole.includes(admin.role[i])){
            isAllowed = true
            break
           }
        }
        if(isAllowed){
            return next()
        }
        else{
            return res.status(400).send("you are not allowed")
        }
        
    }
}