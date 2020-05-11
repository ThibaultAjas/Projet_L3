import React from "react";
import {Marker,Popup} from 'react-leaflet';

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


};

export default DisplayUserEvent;

