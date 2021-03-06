import React, { useState, useEffect } from "react";
import car2 from "../assets/truck.png";
import car1 from "../assets/images/bmw.jpg";
import car3 from "../assets/images/audi.jpg";
import car4 from "../assets/images/honda.jpg";
const carImages = [car1, car2, car3, car4];

const CarContext = React.createContext({
  carDataToDisplay: [],
  carImages: [],
  showAll: () => {},
  showActive: () => {},
  showNoAcive: () => {},
  showHighBatery: () => {},
  showMediumBatery: () => {},
  showLowBatery: () => {},
});
export default CarContext;

export const CarContextProvider = (props) => {
  const [carData, setCarData] = useState([]);
  const [carDataToDisplay, setCarDataToDisplay] = useState([]);
  const showHighBatery = () => {
    const activeData = carData
      .concat()
      .filter((car) => car.batteryLevelPct >= 70);
    setCarDataToDisplay((prevstate) => [...activeData]);
  };
  const showMediumBatery = () => {
    const activeData = carData
      .concat()
      .filter((car) => car.batteryLevelPct >= 50);
    setCarDataToDisplay((prevstate) => [...activeData]);
  };
  const showLowBatery = () => {
    const activeData = carData
      .concat()
      .filter((car) => car.batteryLevelPct > 0 && car.batteryLevelPct < 50);
    setCarDataToDisplay((prevstate) => [...activeData]);
  };

  const showActive = () => {
    const activeData = carData
      .concat()
      .filter((car) => car.status === "AVAILABLE");
    setCarDataToDisplay((prevstate) => [...activeData]);
  };
  const showNoAcive = () => {
    const activeData = carData
      .concat()
      .filter((car) => car.status !== "AVAILABLE");
    setCarDataToDisplay((prevstate) => [...activeData]);
  };
  const showAll = () => {
    setCarDataToDisplay([...carData]);
  };

  async function getData() {
    try {
      const response = await fetch(
        "https://cars-4ba85-default-rtdb.firebaseio.com/objects.json"
      );
      console.log(response);

      if (!response.ok) {
        new Error("Failed to get data");
      }
      const data = await response.json();
      console.log(data);
      setCarData((prevState) => [...prevState, ...data]);
      setCarDataToDisplay((prevState) => [...prevState, ...data]);
    } catch {
      console.log("something went wrong ");
      return;
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <CarContext.Provider
      value={{
        carDataToDisplay: carDataToDisplay,
        carImages: carImages,
        showAll: showAll,
        showActive: showActive,
        showNoAcive: showNoAcive,
        showHighBatery: showHighBatery,
        showMediumBatery: showMediumBatery,
        showLowBatery: showLowBatery,
      }}
    >
      {" "}
      {props.children}{" "}
    </CarContext.Provider>
  );
};
