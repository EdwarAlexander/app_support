import { Router } from "express";
import * as soporteController from '../controllers/soportes.controller';
import { authValidator } from "../middlewares/validator";

const soporteRouter = Router();

soporteRouter.route("/soportes")
    .post(authValidator, soporteController.saveSoporte)
    .get(authValidator, soporteController.listAllSoporte);

export default soporteRouter;