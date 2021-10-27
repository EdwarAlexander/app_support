import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class crearSoporteDto {

    @IsString()
    @IsNotEmpty()
    nombreSoporte: string;

    @IsString()
    @IsNotEmpty()
    telefonoSoporte: string;

    @IsNumber()
    estadoSoporte: string;

    @IsString()
    @IsNotEmpty()
    usuarioSoporte: string;
}