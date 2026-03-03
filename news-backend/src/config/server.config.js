import  express from 'express';
import path from 'path';
import AppRoutes from './routes.config.js';


const app = express();

app.use(express.json());
app.use("/uploads", express.static(path.resolve("./uploads")));
app.use("/", AppRoutes)

export default app;