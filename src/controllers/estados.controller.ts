import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Estados } from "../config/models";
import { crearEstadoDto } from "../dtos/request/estado.dto";

const saveEstado = async (req: Request, res: Response) => {
    try {
        const validador = plainToClass(crearEstadoDto, req.body);
        const errores = await validate(validador);
        if (errores.length !== 0) {
            const informacion_errores = errores.map((error) => error.constraints);
            return res.status(400).json({
                content: informacion_errores,
                message: "Error al crear el estado"
            });
        }
        const nuevoEstado = await Estados.create(validador);
        return res.status(201).json({
            content: nuevoEstado,
            message: 'Estado creado'
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear Estado",
            content: error,
        });
    }
}

const listAllEstado = async (req: Request, res: Response) => {
    try {
        const estados = await Estados.findAll();
        return res.status(200).json({
            content: estados,
            message: null
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al listar Estado",
            content: error,
        });
    }
}

export {
    saveEstado,
    listAllEstado
}