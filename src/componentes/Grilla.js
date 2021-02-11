import React, { useEffect, useState } from "react";
import Forecast from "./Forecast";
import PlaceVisit from "./PlaceVisit";
import Reviews from "./Reviews";
import Europa from "./Europa";
import superagent from "superagent";
import "../estilos/grilla.css";
import "../estilos/forecast.css";
import "../estilos/europa.css";
require("dotenv").config();

const Grilla = () => {
  const [climaDias, setClimaDias] = useState([]);
  const [climasCiudades, setClimaCiudades] = useState([]);

  useEffect(() => {
    superagent
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=bogota&cnt=16&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then((r) => {
        const [primerDia] = r.body.list.slice(0, 1);
        const [segundoDia] = r.body.list.slice(8, 9);
        const [tercerDia] = r.body.list.slice(15, 16);
        setClimaDias([primerDia, segundoDia, tercerDia]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    superagent
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then((r) => {
        superagent
          .get(
            `https://api.openweathermap.org/data/2.5/find?lat=46.22&lon=2.21&cnt=1&appid=${process.env.REACT_APP_API_KEY}&units=metric`
          )
          .then((p) => {
            setClimaCiudades([r.body, p.body.list[0]]);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="contenedor_grilla">
      <div className="contenedor_forecast">
        <p className="titulo_forecast">
          <strong>3 Days </strong>Forecast
        </p>
        {climaDias.map((item, indice) => (
          <Forecast key={item.dt} datos={item} indice={indice} />
        ))}
      </div>
      <PlaceVisit />
      <Reviews />
      <div className="contenedor_europa">
        {Object.entries(climasCiudades).length > 0
          ? climasCiudades.map((item) => {
              return <Europa key={item.name} climasCiudades={item} />;
            })
          : null}
        <div className="contenedor_addLocation">
          <input type="button" value="Add location" className="input_buton" />
        </div>
      </div>
    </div>
  );
};

export default Grilla;
