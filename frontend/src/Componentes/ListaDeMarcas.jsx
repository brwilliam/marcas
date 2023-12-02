import { useState, useEffect } from "react";
import MarcaService from "../services/marcaServices";
const marcaService = new MarcaService();

function ListaDeMarcas() {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    const carregaMarcas = async () => {
      try {
        const dados = await marcaService.getAllMarcas();
        const dados3 = await marcaService.getMarcasById(3);
        console.log('dados',dados3);
        setMarcas(dados);
      } catch (error) {
        console.log("Erro ao carregar marcas:", error);
      }
    };

    carregaMarcas();
  }, []);

  return (
    <ul>
      {marcas.map((marca) => (
        <li key={marca.id}>{marca.descricao}</li>
      ))}
    </ul>
  );
}

export default ListaDeMarcas;
