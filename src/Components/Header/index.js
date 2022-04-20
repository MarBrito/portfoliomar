import './styles.css';
import logo from "../../assets/logo.webp";

export default function Header(){

    // function scrollToProjects(){
    //     document.getElementById("projects").scrollIntoView();
    // }

    // function scrollToAbout(){
    //     document.getElementById("about").scrollIntoView();
    // }

    function scrollToComponent(id) {
        document.getElementById(id).scrollIntoView();
    }

    return (
       <header>
           <img src={logo} height={60} alt="logo site"/>

            <ul className="menu">
                <li className='item-menu' onClick={() => scrollToComponent("home")}>Home</li>
                <li className='item-menu' onClick={() => scrollToComponent("About")}>About</li>
                <li className='item-menu' onClick={() => scrollToComponent("projects")}>Projects</li>
            </ul>
       </header>
    ); 
}