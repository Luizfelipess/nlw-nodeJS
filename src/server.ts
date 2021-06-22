
//importando o express
import express, { request, response } from "express";

//inicializando o express

//@types/express
const app = express();

/**
 * GET    => Buscar uma informação 
 * POST   => Inserir/criar uma informação
 * PUT    => Alterar uma informaçao
 * DELETE => Removar um dado
 * PATCH  => Alterar uma informação especifica
 */

//criando a primeira rota
app.get("/test", (request, response) => {
    //Request => entrando
    //Response = > saindo
    return response.send("Ola NLW");
});

app.post("/test-post", (request, response) => {
    return response.send("NLW Post");
});

//criando o servidor http://localhost:3000
app.listen(3000, () => console.log("Server is running"));