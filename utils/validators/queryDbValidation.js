import { query } from "express-validator";

export const queryDbValidation = [
  query("filter").optional(),
  // .isString()
  // .customSanitizer((value) => {
  //   try {
  //     return JSON.parse(value);
  //   } catch (e) {
  //     return {};
  //   }
  // })
  query("sort").optional().isString(),
  query("fields").optional().isString(),
  query("populate").optional().isString(),
  query("page").optional().isInt({ min: 1 }).toInt(),
  query("limit").optional().isInt({ min: 1 }).toInt(),
  (req, res, next) => {
    next();
  },
];
