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
        currentURL = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=44db6a862fba0b067b1930da0d769e98&units=metric";
        
        $.getJSON(currentURL,function(r){
            results=r;
            console.log(r);
            console.log(r.name);
            console.log(r.weather[0].description);
            console.log(r.main.temp+"°C");
            console.log(r.main.humidity+"%");
            console.log(r.wind.speed+"m/s");
            console.log(r.dt);
        });
        forecastURL="http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=44db6a862fba0b067b1930da0d769e98&units=metric";
        
        $.getJSON(forecastURL,function(r){
            results=r;
            console.log(r);
            console.log(r.city.name);
            tempStr="";
            descStr="";
            dtStr="";
            for(i=0;i<r.list.length;i++){
                tempStr+=r.list[i].main.temp+", ";
                descStr+=r.list[i].weather[0].description+", ";
                dtStr+=r.list[i].dt+", ";
            }
            console.log(tempStr);
            console.log(descStr);
            console.log(dtStr);
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