import { Exclude, Expose } from "class-transformer";

@Exclude()
export class responseUsuarioDto {

    @Expose()
    idUsuario: string;

    @Expose()
    nombreUsuario: string;

    @Expose()
    correoUsuario: string;

    @Expose()
    tipoUsuario: string;

    @Expose()
    jwtUsuario: string;

    usuarioPassword: string;
}