import { useState, useEffect, useCallback } from "react";
import "./item.css";

const GithubRequest = () => {
  const [repos, setRepos] = useState(null); // Inicializa o estado como null


  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/pinelpedro/repos"
      );
      const data = await response.json();
      const reposWithCovers = await Promise.all(
        data.map(async (repo) => {
          const coverUrl = `https://raw.githubusercontent.com/pinelpedro/${repo.name}/main/desing-pic.jpg`;
          const coverExists = await fetch(coverUrl).then((res) => res.ok);
          return {
            ...repo,
            coverUrl: coverExists ? coverUrl : null,
          };
        })
      );
      const r = reposWithCovers.filter((repo) => {
        return repo.fork !== true;
      });

      setRepos(r);
    } catch (error) {
      console.error("Failed to fetch repositories:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (repos === null) {
    return <div>Loading...</div>; // Renderiza um loading enquanto os dados estão sendo buscados
  }

  function ajusteDesc(desc) {
    if (typeof desc === "string") {
      const a = desc.slice(0, 25);
      return a;
    }
  }
  /*

  function instanceView(e) {
    const resposta = repos.map(repo=> (repo.topics.filter(subt => {let a = subt;
      if(e.target.attributes[0].value===a){setView(true)}})))

   
      return 'a';
    
  }*/

  return (
    <div>
    <div className="item-main">
      {repos.map((repo) => (
        <div key={repo.id + 1} className="paper">
          <div key={repo.id}>
            {repo.coverUrl ? (
              <img
                src={repo.coverUrl}
                alt={`${repo.name} cover`}
                className="desing-pic"
              />
            ) : (
              <img
                src={`https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png`}
                className="desing-pic"
                alt={"cover"}
              />
            )}
            <label className="title label-secondary">{repo.name}</label>
            <p className="descri p-secondary" maxLength="10">
              {ajusteDesc(repo.description)}{" "}
            </p>

            <button className="button button-primary">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                Veja No Github
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default GithubRequest;
