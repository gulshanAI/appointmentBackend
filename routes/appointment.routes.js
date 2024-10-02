import express from "express";
import {
  createAppoitment,
  deleteApt,
  getAppointmentList,
  updateAppointment,
} from "../controllers/appointment.controller.js";
import { handleValidationErrors } from "../utils/validators/handleValidation.js";

import {
  validateAppointment,
  validateAppointmentId,
  validateAptUpdate,
} from "../utils/validators/appointment.js";

const router = express.Router();

router.get("/", handleValidationErrors, getAppointmentList);
router.post("/", validateAppointment, handleValidationErrors, createAppoitment);
router.delete("/:id", validateAppointmentId, handleValidationErrors, deleteApt);
router.patch(
  "/:id",
  validateAptUpdate,
  handleValidationErrors,
  updateAppointment
);
export default router;
