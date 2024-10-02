import { errorResponse } from "../utils/responseHandler.js";

import mongoose from "mongoose";

const errorHandler = (err, req, res, next) => {
  if (
    err instanceof mongoose.Error.ValidationError ||
    err.name === "ValidationError"
  ) {
    const errors = Object.values(err.errors).map((e) => ({
      field: e.path,
      message: e.message,
    }));
    return errorResponse(
      res,
      { message: "Validation Error", errors: errors },
      400
    );
  }
  // Check for Mongoose cast error
  if (err instanceof mongoose.Error.CastError || err.name === "CastError") {
    return errorResponse(res, { message: "Invalid ID format" }, 400);
  }
  // Check for Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    const value = err.keyValue[field];
    return errorResponse(
      res,
      { message: `Duplicate value for field: ${field}`, field, value },
      400
    );
  }

  if (err.statusCode) {
    if (err.errors) {
      return errorResponse(
        res,
        { message: err.message, errors: err.errors },
        err.statusCode
      );
    }
    return errorResponse(res, err.message, err.statusCode);
  }
  console.log(err);
  return errorResponse(res, "Server error", 500);
};

// const errorHandler = (err, req, res, next) => {
//   if (err.statusCode) {
//     if (err.errors) {
//       return errorResponse(
//         res,
//         { message: err.message, errors: err.errors },
//         err.statusCode
//       );
//     }
//     return errorResponse(res, err.message, err.statusCode);
//   }
//   return errorResponse(res, "Server error", 500);
// };

export default errorHandler;
