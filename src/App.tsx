import React, { useState } from "react";
import { WrappedMap } from "./components/Map/Map";
import styles from "./App.module.css";
import Filters from "./components/Filters/Filters";

const geoApiKey = process.env.REACT_APP_MAPS_API_KEY;

export const App = () => {
  const [isFilterWindowOpened, setIsFilterWindowOpened] = useState(false);
  const googleMapsUrl=`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${geoApiKey}`

  return (
    <div>
      <h1 className={styles.header}> Hi, check our cars for rent! </h1>
      <div className={styles.wrapper}>
        <WrappedMap
          googleMapURL={googleMapsUrl}
          loadingElement={<div/>}
          containerElement={<div className={styles.map} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <Filters
        className={styles.options}
        setActive={setIsFilterWindowOpened}
        active={isFilterWindowOpened}
      />
    </div>
  );
};
