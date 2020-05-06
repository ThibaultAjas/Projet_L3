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

import { isLogged } from "../util/app_cookies";
import SwapFeedButtons from "../swap_feed_buttons/SwapFeedButtons";
import Feed from "../feed/Feed";
import axios from "axios";
import {getUserEvents} from "../util/dataConverter";

let DefaultIcon=L.icon({
    iconUrl:icon,
    shadowUrl:iconShadow,
});
L.Marker.prototype.options.icon=DefaultIcon;

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
        if (isLogged()) {

            let lat, long = GetCurrentLoc();
            let tmp = [lat, long];
            let eventList  = getUserEvents();
            console.log(eventList);

            return (

                <>

                    <SwapFeedButtons />

                    <div>
                        <i className="fas fa-filter buttonmap"></i>
                        <i className="fas fa-plus buttonmap"></i>
                    </div>

                    <Map
                        center={[50, 10]}
                        zoom={6}
                        maxZoom={18}
                        minZoom={3}
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
                        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <MarkerDisplay position={[this.state.lat,this.state.long]} popupMessage="vous êtes ici"/>

                    </Map>
                </>

            );
        } else {
            return (<LoginScreen/>);
        }
    };
};




export default MapDisplay;