$(document).ready(function(){
    APPID="uCLAkI44";
    DEG="c";
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(locationSuccess,locationError);
    }
    else{
        $(body).text("Your browser doesn't support geolocation, sorry!");
    }
    function locationSuccess(position){
        lat=position.coords.latitude;
        lon=position.coords.longitude;
        console.log(lat,lon);
        var geoAPI = 'http://where.yahooapis.com/geocode?location='+lat+','+lon+'&flags=J&gflags=R&appid='+APPID;
        console.log(geoAPI);
        
    }
    function locationError(error){
        switch(error.code){
            case error.TIMEOUT:
                console.log("A timeout occured! Please try again!");
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("We can't detect your location. Sorry!");
                break;
            case error.PERMISSION_DENIED:
                console.log("Please allow geolocation access for this to work.");
                break;
            case error.TIMEOUT:
                console.log("An unknown error occured!");
                break;
        }
    }
});