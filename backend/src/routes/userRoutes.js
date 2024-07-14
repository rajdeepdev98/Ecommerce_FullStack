// import { signUp } from "../controller/user/userController.js";

import express from  "express";
import { dummy, home, login, signUp } from "../controller/user/userController.js";
import { auth } from "../middleware/auth.js";
// const { signUp } = require("../controller/user/userController");
// const { signUp } = require("../controller/user/userController");
// import { signUp } from "../controller/user/userController";
const router=express.Router();

router.use("/",auth);
router.post("/signup",signUp);
router.post("/login",login);
router.get("/dummy",dummy);
router.get("/home",home);

export {router as userRouter};