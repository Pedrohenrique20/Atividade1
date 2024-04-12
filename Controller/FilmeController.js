const FilmeService = require("../Service/FilmeService")
const FilmeDTO = require("../Entity/Filme.js");
const filmeService = new FilmeService();


class FilmeController {

    createFilme(req, res){
    try {
        res.json(filmeService.create(new FilmeDTO(req.body, true)));
    } catch (error) {
        res.status(400).send( {err: error.message });
    }
    }

    getAllFilmes(req, res) {
        const Filmes = filmeService.findAll();
        res.json(Filmes);
    }

    getFilmeById(req, res) {
        const { id } = req.params;
        const Filme = filmeService.findOne(id);

        if(!Filme) {
            return res.status(404).send('register not found');
        }
        res.json(Filme);
    }

    updateFilme(req, res) {
        req.body.filme_id = req.params.id;
        
        console.log("update Filme ", req.body);
        const updatedFilme = filmeService.update(new FilmeDTO(req.body));
        if(!updatedFilme) return res.status(404).send('Filme not found');
        res.status(200).json(updatedFilme);
    }

    deleteFilme(req, res) {
        const { id } = req.params;
        const result = filmeService.remove(id);
        if(!result) return res.status(404).send('Filme not found');
        res.status(204).json("Filme deletado com sucesso!!!");
    }
    }

module.exports = FilmeController;