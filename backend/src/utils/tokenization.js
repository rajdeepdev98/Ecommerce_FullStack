import jwt from "jsonwebtoken";

import 'dotenv/config';
export const tokenize=(email)=>{

    const token=jwt.sign({email:email},process.env.JWT_SECRET,{expiresIn:60*60});
    return token;
}

export  const validateToken=(token)=>{
    try {
      const decoded = jwt.verify(token,process.env.JWT_SECRET);
      return decoded;
    } catch (e) {

        console.error(e.message);
        throw new Error(e.message);
    }
}