import './App.css';
import React from 'react';
import MainNav from "./components/MainNav";
import Navbar from "./components/Navbar";
import { Banner } from "../src/components/Banner";


function App() {
  return (
    <div>
      <Navbar />
      <MainNav />
      <Banner />
    </div>
  );
}

export default App;
