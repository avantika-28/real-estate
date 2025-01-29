import express from "express"
import { signup } from "../controllers/auth.controller.js"

const authRouter = new express.Router()

authRouter.post("/signup",signup)

export  default authRouter