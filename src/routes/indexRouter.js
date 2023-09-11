import { Router } from "express";
import userRouter from "./loginRouter.js";
import homeRouter from "./homeRouter.js";
import health from "./healthRouter.js";


const routers = Router()

routers.use(health)
routers.use(userRouter)
routers.use(homeRouter)

export default routers