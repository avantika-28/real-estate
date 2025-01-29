import express from "express"
import { signin, signup } from "../controllers/auth.controller.js"

const authRouter = new express.Router()

authRouter.post("/signup",signup)
authRouter.post("/signin",signin)


export  default authRouter