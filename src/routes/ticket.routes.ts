import { Router } from "express";
import * as ticketController from '../controllers/tickets.controller';
import { authValidator } from "../middlewares/validator";

const ticketRouter = Router();

ticketRouter.route("/tickets")
    .post(authValidator, ticketController.saveTicket)
    .get(authValidator, ticketController.listAllTicket);

export default ticketRouter;
