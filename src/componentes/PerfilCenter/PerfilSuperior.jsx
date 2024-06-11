
import './PerfilSuperior.css';

import Navbar from "../NavBar/Navbar";

const PerfilSuperior = ({ backgroundImage, profileImage, name, bio }) => {
  return (
    <div className="perfil-superior" style={{ backgroundImage: `url(${backgroundImage})` }}>
      
      <div className="perfil-imagem">
        <img src={profileImage} alt="Perfil" />
      </div>
      <div className='ajustes'>
        <Navbar />
      </div>
      <div className="perfil-info">
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default PerfilSuperior;
