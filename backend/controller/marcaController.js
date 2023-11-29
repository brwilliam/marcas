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
    
    async getById(req,res){
        const id = req.params.id;
    try {
        const result = await marca.getById(id)
        if (result) {
            return res.status(200).json(result)  
        } else {
            res.status(404).json({error:'Registro não encontrado'})
        }

        
    } catch (error) {
        console.log('Erro ao buscar marca:' +error);
        res.status(500).json({error:'Erro ao buscar marca'})
    }
    
    }
}

module.exports = MarcaController