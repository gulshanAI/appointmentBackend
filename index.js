import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js"; // Adjust the path if needed
import errorHandler from "./middlewares/errorHandler.js";
import apiRouter from "./routes/api.routes.js";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();
app.use(helmet());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  // allowedHeaders: "*",
  // origin: "*",
  // optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); // Handle preflight requests

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Doctor Appoitment API is running....");
});
app.use(errorHandler);
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
