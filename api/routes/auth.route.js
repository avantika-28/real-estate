import express from "express"
import { google, signin, signup } from "../controllers/auth.controller.js"

const authRouter = new express.Router()

authRouter.post("/signup",signup)
authRouter.post("/signin",signin)
authRouter.post("/google",google)



export  default authRouter