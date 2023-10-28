// import React from "react";
// import Header from "./Components/Header";
// import Body from "./Components/Body";
// import Footer from "./Components/Footer";
// import Bootstrap from "./Components/Bootstrap";
// const App = () => {
//   return (
//     <>
//     <Header />
//     <Body />
//     <Footer />
//     <Bootstrap />
//     </>
//   );
// };
// export default App;


import App from "./App";
import React from "react";
import Home from "./Components/Pages/home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/contact";
import Navbar from "./Components/Pages/Navbar";
import Login from "./Components/Pages/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App () {
  return(
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element = {<Home />} path="/" />
      <Route element = {<Contact />} path="/Contact" />
      <Route element = {<About />} path="/About" />  
       
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;