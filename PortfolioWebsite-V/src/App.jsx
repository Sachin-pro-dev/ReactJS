import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar";
import { Banner } from "./component/Banner.jsx";
import Skills from "./component/Skills";
import { Projects } from "./component/Projects";
import { Footer } from "./component/Footer";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Skills></Skills>
      <Projects />
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
