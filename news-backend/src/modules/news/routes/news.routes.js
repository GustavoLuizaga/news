import { Router } from "express";
import multer from "multer";
import { createNews, getNewsBySlug, getAllNews, deleteNews } from "../controller/news.controller.js";

const upload = multer({ storage: multer.memoryStorage() });
const newsRoutes = Router();

newsRoutes.get("/", getAllNews);
newsRoutes.get("/:slug", getNewsBySlug);
newsRoutes.post("/", upload.single("image"), createNews);
newsRoutes.delete("/:slug", deleteNews);



export default newsRoutes;