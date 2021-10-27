import { Router } from "express";
import * as ticketController from '../controllers/tickets.controller';

const ticketRouter = Router();

ticketRouter.route("/tickets")
    .post(ticketController.saveTicket)
    .get(ticketController.listAllTicket);

export default ticketRouter;
