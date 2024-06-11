import { useState } from 'react';
import './Navbar.css';
import { FaInstagram,FaGithub,FaMailchimp } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../Img/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function scrool(){
    window.scrollBy(800, 1300)
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img className='logo' src={logo} alt='logo' /></a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><button className='scrbnt' onClick={scrool}>Contato</button></li>
        <a className='instagram' href='https://www.instagram.com/lapisnuntio/' target="_blank" rel="noreferrer">
        <FaInstagram ></FaInstagram>
        </a>
        <a className='github' href='https://github.com/pinelpedro' target="_blank" rel="noreferrer">
        <FaGithub/>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
