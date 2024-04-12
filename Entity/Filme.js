const { v4: uuidv4 } = require("uuid");

class FilmeDTO {
    constructor({ filme_id, filme_name, filme_year, filme_type }, create = false) {
        if (create) {
          this.filme_id = uuidv4();
        } else {
          this.filme_id = this.setId(filme_id);
        }
        this.filme_name = filme_name;
        this.filme_year = filme_year;
        this.filme_type = filme_type;

        
    }
    
    setId(filme_id) {
        if (filme_id) {
          console.log("filme id verdadeiro ");
        } else {
          console.log("filme id falso ");
        }
        return filme_id;
    }
}

module.exports = FilmeDTO

