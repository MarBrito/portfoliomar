import "./styles.css";
import { FiInstagram, FiMail } from "react-icons/fi";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
// import emailjs from "@emailjs/browser";

export default function Contacts() {
  return (
    <>
      <div className="Contacts" id="contacts">
        <div className="icones-social" id="social">
          <a href="https://www.linkedin.com/feed/">
            <FaLinkedin size={26} color="purple" />
          </a>

          <a href="https://www.instagram.com/programadorafullstackjr/">
            <FiInstagram size={28} color="purple" />
          </a>

          <a href="https://github.com/MarBrito">
            <FaGithubSquare size={30} color="purple" />
          </a>

          <a
            href="mailto:awpadilha.dev@gmail.com"
            target="_blank"
            rel="noreferrer"
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

// function sendEmail(e) {
//   e.preventDefault();

//   emailjs
//     .sendForm("gmail", "templete_0im30u6", e.target, "BzJX_4wkSfW57SiRI")
//     .then(
//       (result) => {
//         console.log("SUCCESS!", result.text);
//       },
//       (error) => {
//         console.log("FAILED...", error.text);
//       }
//     );
//   e.target.reset();
// }

// <h1>CONTACTS</h1>
/* <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto"></div>
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="col-8 form-group mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="col-8 form-group mx-auto">
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Your message"
              name="message"
            ></textarea>

            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="send Message"
              ></input>
            </div>
          </div>
        </form> */
