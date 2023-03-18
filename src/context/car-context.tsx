import React, { useEffect, useState } from "react";
import { CarContextInterface } from "./car-context-interface";
import { CarModel } from "../shared/models/car.model";
import { StatusEnum } from "../shared/enums/status.enum";

const CarContext = React.createContext<CarContextInterface | null>(null);
export default CarContext;

export const CarContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [carData, setCarData] = useState<CarModel[]>([]);
  const [carDataToDisplay, setCarDataToDisplay] = useState<CarModel[]>([]);

  const showHighBatery = () => {
    const activeData = carData
      .concat()
      .filter((car) => car.batteryLevelPct >= 70);
    setCarDataToDisplay(() => [...activeData]);
  };

  const showMediumBatery = () => {
    const activeData = carData
      .concat()
      .filter((car) => car.batteryLevelPct >= 50);
    setCarDataToDisplay(() => [...activeData]);
  };

  const showLowBatery = () => {
    const activeData = carData
      .concat()
      .filter((car) => car.batteryLevelPct > 0 && car.batteryLevelPct < 50);
    setCarDataToDisplay(() => [...activeData]);
  };

  const showActive = () => {
    const activeData = carData
      .concat()
      .filter((car) => car.status === StatusEnum.AVAILABLE);
    setCarDataToDisplay(() => [...activeData]);
  };

  const showNoAcive = () => {
    const activeData = carData
      .concat()
      .filter((car) => car.status !== StatusEnum.AVAILABLE);
    setCarDataToDisplay(() => [...activeData]);
  };

  const showAll = () => {
    setCarDataToDisplay([...carData]);
  };

  async function getData() {
    try {
      const response = await fetch(
        "https://car-map-72b6a-default-rtdb.firebaseio.com/objects.json"
      );

      if (!response.ok) {
        new Error("Failed to get data");
      }

      const data = await response.json();

      setCarData((prevState) => [...prevState, ...data]);
      setCarDataToDisplay((prevState) => [...prevState, ...data]);
    } catch {
      console.log("something went wrong ");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <CarContext.Provider
      value={{
        carDataToDisplay: carDataToDisplay,
        showAll: showAll,
        showActive: showActive,
        showNoAcive: showNoAcive,
        showHighBatery: showHighBatery,
        showMediumBatery: showMediumBatery,
        showLowBatery: showLowBatery,
      }}
    >
      {" "}
      {children}{" "}
    </CarContext.Provider>
  );
};
