import "./styles.css";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin, BsFillBookFill } from "react-icons/bs";

export default function Social() {
  return (
    <div>
      <div className="icones-social" id="social">
             
        <a href="https://www.instagram.com/programadorafullstackjr/">

          <FiInstagram size={30} color="purple" />
        </a>
        <a href="https://www.linkedin.com/feed/">

        <BsLinkedin size={30} color="#0000FF" />
        </a>
        

        <BsFillBookFill size={30} />
      </div>

      <div className="TM">     Todos os direitos registrados Mar Brito™
      </div>
      <div className="Copy">
        ©Copyright 2022. All Right Reserved. 
      </div>
    </div>
  );
}
