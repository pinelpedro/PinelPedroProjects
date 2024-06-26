import Footer from "./componentes/Footer/FooterForm.jsx";
import Container from "./componentes/Container/Container.jsx";
import PerfilSuperior from "./componentes/PerfilCenter/PerfilSuperior.jsx";
import Item from "./componentes/Item/GithubRequest.jsx";
import WppButton from "./componentes/Wpp Button/WppButton.jsx";

import "./index.css";

import profil from "./Img/profil.png";
import backgrounds from "./Img/backg.gif";

import "./App.css";
import About from "./componentes/About/About.jsx";

function App() {
  return (
    <>
      <WppButton />
      <PerfilSuperior
        name={"Testinho"}
        bio={"Toto"}
        backgroundImage={backgrounds}
        profileImage={profil}
      />
      <About></About>
      <Container titulo={"Projetos"}>
        <Item />
      </Container>
      <Footer />
    </>
  );
}

export default App;
