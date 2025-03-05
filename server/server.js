import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import imageRoutes from "./routes/imageRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT;

// Calling Database
connectDB();

// Convert __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const corsOptions = {
  origin: "https://image-upload-frontend-h8mr.onrender.com",
  credentials: true,
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));

// Routes
app.use("/api", imageRoutes);

// app.use("/", (req, res) => {
//   res.send(`Welcome to  Root Route `);
// });

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
