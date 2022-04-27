import "./styles.css";
import mar from "../../assets/mar.jpg";

export default function Home() {
  return (
    <main id="Home">
      <div className="Image">
        <div class="stars"></div>
        <div class="stars2"></div>
        <img className="Mar" src={mar} height={250} alt="imagem mar" />
      </div>
      <div className="Texto">
        <h1>Hey there, welcome to my portfolio!</h1>
        <p>
          My name is Mar Brito, married, and I have 2 children, Marcos and
          Maysa. I am a student "Full Stack Developer" at Digital House and
          "System Analysis and Development" at Cruzeiro do Sul
          University(Positivo).
        </p>
      </div>
    </main>
  );
}
