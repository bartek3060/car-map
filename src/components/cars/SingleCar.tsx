import React, { useState } from "react";
import { Marker } from "react-google-maps";
import greenmarker from "../../assets/images/green_marker.png";
import redMarker from "../../assets/images/red_marker.png";
import PopUp from "../popUp/PopUp";
import { StatusEnum } from "../../shared/enums/status.enum";
import { SingleCarProps } from "./single-car-props";

function SingleCar(props: SingleCarProps) {
  const status =
    props.status === StatusEnum.AVAILABLE ? greenmarker : redMarker;
  const changeModalStatus = () => {
    setModalStatus((prevStatus) => !prevStatus);
  };
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <>
      <Marker
        onClick={changeModalStatus}
        position={props.position}
        icon={status}
      >
        {" "}
      </Marker>
      {modalStatus && <PopUp {...props} closeModal={changeModalStatus}></PopUp>}
    </>
  );
}

export default SingleCar;
