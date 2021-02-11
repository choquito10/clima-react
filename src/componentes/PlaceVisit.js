import React from "react";
import "../estilos/placeVisit.css";
import Gps from "@material-ui/icons/Room";

const PlaceVisit = () => {
  return (
    <div className="contenedor_placeToVisit">
      <p className="titulo_placeVisit">
        <strong>Place to </strong>Visit
      </p>
      <div className="imagen_lugarVisitar">
        <div className="contenedor_textoPlaceVisit">
          <Gps fontSize="small" />
          <p className="titulo_arabia">Arab Street Singapore</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceVisit;
