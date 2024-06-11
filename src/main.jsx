import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './componentes/Footer/FooterForm.jsx'
import Container from './componentes/Container/Container.jsx'
import PerfilSuperior from './componentes/PerfilCenter/PerfilSuperior.jsx'
import Item from './componentes/Item/GithubRequest.jsx'
import WppButton from './componentes/Wpp Button/WppButton.jsx'


import './index.css'


import profil from './Img/profil.png'
import backgrounds from './Img/backg.gif'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WppButton />
    <PerfilSuperior
    name={'Testinho'}
    bio={'Toto'}
    backgroundImage={backgrounds} 
    profileImage={profil}/>
    <Container>
      <Item />
    </Container>
    <Footer />

  </React.StrictMode>,
)
