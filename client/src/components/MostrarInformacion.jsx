import React from "react";
import Swal from "sweetalert2";
import { useInformacion } from "../hooks/useInformacion";
const notWorking = require("../not-working.png");

export const MostrarInformacion = () => {
  const { informacion } = useInformacion();

  const MostrarInformacion = (valor) => {
    Swal.fire({
      title: valor.strPlayer,
      showCancelButton: false,
      showConfirmButton: false,
      html:
        `<p>${valor.strDescriptionEN ? valor.strDescriptionEN : ``}</p>` +
        `<div>${
          valor.strInstagram
            ? `<a class="btn btn-secondary" href=${valor.strInstagram}>Instagram</a>`
            : ``
        }
        </div>`,
      showCloseButton: true,
    });
  };

  return (
    <div className="container">
      {/* NO SE ENCONTRARON JUGADORES */}
      {!informacion && (
        <div className="alert alert-danger text-center" role="alert">
          athlete not found
        </div>
      )}
      <div className="row">
        {/* INFORMACION JUGADOR */}
        <div className="col listado">
          {informacion &&
            informacion.map((valor) => (
              <div className="card" key={valor.idPlayer}>
                <img
                  src={valor.strThumb ? `${valor.strThumb}` : `${notWorking}`}
                  className="card-img-top"
                  alt={valor.strPlayer}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{valor.strPlayer}</h5>
                  <p
                    className="btn btn-primary"
                    onClick={() => MostrarInformacion(valor)}
                  >
                    More Info
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
