import { Prisma, PrismaClient } from "@prisma/client"

const prisma=new PrismaClient();


export const createUser=async (email,password)=>{

    try{

        const user=await prisma.user.create({data:{
            email:email,
            password:password
        }})
        return user;
    }catch(e){

        console.log(e);
        throw new Error("User already exists");
    }
}

export const getUserByEmail=async(email)=>{
    try{
        console.log(`email ${email}`);
        const user= await prisma.user.findFirst({where:{
            email:email,
            
        }})
        
        
        return user;
    }
    catch(e){

        console.log("err");
        throw new Error("Couldn't find user!");
    }
   
}

export const updateUserProfile=async(data,id)=>{

    try{
        const user=await prisma.user.update ({
            where:{
                id:id
            },
            data:{
                ...data
            }
        })
        return user;
    }
    catch(e){
        console.error(e);
    }
}

