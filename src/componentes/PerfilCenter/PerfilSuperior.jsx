import { useState, useEffect, useCallback } from "react";
import "./PerfilSuperior.css";

import Navbar from "../NavBar/Navbar";

const PerfilSuperior = ({ backgroundImage, profileImage, name, bio }) => {
  const [repos, setRepos] = useState(null); // Inicializa o estado como null
  const [img , setImg] = useState(profileImage)
  
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/pinelpedro/repos"
      );
      const data = await response.json();
     data.map((a) => {
      setImg(a.owner.avatar_url)
     })
      

      setRepos(data);
    } catch (error) {
      console.error("Failed to fetch repositories:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (repos === null || img == null) {
    return <div>Loading...</div>; // Renderiza um loading enquanto os dados estão sendo buscados
  }
  return (
    <div
      className="perfil-superior"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

        <div className="perfil-imagem">
          <img src={img} alt="Perfil" />
  
      </div>
      <div className="ajustes">
        <Navbar />
      </div>
      <div className="perfil-info">

      </div>
    </div>
  );
};

export default PerfilSuperior;
