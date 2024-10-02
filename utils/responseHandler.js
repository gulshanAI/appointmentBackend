export const successResponse = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    status: true,
    data: data,
  });
};

export const errorResponse = (res, error, statusCode = 500) => {
  if (typeof error === "string") {
    return res.status(statusCode).json({
      status: false,
      error: {
        message: error,
      },
    });
  } else {
    return res.status(statusCode).json({
      status: false,
      error: error,
    });
  }
};
