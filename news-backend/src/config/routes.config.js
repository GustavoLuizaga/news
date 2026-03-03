import { Router } from "express";
import  newsRoutes  from "../modules/news/routes/news.routes.js";
import authRouter from "../modules/auth/routes/auth.routes.js";

const AppRoutes = Router();

AppRoutes.get("/", (req, res) => {
  res.send("Hello World!");
});
AppRoutes.use("/news", newsRoutes);
AppRoutes.use("/auth", authRouter);

export default AppRoutes;