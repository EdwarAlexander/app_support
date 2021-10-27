import { DataTypes } from 'sequelize';
import conexion from '../config/sequelize';

export default () => conexion.define(
    "estados",
    {
        estadoId: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            field:"id"
            
        },
        nombreEstado: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: "nombre"
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "estado",
            defaultValue: 1
        }
    },
    {
        tableName: "estados",
        timestamps:false
    }
);