//importação
import "reflect-metadata";
import express, { request, response } from "express";

import { router } from "./routes";

import "./database";

const app = express();

//falando pro express que estamos utilizando json
app.use(express.json());

app.use(router);

//criando o servidor http://localhost:3000
app.listen(3000, () => console.log("Server is running"));