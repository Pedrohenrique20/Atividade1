const express = require("express"); 
const bodyParser = require("body-parser");
const FilmeController = require("./Controller/FilmeController");


const app = express(); 
const port = 3000;

app.use(bodyParser.json())

//Rota para listar filmes

const filmeController = new FilmeController();
app.post("/filmes", (req, res) => filmeController.createFilme(req, res));
app.get("/filmes", (req, res) => filmeController.getAllFilmes(req, res));
app.get("/filmes/:id", (req, res) => filmeController.getFilmeById(req, res));
app.put("/filmes/:id", (req, res) => filmeController.updateFilme(req, res));
app.delete("/filmes/:id", (req, res) => filmeController.deleteFilme(req, res));



//app na port 3000
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});