// import { createUserSchema }  "../../utils/validators/userValidators";


// import { createUserSchema } from "src/utils/validators/userValidators";
// const {createUserSchema}=require("../../utils/validators/userValidators");




 
//  const userService=require("../../service/userService")
// import userService from "../../service/userService"
import * as userService from "../../service/userService.js";
import { matchPassword } from "../../utils/matchPassword.js";
import { tokenize } from "../../utils/tokenization.js";
import { createUserSchema, userLoginSchema } from "../../utils/validators/userValidators.js";

 export const signUp=async (req,res,next)=>{

    const body=req.body;
    
    const validResult=createUserSchema.safeParse(body);
    console.log(validResult.data);
    if(validResult.success){
        try{

        const user=await userService.createUser(validResult.data.email,validResult.data.password);
        res.status(201).json({message:"User created successfully"});
        }catch(e){
            console.error(e);
            res.status(400).json({message:"User already exists"})
        }

    }
    else{
        res.status(400).json({message:validResult.error.message})

    }
    
  


 }
 export const login=async (req,res,next)=>{

    const body=req.body;
    console.log(body);
    const validBody=await userLoginSchema.safeParse(body);
    if(validBody.success){
        console.log("lol");
        try{
        const user=await userService.getUserByEmail(validBody.data.email);
        console.log("user");
        console.log(user);
        if(user==null){
            res.status(400).json({message:"User not found"});
        }
        else if(!matchPassword(validBody.data.password,user.password)){
            res.status(400).json({message:"Wrong password!"})
        }
        else{
            const token=tokenize(validBody.data.email);
            res.status(200).json({message:"Logged in successfully",
                token:`Bearer ${token}`
            })
        }

        }
        catch(e){

            res.status(400).json({message:e.message()});

        }


    }else{
            res.status(400).json({message:validBody.error.message})

    }

 } 
 export const dummy=async(req,res,next)=>{

    res.status(200).json({message:"This is an authenticated request"});
 }

 export const home=async (req,res,next)=>{

    res.status(200).json({message:"Home"});
 }
