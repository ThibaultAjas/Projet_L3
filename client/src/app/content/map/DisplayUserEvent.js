import React from "react";
import Feed from "../feed/Feed";
import {Marker,Popup} from 'react-leaflet';
import {map} from "leaflet/dist/leaflet-src.esm";

const DisplayUserEvent = ({listEvent}) => {



        let generateList = () => {
            let tmp = [];
            listEvent.map( (event,index) => {
                tmp.push(
                    <Marker position={[[listEvent[index].location.latitude, listEvent[index].location.longitude]]}>
                        <Popup>
                            {index}
                        </Popup>
                    </Marker>
                )

            });


        };


        // return(
        //
        //
        //
        // );

};

export default DisplayUserEvent;

