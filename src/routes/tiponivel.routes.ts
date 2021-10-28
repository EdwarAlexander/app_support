import { Router } from "express";
import * as tipoNivelController from '../controllers/tiposniveles.controller';
import { authValidator } from "../middlewares/validator";

const tipoNivelRouter = Router();

tipoNivelRouter.route("/tiposniveles")
    .post(authValidator, tipoNivelController.saveTiposNiveles)
    .get(authValidator, tipoNivelController.listAllTipoNiveles);

export default tipoNivelRouter;