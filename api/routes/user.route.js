import express from "express"
import { test } from "../controllers/user.controller.js"

const userRouter = new express.Router()

userRouter.get("/test",test)

export  default userRouter