"use strict";

import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

const { PORT } = process.env;

// commentario no correcto
app.get("/", (req, res) => {
  res.status(200).send("¡Hola!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
