import React from "react";
import {Marker, Popup} from "react-leaflet";

const MarkerDisplay = ({position,popupMessage,col}) => {
  return(
      <Marker position={position} color={col}>
          <Popup>
              {popupMessage}
          </Popup>
      </Marker>
  )
};

export default MarkerDisplay;