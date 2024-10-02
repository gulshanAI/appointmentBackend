import express from "express";
import appointmentRoutes from "./appointment.routes.js";

const apiRouter = express.Router();

apiRouter.use("/appointment", appointmentRoutes);

export default apiRouter;
