import { useState, useEffect } from "react";
import MarcaService from "../services/marcaServices";
const marcaService = new MarcaService();

function ListaDeMarcas() {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    const carregaMarcas = async () => {
      try {
        const dados = await marcaService.getAllMarcas();
        setMarcas(dados);
        console.log("Erro ao carregar marcas:", err);
      } catch (error) {}
    };

    carregaMarcas();
  },[]);

  return (
    <ul>
      {marcas.map(() => {
        <li key={marca.id}>{marca.descricao}</li>;
      })}
    </ul>
  );
}

export default ListaDeMarcas;
