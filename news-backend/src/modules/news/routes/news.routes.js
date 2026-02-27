import { Router } from "express";
import { createNews } from "../controller/news.controller.js";

const newsRoutes = Router();

newsRoutes.post("/", createNews);



export default newsRoutes;