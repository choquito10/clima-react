import React, { useEffect, useState } from "react";
import "../estilos/banner.css";
import superagent from "superagent";
import Gps from "@material-ui/icons/Room";
require("dotenv").config();

const Banner = () => {
  const [climaBogota, setClimaBogota] = useState(null);
  const [iconoClima, setIconoClima] = useState({});

  useEffect(() => {
    superagent
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then((r) => {
        setClimaBogota(r.body.main.temp);
        setIconoClima(r.body.weather[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="contenedor_banner">
      <div className="titulo_banner">
        <Gps />
        <h2>Bogotà</h2>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Mapa_Bogota_15.png"
        className="mapa_bogota"
      />

      <div>
        <div className="icono_clima">
          <img
            src={`https://openweathermap.org/img/w/${iconoClima.icon}.png`}
          />
          <h6>{iconoClima.main}</h6>
        </div>
        <div className="cuadrado_temperatura">
          <h3>{climaBogota}ºC</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
