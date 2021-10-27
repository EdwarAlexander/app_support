import { Router } from "express";
import * as usuarioController from '../controllers/usuario.controller';

const usuarioRoute = Router();

usuarioRoute.route("/usuarios")
    .post(usuarioController.saveUsuario);
usuarioRoute.post("/login",usuarioController.login);

export default usuarioRoute;