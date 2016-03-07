$(document).ready(function(){
    APPID="GMaBrS50";
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
        geoAPI = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=44db6a862fba0b067b1930da0d769e98";
        
        $.getJSON(geoAPI,function(r){
            results=r;
            console.log(r);
            console.log(r.name);
            console.log(r.weather[0].description);
        })
        
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