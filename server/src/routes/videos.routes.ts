// Express
import { Router } from "express";
const router = Router();
// Controllers
import { getVideos } from "./videos.controller";

router.get("/videos", getVideos);

export default router;
