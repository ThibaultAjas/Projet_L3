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

import {getUser, isLogged} from "../util/app_cookies";
import SwapFeedButtons from "../swap_feed_buttons/SwapFeedButtons";
import {getFollowersEvents, getUserEvents} from "../util/dataConverter";

let DefaultIcon=L.icon({
    iconUrl:icon,
    shadowUrl:iconShadow,
});
L.Marker.prototype.options.icon=DefaultIcon;

class MapDisplay extends React.Component{

    state={
        lat:0,
        long:0,
        events:[]
    };

    events = [];

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.state.lat=position.coords.latitude;
            this.state.long=position.coords.longitude;
            this.generateMarkerList();
        });
    };

    generateMarkerList (){


        console.log(getUser());
        getFollowersEvents().then((data )=> {
            console.log(data);
            this.state.events=data;
            this.events=this.state.events;

            this.forceUpdate();
        });

    };

    render() {
        if (isLogged()) {
            let LeafIcon = L.Icon.extend({
                options: {
                    shadowUrl: 'leaf-shadow.png',
                    iconSize:     [30, 40],
                    shadowSize:   [30, 40],
                    iconAnchor:   [15, 40],
                    shadowAnchor: [4, 62],
                    popupAnchor:  [-3, -76]
                }
            });

            let redIcon = new LeafIcon({iconUrl : 'https://ukauto.fr/wp-content/uploads/2017/11/map-marker-icon.png'});

            let lat, long = GetCurrentLoc();
            let tmp = [lat, long];

            return (
                <>
                    <SwapFeedButtons />

                    <div>
                        <i className="fas fa-filter buttonmap"/>
                        <a href="/addevent" ><i className="fas fa-plus buttonmap"/></a>
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

                    <MarkerDisplay position={[this.state.lat,this.state.long]} popupMessage="vous êtes ici" icon={redIcon}/>
                    {
                        this.events.map( (event,index) =>
                            <MarkerDisplay key={index} position={[event.location.latitude,event.location.longitude]} popupMessage={index} icon={redIcon}   />
                        )
                    }
                    </Map>
                </>

            );
        } else {
            return (<LoginScreen/>);
        }
    };
};




export default MapDisplay;