import React, { useState } from "react";
import { useInformacion } from "../hooks/useInformacion.jsx";

export const Busqueda = () => {
  const [buscar, setBuscar] = useState("");
  const { obtenerInformacionAtleta } = useInformacion();

  const handleSubmit = (e) => {
    e.preventDefault();
    obtenerInformacionAtleta(buscar);
  };

  return (
    <div className="container buscar">
      <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Lionel Messi"
            value={buscar}
            onChange={(e) => {
              setBuscar(e.target.value);
            }}
            required
          ></input>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3 text-uppercase">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};
