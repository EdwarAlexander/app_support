import { Router } from "express";
import * as sedeController from "../controllers/sedes.controller";
import { authValidator } from "../middlewares/validator";

const sedeRouter = Router();

sedeRouter.route("/sedes")
    .post(authValidator, sedeController.saveSede)
    .get(authValidator, sedeController.listAllSede);

export default sedeRouter;