import { IsDate, IsNotEmpty, IsString, IsUUID } from "class-validator";


export class creaTicketDto{

    //@IsDate()
    @IsString()
    fechaTicket: string;

    @IsString()
    @IsNotEmpty()
    ipEquipoTicket: string;

    @IsUUID("4")
    idEquipoTicket: number;

    @IsNotEmpty()
    tituloTicket:string;

    @IsNotEmpty()
    descripcionTicket:string;

    @IsUUID("4")
    idNivelTicket:number;

    @IsUUID("4")
    idSoporteTicket:number;

    //@IsNotEmpty()
    solucionTicket:string;

    @IsNotEmpty()
    usuarioTicket:string;

    @IsUUID("4")
    idEstadoTicket:number;

    @IsUUID("4")
    idSedeTicket:number;
}