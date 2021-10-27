import { DataTypes } from "sequelize";
import conexion from '../config/sequelize';


export default () => conexion.define(
    "soportes",
    {
        soporteId: {
            primaryKey: true,
            field: "id",
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        nombreSoporte: {
            field: "nombre",
            type: DataTypes.STRING(100),
            allowNull: false
        },
        telefonoSoporte: {
            field: "telefono",
            type: DataTypes.STRING(50),
            allowNull: false
        },
        estadoSoporte: {
            field: "estado",
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usuarioSoporte: {
            field: "usuario",
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    {
        tableName: "soportes",
        timestamps: false
    }
);