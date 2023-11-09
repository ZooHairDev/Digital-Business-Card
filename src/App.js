import logo from './logo.svg';
import './App.css';
import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
        <Info />
        <About />
        <Interests />
        <Footer />
    </div>
  );
}

export default App;
