import { Router } from "express";
import { healthController } from "../controllers/health.controller.js";

const health = Router()

health.get('/', healthController)

export default health