import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import { Helmet } from "react-helmet";
import GoToTopButton from "./Components/Body/GoToTopButton";
// import { ChatProvider } from './contexts/chat.context';
// import React from 'react';

function App() {
  return (
    <>
    <BrowserRouter>
    <Helmet>
      <title>CamCrew</title>
      <meta 
      name="description"
      content="Get info on CamCrew"/>
      
      <meta
      name="keywords"
      content="camcrew,camera,vfx,video,photos,best photo editors,best lighting effects,lighting, pre wedding, post wedding
      best photographers, best photography, best photographers in AP, best photographers in telangana,event photography,kids photography,
      wedding photographers,photo retouching "/>
    </Helmet>
      <div className="App">
        <NavBar></NavBar>
        <Footer/>
      </div>
    </BrowserRouter>
    <GoToTopButton/> 
    </>
  );
}

export default App;
