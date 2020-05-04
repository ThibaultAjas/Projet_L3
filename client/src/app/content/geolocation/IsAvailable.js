import React from "react";


const IsAvailable = () => {
    if ("geolocation" in navigator) {
        console.log("Available");
    } else {
        console.log("Not Available");
    }
}

export default IsAvailable;