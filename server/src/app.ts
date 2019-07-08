import express from "express";
import { Routes } from "../../shared/Routes";
import compression from "compression";
import db from "./db";
const app: express.Application = express();

app.use(compression());
app.get(Routes.getLogsAll, (req, res) => {
  res.set("Content-Type", "application/json");
  //
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send(db.logs);
});

app.listen(3001, function() {
  console.log("App listening on port http://localhost:3001");
});
