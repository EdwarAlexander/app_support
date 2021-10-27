import { DataTypes } from "sequelize";
import conexion from '../config/sequelize';

export default () => conexion.define(
    "tiponiveles",
    {
        tipoNivelId: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        nombreTipoNivel: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: "nombre"
        },
        estadoTipoNivel: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "estado",
            defaultValue: 1
        }

    },
    {
        tableName: "tiposniveles",
        timestamps: false
    }
);