const Database = require("./database");

const banco = new Database

class Marca{
    id;
    status;
    descricao;
    constructor(id, status,descricao){
        this.id=id,
        this.status=status,
        this.descricao=descricao
    }

    async getAll(){
        const marcas = await banco.ExecutaComando('select * from marca')
        return marcas;

    }

}

module.exports=Marca