import  express from 'express';
import path from 'path';
import AppRoutes from './routes.config.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.resolve("./src/modules/news/uploads")));
app.use("/", AppRoutes)

export default app;