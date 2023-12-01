const API_BASE_URL ='http://localhost:3001';

class MarcaService{ 

    // constructor(){
        async getAllMarcas(){
             try {
                const response = await fetch(`${API_BASE_URL}/marca`)

                if(!response.ok){
                    throw new Error('Erro ao buscar marcas')
                }

                const dados = await response.json();
                return dados;

             } catch (error) {
                console.log('Erro ao buscar marcas:' error);
                throw error;
                
             }
        }
    
}

export default MarcaService