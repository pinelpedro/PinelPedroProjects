import { FaReact, FaCss3, FaHtml5 } from "react-icons/fa";
import "./About.css";
import nexticon from '../../Img/nextjs.svg'


import estatica from "../../Img/estatica.gif";

function About() {
  return (
    <div
      className="container about-container"
      style={{ backgroundImage: `url(${estatica})` }}
    >
      <div className="static">
        <h1>Experiencias</h1>

        <p>
          Durante meus estudos desenvolvi experiencias nas tecnologias: —
          TypeScript, React, Next.js e mais. Alem de consumo de API e outras
          bibliotecas... Atualmente dedico meu tempo a encontrar uma vaga na
          area enquanto desnvolvo meus projetos pessoais e casualmente faço
          freelance.
        </p>

        <div className="icon-area">
          <div className="icon">
            <FaReact />
          </div>
          <div className="icon">
            <FaHtml5 />
          </div>
          <div className="icon">
            <FaCss3 />
          </div>
          <div className="icon">
            <img src={nexticon} alt="peidao" className="next"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
