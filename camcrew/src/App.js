import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
      </div>
    </BrowserRouter>
  );
}

export default App;
