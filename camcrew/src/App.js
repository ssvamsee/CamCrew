import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import "./App.css";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Footer/>

      </div>
    </BrowserRouter>
  );
}

export default App;
