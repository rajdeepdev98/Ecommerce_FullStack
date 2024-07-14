import { validateToken } from "../utils/tokenization.js";

export const auth=(req,res,next)=>{
    console.log("middleware");

    const authorization=req?.headers?.authorization;
    let parsedToken;
    if(authorization){
        parsedToken=authorization.split("Bearer ")[1];
        console.log(`parsed token ${parsedToken}`);
    }
    
    let user={};
    let authenticated=false;
    let login=false;
    try {
        console.log(typeof parsedToken);
        console.log(`parsed token ${parsedToken}`);
        if(parsedToken===undefined)console.log("lol1");
      if (parsedToken!=null && parsedToken!==undefined) {
        const validated = validateToken(parsedToken);
        user = validated;
        authenticated=true;
      }
      if(req.path=="/signup" || req.path=="/login"){
        login=true;
        
      }
      
     
    } catch (e) {


        res.status(401).json({message:"Unauthorized"});
    }
   if(login){


        if(authenticated)res.redirect("/home");
        else next();
   }
   else{
    if(authenticated){
        console.log(`user ${user}`);
        req.user=user;
        next();
    }
    else{
        res.status(401).json({message:"Unauthorized"});
    }
   }
    
}