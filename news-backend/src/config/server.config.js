import  express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import AppRoutes from './routes.config.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "..", "modules", "news", "uploads")));
app.use("/", AppRoutes)

export default app;