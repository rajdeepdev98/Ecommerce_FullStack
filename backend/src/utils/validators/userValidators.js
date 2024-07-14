
// const z;
import {z} from "zod";
import { MIN_LENGTH_ERROR } from "../Constants.js";
// import { MIN_LENGTH_ERROR } from "../Constants";

export const createUserSchema=z.object({
    email:z.string().email(),
    password:z.string().min(5,{message:MIN_LENGTH_ERROR})
});

export const userLoginSchema=z.object({
    email:z.string().email(),
    password:z.string()

})

 