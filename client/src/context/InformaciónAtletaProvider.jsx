import React, { useState, createContext } from "react";
import axios from "axios";
const InformacionAtletaContext = createContext();

export const InformaciónAtletaProvider = ({ children }) => {
  const [informacion, setInformacion] = useState([]);

  const obtenerInformacionAtleta = async (datos) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${datos}`;
    try {
      const { data } = await axios.get(url);
      setInformacion(data.player);
    } catch (e) {
      alert("Error in the request");
    }
  };

  return (
    <InformacionAtletaContext.Provider
      value={{ obtenerInformacionAtleta, informacion }}
    >
      {children}
    </InformacionAtletaContext.Provider>
  );
};

export default InformacionAtletaContext;
