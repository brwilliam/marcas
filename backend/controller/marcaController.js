const Marca =require("../model/entidades/marca");

const marca = new Marca()

class MarcaController{
    async getAll(req,res){
    try {
        const result = await marca.getAll()
        return res.status(200).json(result)
        
    } catch (error) {
        console.log('Erro ao buscar marca:' +error);
        res.status(500).json({error:'Erro ao buscar marca'})
    }
        return marca.getAll()
    }
}

modulo.exports = MarcaController