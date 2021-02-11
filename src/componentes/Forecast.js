import React from "react";
import "../estilos/forecast.css";

const Forecast = ({ datos, indice }) => {
  const opciones = () => {
    const diasSemana = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const dia = new Date();
    return diasSemana[dia.getDay() + indice];
  };

  return (
    <div className="item_forecast">
      <img
        src={`https://openweathermap.org/img/w/${datos.weather[0].icon}.png`}
      />
      <div className="contenedor_condicionesClimaticas">
        <h6>{opciones()}</h6>
        <p className="condicion_climatica">{datos.weather[0].main}</p>
      </div>
      <div
        className={`contenedor_promedioTemperaturas  ${indice ? "dos" : ""}`}
      >
        {datos.main.temp_max.toFixed(0)}º/{datos.main.temp_min.toFixed(0)}º
      </div>
    </div>
  );
};

export default Forecast;
