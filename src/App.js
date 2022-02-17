import React from "react";
import { WrappedMap } from "./components/map/map";
import styles from "./App.module.css";
import OptionsList from "./components/optionsList/optionsList/optionsList";

const geoApiKey = "AIzaSyBNLn6PnTTdRTguxUiyiNPJIoufQMjJlVc";

const App = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${geoApiKey}`}
          loadingElement={<div />}
          containerElement={
            <div
              className={styles.map}
              // style={{ height: `60vh`, width: "100%" }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        >
          {" "}
        </WrappedMap>
      </div>

      <OptionsList></OptionsList>
    </div>
  );
};
export default App;
