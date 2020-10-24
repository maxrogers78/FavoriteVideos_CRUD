// Express
import { Router } from "express";
const router = Router();
// Controllers
import * as videoCtrl from "./videos.controller";

router.get("/videos", videoCtrl.getVideo);
router.get("/videos/:id", videoCtrl.getVideo);

router.post("/videos", videoCtrl.createVideo);

router.delete("/videos/:id", videoCtrl.deleteVideo);

router.put("/videos/:id", videoCtrl.updateVideo);

export default router;
