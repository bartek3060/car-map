import React, { FC, useState } from "react";
import { Marker } from "react-google-maps";
import greenmarker from "../../../assets/images/green_marker.png";
import redMarker from "../../../assets/images/red_marker.png";
import PopUp from "../../PopUp/PopUp";
import { StatusEnum } from "../../../shared/enums/status.enum";
import { CarModel } from "../../../shared/models/car.model";

interface Props extends CarModel {
  status: StatusEnum;
}

export const SingleCar: FC<Props> = (props) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  console.log(props.status)
  const iconImage: ImageData =
    props.status === StatusEnum.AVAILABLE ? greenmarker : redMarker;

  const onModalClosed = (): void => {
    setIsModalOpened(false);
  };

  const onModalOpened = (): void => {
    setIsModalOpened(true);
  };

  return (
    <>
      <Marker
        onClick={onModalOpened}
        position={props.position}
        icon={iconImage}
      />
      {isModalOpened && <PopUp {...props} closeModal={onModalClosed}></PopUp>}
    </>
  );
};
