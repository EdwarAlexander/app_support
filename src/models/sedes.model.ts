import { DataTypes } from "sequelize";
import conexion from "../config/sequelize";

export default () => conexion.define(
    "sedes",
    {
        sedesId: {
            field: "id",
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        nombreSede: {
            field: "nombre",
            type: DataTypes.STRING(100),
            allowNull: false
        },
        estadoSede: {
            field: "estado",
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usuarioSede:{
            field:"usuario",
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    {
        tableName:"sedes",
        timestamps:false
    }
);