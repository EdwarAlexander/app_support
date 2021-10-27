import express, { Express, json } from 'express';
import equipoRouter from '../routes/equipo.routes';
import estadoRouter from '../routes/estado.routes';
import sedeRouter from '../routes/sede.routes';
import soporteRouter from '../routes/soporte.router';
import ticketRouter from '../routes/ticket.routes';
import tipoNivelRouter from '../routes/tiponivel.routes';
import usuarioRoute from '../routes/usuario.routes';
import connection from './sequelize';

const port_server = Number(process.env.PORT_SERVER);

export default class Server {
    private readonly app: Express;
    private readonly port: number;
    constructor() {
        this.app = express();
        this.port = port_server;
        this.bodyParser();
        this.rutas();
    }

    private bodyParser() {
        this.app.use(json());
    }

    private rutas() {
        this.app.use(estadoRouter);
        this.app.use(equipoRouter);
        this.app.use(sedeRouter);
        this.app.use(soporteRouter);
        this.app.use(ticketRouter);
        this.app.use(tipoNivelRouter);
        this.app.use(usuarioRoute);
    }

    start() {
        this.app.listen(this.port, async () => {
            console.log(`Server Online port:${this.port}`);
            await connection.sync();
            console.log(`Connect data base...!!!`);
        });
    }
}