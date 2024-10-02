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

const allowedDomains = [
  "http://localhost:5173",
  "https://appointmentapi.codesang.me",
  "https://appointment.codesang.me/",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedDomains.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
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
