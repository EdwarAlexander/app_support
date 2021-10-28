import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { Sedes } from "../config/models";
import { crearSedeDto } from "../dtos/request/sede.dto";


const saveSede = async (req: Request, res: Response) => {
    try {
        const validador = plainToClass(crearSedeDto, req.body);
        const errores = await validate(validador);
        if (errores.length !== 0) {
            const informacion_errores = errores.map((error) => error.constraints);
            return res.status(400).json({
                content: informacion_errores,
                message: "Error al crear el sede"
            });
        }

        const nuevoSede = await Sedes.create(validador);
        return res.status(201).json({
            content: nuevoSede,
            message: 'Equipo creado'
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear sede",
            content: error,
        });
    }
}

const listAllSede = async (req: Request, res: Response) => {
    
    try {
        const sedes = await Sedes.findAll();
        return res.status(200).json({
            content: sedes,
            message: null
        });    
    } catch (error) {
        return res.status(500).json({
            message: "Error al listar sede",
            content: error,
        });
    }
}

export {
    saveSede,
    listAllSede
}