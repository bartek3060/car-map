import { useContext } from "react";
import CarContext from "../context/car-context";
import { CarContextInterface } from "../context/car-context-interface";

export const useCarContext = (): CarContextInterface | null => {
  return useContext(CarContext);
};
