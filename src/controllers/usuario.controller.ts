import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { Usuario } from "../config/models";
import { crearUsuarioDto } from "../dtos/request/usuario.dto";
import { responseUsuarioDto } from "../dtos/response/usuario.dto";

import { sign, SignOptions } from "jsonwebtoken";
import { LoginDto } from "../dtos/request/login.dto";
import { compareSync } from "bcrypt";

const tokenOptions: SignOptions = {
    expiresIn: "1h"
}

interface Payload {
    nombreUsuario: string;
    idUsuario: string;
    tipoUsuario: string;
    correoUsuario: string;
}

const jwtToken = String(process.env.JWT_TOKEN);

const saveUsuario = async (req: Request, res: Response) => {
    try {
        const data = plainToClass(crearUsuarioDto, req.body);
        const validacion = await validate(data);
        if (validacion.length !== 0) {
            const mensajes = validacion.map((error) => error.constraints);
            return res.status(400).json({
                content: mensajes,
                message: "Error en los valores"
            });
        }
        const usuarioEncontrado = await Usuario.findOne({
            where: { correoUsuario: req.body.correoUsuario }
        });
        if (usuarioEncontrado) {
            return res.status(400).json({
                content: null,
                message: "Usuario ya existe en la base de datos"
            });
        }
        const nuevoUsuario = await Usuario.create(data);

        const payload: Payload = {
            idUsuario: nuevoUsuario.getDataValue("idUsuario"),
            nombreUsuario: nuevoUsuario.getDataValue("nombreUsuario"),
            tipoUsuario: nuevoUsuario.getDataValue("tipoUsuario"),
            correoUsuario: nuevoUsuario.getDataValue("correoUsuario")
        }

        const jwt = sign(payload, jwtToken, tokenOptions);

        const content = plainToClass(responseUsuarioDto, {
            ...nuevoUsuario.toJSON(),
            jwtUsuario: jwt
        });

        return res.status(201).json({
            content,
            message: "Usuario creado"
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al crear el usuario",
            content: error,
        });
    }
}

const login = async (req: Request, res: Response) => {
    try {
        const validador = plainToClass(LoginDto, req.body);
        const resultado = await validate(validador);
        if (resultado.length !== 0) {
            const mensajes = resultado.map((error) => error.constraints);
            return res.status(400).json({
                content: mensajes,
                message: "información incorrecta"
            });
        }
        const usuarioEncontrado = await Usuario.findOne({
            where: { correoUsuario: validador.correo }
        });
        if (!usuarioEncontrado) {
            return res.status(400).json({
                message: "Usuario incorrecto",
                content: null
            });
        }
        const resultado_password = compareSync(validador.password, usuarioEncontrado.getDataValue("passwordUsuario"));
        if (!resultado_password) {
            return res.status(400).json({
                message: "Usuario incorrecto",
                content: null
            });
        }
        const payload: Payload = {
            idUsuario: usuarioEncontrado.getDataValue("idUsuario"),
            nombreUsuario: usuarioEncontrado.getDataValue("nombreUsuario"),
            tipoUsuario: usuarioEncontrado.getDataValue("tipoUsuario"),
            correoUsuario: usuarioEncontrado.getDataValue("correoUsuario")
        }
        const jwt = sign(payload, jwtToken, tokenOptions);
        return res.status(200).json({
            content: jwt,
            message: null
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al loguearse",
            content: error,
        });
    }
}

export {
    saveUsuario,
    login
}