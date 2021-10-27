import { DataTypes } from "sequelize";
import conexion from '../config/sequelize';

export default () => conexion.define(
    "equipos",
    {
        equipoId: {
            field: "id",
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        nombreEquipo: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: "nombre"
        },
        estadoEquipo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "estado",
        },
        usuarioEquipo: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: "usuario"
        }
    },
    {
        tableName: "equipos",
        timestamps: false
    }
);