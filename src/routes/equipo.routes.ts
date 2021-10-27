import { Router } from "express";
import * as equipoController from '../controllers/equipos.controller';


const equipoRouter = Router();

equipoRouter
    .route("/equipos")
    .post(equipoController.saveEquipo)
    .get(equipoController.listAllEquipo);

export default equipoRouter;