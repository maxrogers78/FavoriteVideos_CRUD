// Express
import express from "express";
import config from "./config";
const app = express();
// cors
import cors from "cors";
// Morgan
import morgan from "morgan";
// Routes
import videosRoutes from "./routes/videos.routes";

app.set("port", config.PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(videosRoutes);

export default app;
