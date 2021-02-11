import React from "react";
import "../estilos/europa.css";

const Europa = ({ climasCiudades }) => {
  return (
    <div className="contenedor_opciones">
      {" "}
      <div className="contenedor_superior_icono">
        {" "}
        <div className="contenedor_icono">
          {" "}
          <img
            src={
              Object.entries(climasCiudades).length > 0
                ? `https://openweathermap.org/img/w/${climasCiudades.weather[0].icon}.png`
                : ""
            }
          />{" "}
        </div>{" "}
        <p>
          {" "}
          {Object.entries(climasCiudades).length > 0
            ? climasCiudades.main.temp
            : null}{" "}
          ºC |{" "}
        </p>{" "}
        <div className="ciudades">
          {" "}
          <p>
            {" "}
            {Object.entries(climasCiudades).length > 0
              ? climasCiudades.name
              : null}{" "}
          </p>{" "}
          <p>Francia</p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="contenedor_datos_viento">
        {" "}
        <p className="texto_vientos">
          {" "}
          Humidity{" "}
          {Object.entries(climasCiudades).length > 0
            ? climasCiudades.main.humidity
            : null}{" "}
          %{" "}
        </p>{" "}
        <p className="texto_vientos">West</p>{" "}
        <p className="texto_vientos">
          {" "}
          {Object.entries(climasCiudades).length > 0
            ? climasCiudades.wind.speed
            : null}{" "}
          km/h{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default Europa;
