import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import DBConnection from "./db/connect.js";
import postRoute from "./routes/postRoute.js";
import dalleRoute from "./routes/dalleRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoute);
app.use("/api/v1/dalle", dalleRoute);

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from DALL.E!",
  });
});

const startServer = async () => {
  try {
    DBConnection(process.env.MONGODB_URL);
    app.listen(5000, () => console.log("Server started on port 5000"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
