//env
require("dotenv").config();

import express from "express";
import config from "config";

const app = express();

// JSON middleware
app.use(express.json());

//import db

import db from "../config/db";

//Routes
import router from "./router";

app.use("/api/", router);

//loggers

import Logger from "../config/logger";

// app port
const port = config.get<number>("port");

app.listen(port, async () => {
  await db();
  Logger.info(`O servidor esta rodando na porta: ${port}`);
});
