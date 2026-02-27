import { Router } from "express";

const AppRoutes = Router();

AppRoutes.get("/", (req, res) => {
  res.send("Hello World!");
});

export default AppRoutes;