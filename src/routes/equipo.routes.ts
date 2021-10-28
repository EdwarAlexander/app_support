import { Router } from "express";
import * as equipoController from '../controllers/equipos.controller';
import { authValidator } from "../middlewares/validator";


const equipoRouter = Router();

equipoRouter
    .route("/equipos")
    .post(authValidator, equipoController.saveEquipo)
    .get(authValidator, equipoController.listAllEquipo);


export default equipoRouter;