$(document).ready(function(){
    APPID="70523fecced5a06b";
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
        conditionsURL="http://api.wunderground.com/api/"+APPID+"/conditions/q/"+lat+","+lon+".json";
        astronomyURL="http://api.wunderground.com/api/"+APPID+"/astronomy/q/"+lat+","+lon+".json";
        forecastURL="http://api.wunderground.com/api/"+APPID+"/hourly10day/q/"+lat+","+lon+".json";
        
        $.getJSON(conditionsURL,function(r){
            results=r;
            console.log(r);
        });
        
        $.getJSON(astronomyURL,function(r){
            results=r;
            console.log(r);
        });
        
        $.getJSON(forecastURL,function(r){
            results=r;
            console.log(r);
        });
        
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