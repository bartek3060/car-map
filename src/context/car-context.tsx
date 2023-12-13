import React, { useEffect, useState } from "react";
import { CarContextInterface } from "./car-context-interface";
import { CarModel } from "../shared/models/car.model";
import { StatusEnum } from "../shared/enums/status.enum";

const CarContext = React.createContext<CarContextInterface | null>(null);
export default CarContext;

export const CarContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [allCars, setAllCars] = useState<CarModel[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarModel[]>([]);

  const displayCarsWithHighBatteryLevel = () => {
    const activeData = allCars.filter((car) => car.batteryLevelPct >= 70);
    setFilteredCars(activeData);
  };

  const displayCarsWithMediumBatteryLevel = () => {
    const activeData = allCars.filter((car) => car.batteryLevelPct >= 50);
    setFilteredCars(activeData);
  };

  const displayCarsWithLowBatteryLevel = () => {
    const activeData = allCars.filter((car) => car.batteryLevelPct < 50);
    setFilteredCars(activeData);
  };

  const displayAvailableCars = () => {
    const activeData = allCars.filter(
      (car) => car.status === StatusEnum.AVAILABLE
    );
    setFilteredCars(activeData);
  };

  const displayUnavailableCars = () => {
    const activeData = allCars.filter(
      (car) => car.status !== StatusEnum.AVAILABLE
    );
    setFilteredCars(activeData);
  };

  const displayAllCars = () => {
    setFilteredCars(allCars);
  };

  async function getData() {
    try {
      const carsResponse = await fetch(
        "https://car-map-72b6a-default-rtdb.firebaseio.com/objects.json"
      );

      const carsData = await carsResponse.json();
      setAllCars((prevState) => [...prevState, ...carsData]);
      setFilteredCars((prevState) => [...prevState, ...carsData]);
    } catch {
      console.error("something went wrong ");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <CarContext.Provider
      value={{
        filteredCars: filteredCars,
        displayAllCars: displayAllCars,
        displayAvailableCars: displayAvailableCars,
        displayUnavailableCars: displayUnavailableCars,
        displayCarsWithHighBatteryLevel: displayCarsWithHighBatteryLevel,
        displayCarsWithMediumBatteryLevel: displayCarsWithMediumBatteryLevel,
        displayCarsWithLowBatteryLevel: displayCarsWithLowBatteryLevel,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
