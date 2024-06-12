import { FaReact,FaCss3 ,FaHtml5 ,  } from "react-icons/fa";
import './About.css'



function About() {
  return (
    <div>
      <h1>Experiencias</h1>

      <p>
        Discover my arsenal of frontend tools & technologies — TypeScript,
        React, Redux, Next.js & more. From UI libraries like Material UI &
        shadcn/ui to custom animations using GSAP & Framer Motion, I deliver
        stunning user experiences.
      </p>

      <div>React<FaReact/> Typescript HTML<FaHtml5/> CSS<FaCss3/></div>
    </div>
  );
}

export default About;
