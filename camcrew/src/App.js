import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <NavBar></NavBar>
          {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
