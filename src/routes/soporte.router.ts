import { Router } from "express";
import * as soporteController from '../controllers/soportes.controller';

const soporteRouter = Router();

soporteRouter.route("/soportes")
    .post(soporteController.saveSoporte)
    .get(soporteController.listAllSoporte);

export default soporteRouter;