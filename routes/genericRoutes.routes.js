import express from "express";
import { handleValidationErrors } from "../utils/validators/handleValidation.js";
// import authMiddleware from "../middlewares/authMiddleware.js";
import { queryDbValidation } from "../utils/validators/queryDbValidation.js";
import paramIdValidate from "../utils/validators/paramId.js";

export const createRoutes = (
  Controller,
  validationMiddleware = {
    post: [],
    put: [],
  }
) => {
  const router = express.Router();

  router.get("/", queryDbValidation, handleValidationErrors, Controller.getAll);
  router.post(
    "/",
    validationMiddleware.post,
    handleValidationErrors,
    Controller.create
  );
  router.delete(
    "/:id",
    paramIdValidate,
    handleValidationErrors,
    Controller.delete
  );
  router.put(
    "/:id",
    validationMiddleware.put,
    handleValidationErrors,
    Controller.update
  );

  return router;
};

export default createRoutes;
