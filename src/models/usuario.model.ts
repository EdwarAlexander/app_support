import { DataTypes } from "sequelize";
import conexion from '../config/sequelize';
import { hashSync } from "bcrypt";

export enum TipoUsuario {
    ADMIN = "ADMIN",
    CLIENTE = "CLIENTE",
}

export default () => conexion.define(
    "usuario",
    {
        idUsuario: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            field: "id"
        },
        nombreUsuario: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: "nombre"
        },
        passwordUsuario: {
            field: "password",
            type: DataTypes.TEXT,
            allowNull: false,
            set(valor:string){
                const passwordEncriptada = hashSync(valor,10);
                this.setDataValue("passwordUsuario",passwordEncriptada);
            }
        },
        correoUsuario: {
            field: "correo",
            type: DataTypes.STRING(80),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        tipoUsuario: {
            field: "tipo",
            type: DataTypes.ENUM(TipoUsuario.ADMIN, TipoUsuario.CLIENTE),
            defaultValue: TipoUsuario.CLIENTE
        }
    },
    {
        tableName: "usuarios",
        timestamps: false
    }
);