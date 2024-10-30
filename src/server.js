import express from "express";
import "express-async-errors";

import "./database/index.js";

import initDatabase from "./database/init-database.js";

initDatabase();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((err, req, resp, next) => {
  resp.status(500).json({ error: 'Ops, ocorreu um erro! :(  '})
})

app.listen(9000, () => {
  console.log("Servidor sendo executado");
});
