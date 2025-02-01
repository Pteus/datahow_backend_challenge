import {Router} from "express";
import {logRequest} from "../controllers/logsController";

const router = Router();

router.post('/', logRequest);

export default router;