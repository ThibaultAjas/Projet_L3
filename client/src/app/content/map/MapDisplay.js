import React from "react";

import 'leaflet/dist/leaflet.css';

import {Map,TileLayer,Marker,Popup} from "react-leaflet";

const position = [51.505,-0.09];

const MapDisplay = ()=> {

    return(
        <Map center={position} zoom={13} style={{"height":"200px;"}}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                       attribution="&copy; <a href=&quot;http://osm.org/copyrigth&quot;>OpenStreetMap</a> contributors"/>

            <Marker position={position}>
                <Popup>
                    bonjour
                </Popup>
            </Marker>
        </Map>
    );
};

export default MapDisplay;