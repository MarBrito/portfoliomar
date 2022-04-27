import "./styles.css";
import { FiInstagram, FiMail } from "react-icons/fi";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Contacts() {
  return (
    <>
      <div className="Contacts" id="contacts">
        <div className="icones-social" id="social">
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin size={26} color="purple" />
          </a>

          <a
            href="https://www.instagram.com/programadorafullstackjr/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiInstagram size={28} color="purple" />
          </a>

          <a
            href="https://github.com/MarBrito"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithubSquare size={30} color="purple" />
          </a>

          <a
            href="mailto:awpadilha.dev@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiMail size={28} color="purple" />
          </a>

          <a href="https://www.facebook.com/marbrito.devfullstack">
            <FaFacebookSquare size={30} color="purple" />
          </a>
        </div>

        <div className="TM"> Todos os direitos registrados por Mar Brito™</div>
        <div className="Copy">©Copyright 2022. All Right Reserved.</div>
      </div>
    </>
  );
}
