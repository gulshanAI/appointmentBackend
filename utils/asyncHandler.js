// import mongoose from "mongoose";
// import { errorResponse } from "./responseHandler.js";
// import { CustomError } from "./customErrors.js";

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// export const asyncHandler = (fn) => (req, res, next) => {
//   Promise.resolve(fn(req, res, next)).catch((err) => {
//     if (err instanceof CustomError) {
//       return errorResponse(res, err.message, err.statusCode);
//     }

//     if (err instanceof mongoose.Error.ValidationError) {
//       const errors = Object.keys(err.errors).map((field) => ({
//         field,
//         message: err.errors[field].message,
//       }));
//       return errorResponse(res, errors, 400);
//     }

//     if (err instanceof mongoose.Error.CastError) {
//       return errorResponse(res, "Invalid ID format", 400);
//     }
//     return errorResponse(res, "Server error", 500);
//   });
// };
