import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { Tickets, Estados, Equipos } from "../config/models";
import { creaTicketDto } from "../dtos/request/ticket.dto";
import { responseTicketDto } from "../dtos/response/ticket.dto";


const saveTicket = async (req: Request, res: Response) => {
    const validador = plainToClass(creaTicketDto, req.body);
    const errores = await validate(validador);
    if (errores.length !== 0) {
        const informacion_errores = errores.map((error) => error.constraints);
        return res.status(400).json({
            content: informacion_errores,
            message: "Error al crear el tickets"
        });
    }
    //const nuevoTicket = await Tickets.create(validador);
    const nuevoTicket = await Tickets.create({
        fechaTicket: validador.fechaTicket,
        ipEquipoTicket: validador.ipEquipoTicket,
        tituloTicket: validador.tituloTicket,
        descripcionTicket: validador.descripcionTicket,
        solucionTicket: validador.solucionTicket,
        usuarioTicket: validador.usuarioTicket,
        estadoId: validador.idEstadoTicket,
        equipoId: validador.idEquipoTicket,
        sedeId: validador.idSedeTicket,
        soporteId: validador.idSoporteTicket,
        tiponivelId: validador.idNivelTicket
    });
    console.log(validador);
    return res.status(201).json({
        content: nuevoTicket,
        message: 'Ticket creado'
    });
}

const listAllTicket = async (req: Request, res: Response) => {
    const tickets = await Tickets.findAll({
        include: [
            {
                model: Estados
            },
            {
                model: Equipos
            }
        ]
    });
    const response = plainToClass(responseTicketDto, tickets);
    return res.status(200).json({
        //content: tickets,
        content: response,
        message: null
    });
}
export {
    saveTicket,
    listAllTicket
}