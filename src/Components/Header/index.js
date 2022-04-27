import "./styles.css";
import borboleta4 from "../../assets/borboleta4.jpg";

export default function Header() {
  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView();
  }

  return (
    <nav>
      <img src={borboleta4} height={60} alt="imagem site" />
      <ul className="menu">
        <li className="item-menu" onClick={() => scrollToComponent("Home")}>
          HOME
        </li>
        <li className="item-menu" onClick={() => scrollToComponent("About")}>
          ABOUT
        </li>
        <li className="item-menu" onClick={() => scrollToComponent("projects")}>
          PROJECTS
        </li>
        <li className="item-menu" onClick={() => scrollToComponent("contacts")}>
          CONTACTS
        </li>
      </ul>
    </nav>
  );
}
