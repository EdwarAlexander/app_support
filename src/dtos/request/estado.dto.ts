import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class crearEstadoDto {
    @IsString()
    @IsNotEmpty()
    nombreEstado: string;

    @IsNumber()
    estado: number
}