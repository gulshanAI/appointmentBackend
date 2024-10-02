import Appointment from "../models/appointment.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { NotFoundError } from "../utils/customErrors.js";
import queryDatabase from "../utils/fetchData.js";
import { successResponse } from "../utils/responseHandler.js";

export const getAppointmentList = asyncHandler(async (req, res, next) => {
  let query = Appointment.find();
  const data = await queryDatabase(Appointment, query, req.query);
  return successResponse(res, data);
});

export const createAppoitment = asyncHandler(async (req, res, next) => {
  const appt = await Appointment.create(req.body);
  return successResponse(res, appt, 201);
});

export const updateAppointment = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const apt = await Appointment.findByIdAndUpdate(id, req.body, { new: true });
  if (!apt) {
    throw new NotFoundError("Appointment not found");
  }
  return successResponse(res, apt, 201);
});

export const deleteApt = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const apt = await Appointment.findByIdAndDelete(id);
  if (!apt) {
    throw new NotFoundError("Appointment not found");
  }
  return successResponse(res, "", 204);
});
