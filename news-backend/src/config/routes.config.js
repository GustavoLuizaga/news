import { Router } from "express";
import { newsRoutes } from "../modules/news/routes/news.routes.js";

const AppRoutes = Router();

AppRoutes.get("/", (req, res) => {
  res.send("Hello World!");
});
AppRoutes.use("/news", newsRoutes);

export default AppRoutes;