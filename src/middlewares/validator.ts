import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Model } from "sequelize";
import { Usuario } from "../config/models";

const jwtToken = String(process.env.JWT_TOKEN);

export interface RequestUser extends Request {
    usuario?: Model;
}

export const authValidator = async (req: RequestUser, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return res.status(401).json({
            message: "se necesita un token para esta petición",
            content: null
        });
    }

    const token = req.headers.authorization.split(" ")[1];
    try {
        const payload = verify(token, jwtToken);
        if (typeof payload === "object") {
            const usuario = await Usuario.findByPk(payload.idUsuario, {
                attributes: { exclude: ["passwordUsuario"] }
            });
            if (!usuario) {
                return res.status(400).json({
                    message: "Usuario no existe en la base de datos",
                    content: null
                });
            }
            req.usuario = usuario;
        }
        next();
    } catch (error) {
        if (error instanceof Error) {
            return res.status(401).json({
                message: error.message,
                content: null
            });
        }
    }

}