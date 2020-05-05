const  GetCurrentLoc = () => {
    let lat=0;
    let long=0;

    navigator.geolocation.getCurrentPosition(function(position) {
        lat=(position.coords.latitude);
        long=(position.coords.longitude);
    });

    return(lat, long);
};

export default GetCurrentLoc;