import React from "react";

import {Map,TileLayer,Marker,Popup} from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import '../../stylesheets/mapDisplay.css';
import L from 'leaflet';
import MarkerDisplay from "./MarkerDisplay";
import LoginScreen from "../login/LoginScreen";
import GetCurrentLoc from "../geolocation/GetCurrentLoc";
import Cookies from "universal-cookie";

let DefaultIcon=L.icon({
    iconUrl:icon,
    shadowUrl:iconShadow,
});
L.Marker.prototype.options.icon=DefaultIcon;

const appCookies = new Cookies();


class MapDisplay extends React.Component{

    state={
        lat:0,
        long:0
    };


    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.state.lat=position.coords.latitude;
            this.state.long=position.coords.longitude;
            this.forceUpdate();
        });
    };

    render() {
        if (appCookies.get('isLogged')==='true') {

            let lat, long = GetCurrentLoc();
            let tmp = [lat, long];
            return (
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

                    <MarkerDisplay position={[this.state.lat,this.state.long]} popupMessage="vous êtes ici"/>
                </Map>
            );
        } else {
            return (<LoginScreen/>);
        }
    };
};




export default MapDisplay;