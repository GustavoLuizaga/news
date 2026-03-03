import { Router } from "express";
import { createNews,getNewsBySlug, getAllNews, deleteNews } from "../controller/news.controller.js";

const newsRoutes = Router();

newsRoutes.get("/", getAllNews);
newsRoutes.get("/:slug", getNewsBySlug);
newsRoutes.post("/", createNews);
newsRoutes.delete("/:slug", deleteNews);



export default newsRoutes;