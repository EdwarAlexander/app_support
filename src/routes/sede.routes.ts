import { Router } from "express";
import * as sedeController from "../controllers/sedes.controller";

const sedeRouter = Router();

sedeRouter.route("/sedes")
    .post(sedeController.saveSede)
    .get(sedeController.listAllSede);

export default sedeRouter;