import React from "react";
import {Map, Marker, Popup} from "react-leaflet";

const MarkerDisplay = ({position,popupMessage}) => {
  return(
      <Marker position={position}>
          <Popup>
              {popupMessage}
          </Popup>
      </Marker>
  )
};

export default MarkerDisplay;