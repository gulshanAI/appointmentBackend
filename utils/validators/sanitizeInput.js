const sanitizeUseFullInput = (req, allowedFields = [], Model = null) => {
  if (!allowedFields.length || Model) {
    allowedFields = Object.keys(Model.schema.paths).filter(
      (field) => !["_id", "__v", "createdAt", "updatedAt"].includes(field)
    );
  }
  Object.keys(req.body).forEach((key) => {
    if (!allowedFields.includes(key)) {
      delete req.body[key];
    }
  });
};
export default sanitizeUseFullInput;
