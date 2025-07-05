import "dotenv/config";
import express from "express";

import { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
