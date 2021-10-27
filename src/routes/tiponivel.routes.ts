import { Router } from "express";
import * as tipoNivelController from '../controllers/tiposniveles.controller';

const tipoNivelRouter = Router();

tipoNivelRouter.route("/tiposniveles")
    .post(tipoNivelController.saveTiposNiveles)
    .get(tipoNivelController.listAllTipoNiveles);

export default tipoNivelRouter;