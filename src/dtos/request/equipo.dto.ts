import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class crearEquipoDto {

    @IsString()
    @IsNotEmpty()
    nombreEquipo: string;

    @IsNumber()
    estadoEquipo: number;

    @IsString()
    @IsNotEmpty()
    usuarioEquipo: string;

}