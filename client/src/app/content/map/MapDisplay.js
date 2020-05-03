import React from "react";

import {Map,TileLayer,Marker,Popup} from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import '../../stylesheets/mapDisplay.css';
import L from 'leaflet';
import MarkerDisplay from "./MarkerDisplay";
import LoginScreen from "../login/LoginScreen";

let DefaultIcon=L.icon({
    iconUrl:icon,
    shadowUrl:iconShadow,
});
L.Marker.prototype.options.icon=DefaultIcon;


const MapDisplay = ({ logged })=> {

    if (logged) {
        return(
            <Map
                center={[50, 10]}
                zoom={6}
                maxZoom={18}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />

                <MarkerDisplay position={ [ 50, 10 ] } popupMessage="enfin ça marche " />
            </Map>
        );
    } else {
        return ( <LoginScreen/> );
    }
};




export default MapDisplay;