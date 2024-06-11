
import './FooterForm.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Minhas Redes</h4>
          <ul className="social-media">
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Entre em Contato</h4>
          <form className="contact-form">
            <input type="text" placeholder="Seu Nome" required />
            <input type="email" placeholder="Seu Email" required />
            <textarea placeholder="Deixe uma mensagem" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 . All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
