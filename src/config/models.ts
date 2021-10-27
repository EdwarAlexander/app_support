import estadosModel from "../models/estados.model";
import tiposnivelesModel from "../models/tiposniveles.model";
import equiposModel from "../models/equipos.model";
import sedesModel from "../models/sedes.model";
import soportesModel from "../models/soportes.model";
import ticketsModel from "../models/tickets.model";
import usuarioModel from "../models/usuario.model";

export const Estados = estadosModel();
export const TiposNiveles = tiposnivelesModel();
export const Equipos = equiposModel();
export const Sedes = sedesModel();
export const Soportes = soportesModel();
export const Tickets = ticketsModel();
export const Usuario = usuarioModel();

Estados.hasMany(Tickets, {
    foreignKey: { name: "estadoId", allowNull: false, field: "idestado" }
});

Tickets.belongsTo(Estados, {
    foreignKey: { name: "estadoId", allowNull: false, field: "idestado" }
});

Equipos.hasMany(Tickets, {
    foreignKey: { name: "equipoId", allowNull: false, field: "idequipo" }
});

Tickets.belongsTo(Equipos, {
    foreignKey: { name: "equipoId", allowNull: false, field: "idequipo" }
});

TiposNiveles.hasMany(Tickets, {
    foreignKey: { name: "tiponivelId", allowNull: false, field: "idtiponivel" }
});

Tickets.belongsTo(TiposNiveles, {
    foreignKey: { name: "tiponivelId", allowNull: false, field: "idtiponivel" }
});

Sedes.hasMany(Tickets, {
    foreignKey: { name: "sedeId", allowNull: false, field: "idsede" }
});

Tickets.belongsTo(Sedes, {
    foreignKey: { name: "sedeId", allowNull: false, field: "idsede" }
});

Soportes.hasMany(Tickets, {
    foreignKey: { name: "soporteId", allowNull: false, field: "idsoporte" }
});

Tickets.belongsTo(Soportes, {
    foreignKey: { name: "soporteId", allowNull: false, field: "idsoporte" }
});