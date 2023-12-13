import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { CarsList } from "../CarsList/CarsList";

function Map() {
  const MAP_ZOOM_LEVEL = 14;
  const INITIAL_MAP_POSITION = { lat: 52.1935161702226, lng: 20.9304286193486 };

   return (
    <GoogleMap
      defaultZoom={MAP_ZOOM_LEVEL}
      defaultCenter={INITIAL_MAP_POSITION}
    >
      <CarsList />
    </GoogleMap>
  );
}

 export const WrappedMap = withScriptjs(withGoogleMap(Map));
