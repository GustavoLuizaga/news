import { loginUser, logoutUser } from "../controller/auth.controller.js";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", loginUser);
authRouter.post("/logout", logoutUser);