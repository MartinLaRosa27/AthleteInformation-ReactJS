import { useContext } from "react";
import InformacionAtletaContext from "../context/Informaci√≥nAtletaProvider.jsx";

export const useInformacion = () => {
  return useContext(InformacionAtletaContext);
};
