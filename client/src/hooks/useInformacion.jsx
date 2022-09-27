import { useContext } from "react";
import InformacionAtletaContext from "../context/InformaciónAtletaProvider.jsx";

export const useInformacion = () => {
  return useContext(InformacionAtletaContext);
};
