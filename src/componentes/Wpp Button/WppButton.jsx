

import { FaWhatsapp } from "react-icons/fa";
import "./WppButton.css";

const whatsappButton = () => {

  return (
    <div>
        <button className="wppbutton" _>
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=%2B55034999025018&text&type=phone_number&app_absent=0">
            <FaWhatsapp color="#fff"/>
            </a>
        </button>
    </div>
  );
};

export default whatsappButton;
