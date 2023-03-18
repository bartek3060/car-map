import React, { useContext } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import CarContext from "../../context/car-context";
import SingleCar from "../cars/SingleCar";

const defaultCarImage =
  "https://krakow.bmw-mcars.pl/www/media/20/img/bmw_m_cars_m4_csl_x_minb.jpg";

function Map() {
  const ctx = useContext(CarContext);

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{
        lat: 52.1935161702226,
        lng: 20.9304286193486,
      }}
    >
      {ctx?.carDataToDisplay.length > 0 &&
        ctx?.carDataToDisplay.map((car) => (
          <SingleCar
            id={car.id}
            batteryLevelPct={car.batteryLevelPct}
            key={car.id}
            position={{
              lat: car.position.lat,
              lng: car.position.lng,
            }}
            status={car.status}
            rangeKm={car.rangeKm}
            platesNumber={car.platesNumber}
            type={car.type}
            image={car.image ? car.image : defaultCarImage}
          ></SingleCar>
        ))}{" "}
    </GoogleMap>
  );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
