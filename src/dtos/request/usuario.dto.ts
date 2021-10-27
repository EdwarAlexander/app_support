import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";
import { TipoUsuario } from '../../models/usuario.model';

export class crearUsuarioDto {

    @IsString()
    @IsNotEmpty()
    nombreUsuario: string;

    @IsString()
    @IsNotEmpty()
    @Matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#&?])[A-Za-z\d@$!%*#&?]{6,}/,
        {
            message: "Password invalida, debe de ser al menos una mayus, una minus, un numero y un caracter especial y no menor de 6 caracteres"
        }
    )
    passwordUsuario: string;

    @IsEmail()
    @IsNotEmpty()
    correoUsuario: string;

    @IsOptional()
    @IsEnum(TipoUsuario)
    tipoUsuario?: TipoUsuario;
}