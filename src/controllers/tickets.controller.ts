import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { Tickets, Estados, Equipos, Sedes, Soportes, TiposNiveles } from "../config/models";
import { creaTicketDto } from "../dtos/request/ticket.dto";
import { responseTicketDto } from "../dtos/response/ticket.dto";


const saveTicket = async (req: Request, res: Response) => {
    try {
        const validador = plainToClass(creaTicketDto, req.body);
        const errores = await validate(validador);
        if (errores.length !== 0) {
            const informacion_errores = errores.map((error) => error.constraints);
            return res.status(400).json({
                content: informacion_errores,
                message: "Error al crear el tickets"
            });
        }
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
        return res.status(201).json({
            content: nuevoTicket,
            message: 'Ticket creado'
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear el ticket",
            content: error,
        });
    }
}

const listAllTicket = async (req: Request, res: Response) => {
    try {
        const tickets = await Tickets.findAll({
            include: [
                {
                    model: Estados,
                    attributes: ["estadoId", "nombreEstado"]
                },
                {
                    model: Equipos,
                    attributes: ["equipoId", "nombreEquipo"]
                },
                {
                    model: Sedes
                },
                {
                    model: Soportes
                },
                {
                    model: TiposNiveles
                }
            ]
        });
        const response = plainToClass(responseTicketDto, tickets);
        return res.status(200).json({
            content: response,
            message: null
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al listar tickets",
            content: error,
        });
    }
}

const searchTicket = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const ticket = await Tickets.findOne({
            include:[
                {
                    model: Estados,
                    attributes: ["estadoId", "nombreEstado"]
                },
                {
                    model: Equipos,
                    attributes: ["equipoId", "nombreEquipo"]
                },
                {
                    model: Sedes
                },
                {
                    model: Soportes
                },
                {
                    model: TiposNiveles
                }
            ],
            where: { ticketId: id }
        });
        const response = plainToClass(responseTicketDto, ticket);
        return res.status(200).json({
            content: response,
            message: null
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al listar tickets",
            content: error,
        });
    }
}
export {
    saveTicket,
    listAllTicket,
    searchTicket
}