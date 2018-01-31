$(document).ready(function() {

    var baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";
    $('#search').submit(function(e) {
        // keep default action of form action from being triggered
        e.preventDefault();

            var myKey="71ccbead397a2c9b90433de22b4970fd";
            var searchCity = $('input[name="city"]').val();
            var searchURL = baseURL + searchCity + "&units=imperial&APPID=" + myKey;

            var data;
            $.get( searchURL, function(data){
                console.log (data);
                var cityName = data.name;            
                var currentTemp = data.main.temp;
                console.log( 'name=',cityName, 'temp=',currentTemp);

                //create the html markup for new pokemon char to be displayed
                var markup = `
                <h2>${cityName}</h2>
                <p>
                    Current Temperature: ${currentTemp} F degrees
                </p>
                `;

                //append the markup to the existing div
                $( "#results" ).prepend (markup);

                //reset the input form to display placeholder values
                $("#search")[0].reset();

            }, 'json');

    });
});