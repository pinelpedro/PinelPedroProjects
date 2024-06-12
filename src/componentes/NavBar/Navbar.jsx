import { useState , useEffect } from 'react';
import './Navbar.css';
import { FaInstagram,FaGithub} from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../Img/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 220) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-logo">
        <a href="/"><img className='logo' src={logo} alt='logo' /></a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
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
