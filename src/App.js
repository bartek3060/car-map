import React, { useState } from "react";
import { WrappedMap } from "./components/map/map";
import styles from "./App.module.css";
import OptionsList from "./components/optionsList/optionsList/optionsList";

const geoApiKey = "AIzaSyBNLn6PnTTdRTguxUiyiNPJIoufQMjJlVc";

const App = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div>
      <h1 className={styles.header}> Hi, check our cars for rent! </h1>{" "}
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
          mapElement={
            <div
              style={{
                height: `100%`,
              }}
            />
          }
        >
          {" "}
        </WrappedMap>{" "}
      </div>{" "}
      <OptionsList
        className={styles.options}
        setActive={setShowOptions}
        active={showOptions}
      >
        {" "}
      </OptionsList>{" "}
    </div>
  );
};
export default App;
