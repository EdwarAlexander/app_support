import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class crearSedeDto{

    @IsString()
    @IsNotEmpty()
    nombreSede:string;

    @IsNumber()
    estadoSede:number;

    @IsString()
    @IsNotEmpty()
    usuarioSede:string;
}