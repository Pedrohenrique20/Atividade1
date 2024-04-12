const FilmeDTO = require("../Entity/Filme.js");


const filmes = [{
    "filme_id": "52fdf30d-5f3e-4c8a-af6a-fafee80ae34e",
    "filme_name": "O vento levou",
    "filme_year": 1960,
    "filme_type": "romance"
    
  }, 
  {
    "filme_id": "98c626a1-4283-42e3-bb1f-121113a4784a",
    "filme_name": "Jogos Mortais",
    "filme_year": 2004,
    "filme_type": "Suspense"
  },
  {
    "filme_id": "dc6fa584-aeee-47ad-9e34-71a38fd00cc5",
    "filme_name": "Vovozona",
    "filme_year": 2000,
    "filme_type": "Comédia Romântica"
  }
]

class FilmeService {
    
    create(FilmesDTO) {
      filmes.push(FilmesDTO);
      return FilmesDTO;
    }
  
    findAll() {
      return filmes.map((filme)=> new FilmeDTO(filme));
    }
  
    findOne(id) {
      return filmes.find((Filmes) => Filmes.filme_id === id);
    }
    
    update(FilmesDTO) {
      const FilmesIndex = filmes.findIndex((Filmes) => Filmes.filme_id === FilmesDTO.filme_id);
      if (FilmesIndex === -1) return null;
      console.log("updade service ", FilmesDTO);
      filmes[FilmesIndex] = FilmesDTO;
      return FilmesDTO;
    }
  
    remove(id) {
      const FilmesIndex = filmes.findIndex((Filmes) => Filmes.filme_id === id);
      if (FilmesIndex === -1) return false;
      filmes.splice(FilmesIndex, 1);
      return true;
    }
}

module.exports = FilmeService;