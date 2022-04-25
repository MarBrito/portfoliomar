import "./styles.css";
import borboleta4 from "../../assets/borboleta4.jpg";

export default function Header() {
  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView();
  }

  return (
    <header>
      <img src={borboleta4} height={60} alt="imagem site" />
      {/* <div class="container">
        <div class="stars"></div>
        <div class="stars2"></div>
      </div> */}
      <ul className="menu">
        <li className="item-menu" onClick={() => scrollToComponent("Home")}>
          HOME
        </li>
        <li className="item-menu" onClick={() => scrollToComponent("About")}>
          ABOUT
        </li>
        {/* <li
          className="item-menu"
          onClick={() => scrollToComponent("Experience")}
        >
          EXPERIENCE
        </li> */}
        <li className="item-menu" onClick={() => scrollToComponent("projects")}>
          PROJECTS
        </li>
        <li className="item-menu" onClick={() => scrollToComponent("contacts")}>
          CONTACTS
        </li>
      </ul>
    </header>
  );
}

// function scrollToProjects(){
//     document.getElementById("projects").scrollIntoView();
// }

// function scrollToAbout(){
//     document.getElementById("about").scrollIntoView();
// }
