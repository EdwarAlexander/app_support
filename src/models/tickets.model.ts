import { DataTypes } from "sequelize";
import conexion from '../config/sequelize';

export default () => conexion.define(
    "tickets",
    {
        ticketId: {
            field: "id",
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        fechaTicket: {
            field: "fecha",
            type: DataTypes.DATE,
            allowNull: false
        },
        ipEquipoTicket: {
            field: "ipequipo",
            type: DataTypes.STRING(20),
            allowNull: false
        },
        /*idEquipoTicket: {
            field: "idequipo",
            type: DataTypes.UUID,
            allowNull: false
        },*/
        tituloTicket: {
            field: "titulo",
            type: DataTypes.STRING(50),
            allowNull: false
        },
        descripcionTicket: {
            field: "descripcion",
            type: DataTypes.TEXT,
            allowNull: false
        },
        /*idNivelTicket: {
            field: "idnivel",
            type: DataTypes.UUID
        },
        idSoporteTicket: {
            field: "idsoporte",
            type: DataTypes.UUID
        },*/
        solucionTicket: {
            field: "solucion",
            type: DataTypes.TEXT,
            allowNull: false
        },
        usuarioTicket: {
            field: "usuario",
            type: DataTypes.STRING(100),
            allowNull: false
        },
        /*idEstadoTicket: {
            field: "idestado",
            type: DataTypes.UUID
        }*/
    },
    {
        tableName: "tickets",
        timestamps: false
    }
);