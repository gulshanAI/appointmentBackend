class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends CustomError {
  constructor(errors) {
    super("Validation Error", 400);
    this.errors = errors;
  }
}

class UnauthorizedError extends CustomError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

class NotFoundError extends CustomError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

// Add other custom error classes as needed

export { CustomError, ValidationError, UnauthorizedError, NotFoundError };
