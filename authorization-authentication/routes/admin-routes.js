
import express from "express";
import { LoginUser, RegisterUser } from "../controllers/auth-controller.js";


const adminRoutes = express.Router()

adminRoutes.post('/login', LoginUser);
adminRoutes.post('/register', RegisterUser)

export default adminRoutes;
