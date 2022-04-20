import "./styles.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Social from "./Components/Social";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Social />
    </div>
    
  );
}

export default App;
