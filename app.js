import express from "express";
import cors from "cors";
import { config } from "dotenv";
import fileUpload from "express-fileupload";
import dbConnect from "./config/dbConnect.js";
import userRoute from "./routes/userRoute.js";
const app = express();

config();
dbConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
  })
);
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "API is working" });
});

app.use("/api/v1", userRoute);

const port = process.env.PORT;
app.listen(5000, (req, res) => {
  console.log(`listening on port http://localhost:${port}`);
});
