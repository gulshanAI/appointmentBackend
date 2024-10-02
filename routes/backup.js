// import express from "express";
// import { handleValidationErrors } from "../utils/validators/handleValidation.js";

import ClientController from "../controllers/client/clients.controller.js";
import {
  validateClient,
  // validateClientId,
  validateClientUpdate,
} from "../utils/validators/client.js";
// import authMiddleware from "../middlewares/authMiddleware.js";
// import { queryDbValidation } from "../utils/validators/queryDbValidation.js";
import createRoutes from "./genericRoutes.routes.js";

// const router = express.Router();

const productRoutes = createRoutes(ClientController, {
  post: [validateClient],
  put: [validateClientUpdate],
});
export default productRoutes;

// router.get(
//   "/",
//   authMiddleware,
//   queryDbValidation,
//   handleValidationErrors,
//   ClientController.getAll
// );
// router.post(
//   "/",
//   authMiddleware,
//   validateClient,
//   handleValidationErrors,
//   ClientController.create
// );
// router.delete(
//   "/:id",
//   authMiddleware,
//   validateClientId,
//   handleValidationErrors,
//   ClientController.delete
// );
// router.put(
//   "/:id",
//   authMiddleware,
//   validateClientUpdate,
//   handleValidationErrors,
//   ClientController.update
// );
// export default router;
