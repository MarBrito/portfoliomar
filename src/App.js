import "./styles.css";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
