import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { Equipos } from "../config/models";
import { crearEquipoDto } from "../dtos/request/equipo.dto";


const saveEquipo = async (req: Request, res: Response) => {
    try {
        const validador = plainToClass(crearEquipoDto, req.body);
        const errores = await validate(validador);
        if (errores.length !== 0) {
            const informacion_errores = errores.map((error) => error.constraints);
            return res.status(400).json({
                content: informacion_errores,
                message: "Error al crear el equipo"
            });
        }
        const nuevoEquipo = await Equipos.create(validador);
        return res.status(201).json({
            content: nuevoEquipo,
            message: 'Equipo creado'
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear equipo",
            content: error,
        });
    }
}

const listAllEquipo = async (req: Request, res: Response) => {
    try {
        const equipos = await Equipos.findAll();
        return res.status(200).json({
            content: equipos,
            message: null
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al listar equipos",
            content: error,
        });
    }
}

export {
    saveEquipo,
    listAllEquipo
}