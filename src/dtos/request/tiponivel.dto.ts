import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class crearTipoNivelDto{

    @IsString()
    @IsNotEmpty()
    nombreTipoNivel: string;

    @IsNumber()
    estadoTipoNivel: number;
}