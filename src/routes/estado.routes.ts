import { Router } from "express";
import * as estadoController from "../controllers/estados.controller";
import { authValidator } from "../middlewares/validator";

const estadoRouter = Router();

estadoRouter.route("/estados")
    .post(authValidator, estadoController.saveEstado)
    .get(authValidator, estadoController.listAllEstado);

export default estadoRouter;
