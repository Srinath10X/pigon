import "dotenv/config";

import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
