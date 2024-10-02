import { param } from "express-validator";

const paramIdValidate = [
  param("id").isMongoId().withMessage("Invalid Param ID"),
  (req, res, next) => {
    next();
  },
];

export default paramIdValidate;
