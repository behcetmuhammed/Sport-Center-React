import { useState } from "react";
import "./App.css";

import Header from "./components/header.jsx";
import Classes from "./components/Classes.jsx";
import Bmi from "./components/Bmi.jsx";
import Trainers from "./components/Trainers.jsx";
import Purchase from "./components/Purchase.jsx";
import Review from "./components/Review.jsx";
import Contact from "./components/Contect.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <Classes></Classes>
      <Bmi></Bmi>
      <Trainers></Trainers>
      <Purchase></Purchase>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
