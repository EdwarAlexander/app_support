import { Exclude, Expose } from "class-transformer";

@Exclude()
export class responseTicketDto {

    @Expose()
    ticketId: string;

    @Expose()
    fechaTicket: Date;

    @Expose()
    ipEquipoTicket: string;

    @Expose()
    tituloTicket: string;

    @Expose()
    descripcionTicket: string;

    @Expose()
    solucionTicket: string;

    @Expose()
    usuarioTicket: string;

    estadoId: string;

    equipoId: string;

    tiponivelId: string;

    sedeId: string;

    soporteId: string;

    @Expose()
    estado: string;

    @Expose()
    equipo: string;

    @Expose()
    sede: string;

    @Expose()
    soporte: string;

    @Expose()
    tiponivele: string;
}