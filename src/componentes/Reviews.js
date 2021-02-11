import React from "react";
import "../estilos/reviews.css";
import Gps from "@material-ui/icons/Room";
import Plus from "@material-ui/icons/Add";

const Reviews = () => {
  return (
    <div className="contenedor_reviews">
      <div className="contenedor_fotosPersonas">
        <div className="contenedor_agregarReviews">
          <img
            src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png"
            className="icono_mas"
          />
          <p className="texto_topReviews">Top Reviews</p>
        </div>
        <div className="contenedor_fotos">
          <img
            className="fotos_personas"
            src="https://i.pinimg.com/474x/09/8f/da/098fdab8c2fe9b9a562e8f0e71ac7b98.jpg"
          />
          <img
            className="fotos_personas"
            src="https://i.pinimg.com/564x/32/c2/88/32c288a220de7b17c408c4ea81210cf7.jpg"
          />
          <img
            className="fotos_personas"
            src="https://pbs.twimg.com/profile_images/378800000626783035/e06b4dd01ce4d61947ac9794d4846896.jpeg"
          />
          <div className="mas_resultados">9+</div>
        </div>
      </div>

      <div className="art_museo">
        <div className="contenedor_texto_localizacion">
          <Gps fontSize="small" />
          <p className="titulo_arteMuseo">Art Science Museum</p>
        </div>
      </div>

      <div className="art_museo_cuadro_abajo">
        <div className="contenedor_texto_localizacion_dos">
          <Gps />
          <p className="titulo_arteMuseoDos">Founting Of Something</p>
        </div>
        <div className="contenedor_icono_suma">
          <Plus fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
