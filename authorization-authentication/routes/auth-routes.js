
import express from "express";
import { LoginUser, RegisterUser } from "../controllers/auth-controller.js";


const authRoutes = express.Router()

authRoutes.post('/login', LoginUser);
authRoutes.post('/register', RegisterUser)

export default authRoutes;


