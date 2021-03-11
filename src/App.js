import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navmenu from "./components/Navmenu";
import Main from "./components/Main";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navmenu />

      <Main />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
