import React from "react";
import "../estilos/app.css";
import Banner from "./Banner.js";
import Grilla from "./Grilla.js";

function App() {
  return (
    <div className="contenedor">
      <Banner />
      <Grilla />
    </div>
  );
}

export default App;
