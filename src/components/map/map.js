import React, { useContext } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import CarContext from "../../context/car-context";

import SingleCar from "../cars/SingleCar";

function Map() {
  const ctx = useContext(CarContext);

  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{
        lat: 52.1935161702226,
        lng: 20.9304286193486,
      }}
    >
      {ctx.carDataToDisplay.length > 0 &&
        ctx.carDataToDisplay.map((car, i) => (
          <SingleCar
            key={car.id}
            position={{
              lat: car.location.latitude,
              lng: car.location.longitude,
            }}
            status={car.status}
            rangeKm={car.rangeKm}
            platesNumber={car.platesNumber}
            type={car.type}
            image={ctx.carImages[i]}
          ></SingleCar>
        ))}{" "}
    </GoogleMap>
  );
}
export const WrappedMap = withScriptjs(withGoogleMap(Map));
