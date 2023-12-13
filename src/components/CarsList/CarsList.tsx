import { SingleCar } from "./SingleCar/SingleCar";
import React from "react";
import { useCarContext } from "../../hooks/useCarContext";

export const CarsList = () => {
  const carContext = useCarContext();
  const defaultCarImage =
    "https://krakow.bmw-mcars.pl/www/media/20/img/bmw_m_cars_m4_csl_x_minb.jpg";

  return (
    <>
      {carContext?.filteredCars.map((car) => (
        <SingleCar {...car} image={car.image ?? defaultCarImage} key={car.id}></SingleCar>
      ))}
    </>
  );
};
