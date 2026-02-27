import  express from 'express';
import AppRoutes from './routes.config.js';


const app = express();

app.use(express.json());
app.use("/", AppRoutes)

export default app;