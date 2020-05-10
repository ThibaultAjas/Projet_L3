import React from "react";
import {Marker, Popup} from "react-leaflet";

const MarkerDisplay = ({position,popupMessage,icon}) => {

    if (icon===undefined){
        return(
        <Marker position={position}>
            <Popup>
                {popupMessage}
            </Popup>
        </Marker>
        );
    }else{
      return(
          <Marker position={position} icon={icon}>
              <Popup>
                  {popupMessage}
              </Popup>
          </Marker>
      )};
};

export default MarkerDisplay;