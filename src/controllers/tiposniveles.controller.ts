import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { TiposNiveles } from "../config/models";
import { crearTipoNivelDto } from "../dtos/request/tiponivel.dto";


const saveTiposNiveles = async (req: Request, res: Response) => {
    try {
        const validador = plainToClass(crearTipoNivelDto, req.body);
        const errores = await validate(validador);
        if (errores.length !== 0) {
            const informacion_errores = errores.map((error) => error.constraints);
            return res.status(400).json({
                content: informacion_errores,
                message: "Error al crear el tipo nivel"
            });
        }
        const nuevoTipoNivel = await TiposNiveles.create(validador);
        return res.status(201).json({
            content: nuevoTipoNivel,
            message: 'Soporte creado'
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear tipo",
            content: error,
        });
    }
}

const listAllTipoNiveles = async (req: Request, res: Response) => {
    try {
        const tiponiveles = await TiposNiveles.findAll();
        return res.status(200).json({
            content: tiponiveles,
            message: null
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al listar tipo",
            content: error,
        });
    }
}

export {
    saveTiposNiveles,
    listAllTipoNiveles
}