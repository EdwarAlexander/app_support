import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { Soportes } from "../config/models";
import { crearSoporteDto } from "../dtos/request/soporte.dto";


const saveSoporte = async (req:Request,res: Response)=>{
    try {
        const validador = plainToClass(crearSoporteDto,req.body);
        const errores = await validate(validador);
        if(errores.length !== 0){
            const informacion_errores = errores.map((error) => error.constraints);
            return res.status(400).json({
                content: informacion_errores,
                message: "Error al crear el soporte"
            }); 
        }
        const nuevoSoporte = await Soportes.create(validador);
        return res.status(201).json({
            content: nuevoSoporte,
            message: 'Soporte creado'
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear soporte",
            content: error,
        });
    }
}

const listAllSoporte = async (req:Request,res:Response)=>{
    try {
        const soportes = await Soportes.findAll();
        return res.status(200).json({
            content:soportes,
            message: null
        });    
    } catch (error) {
        return res.status(500).json({
            message: "Error al listar soporte",
            content: error,
        });
    }
}

export {
    saveSoporte,
    listAllSoporte
}