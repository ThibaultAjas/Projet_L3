import React from "react";

const  GetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    })
};

export default GetCurrentLocation;