import express from "express";
import { json } from "body-parser";
import todoRoutes from "./routes/todos";

const app = express();
app.use(json());

app.use("/todos", todoRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ msg: err.message });
  }
);

const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
