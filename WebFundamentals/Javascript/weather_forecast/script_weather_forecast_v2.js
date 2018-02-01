$(document).ready(function() {

    var baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";
    $('#search').submit(function(e) {
        // keep default action of form action from being triggered
        e.preventDefault();

            var myKey="71ccbead397a2c9b90433de22b4970fd";
            var searchCity = $('input[name="city"]').val();
            var searchURL = baseURL + searchCity + "&units=imperial&APPID=" + myKey;

            var resp;

            // Using the core $.ajax() method
            $.ajax({
            
                // The URL for the request
                url: searchURL,
            
                // The data to send (will be converted to a query string)
                data: {},
            
                // Whether this is a POST or GET request
                type: "GET",
            
                // The type of data we expect back
                dataType : "json",
            })
            // Code to run if the request succeeds (is done);
            // The response is passed to the function
            .done(function( resp ) {
                console.log (resp);
                var cityName = resp.name;            
                var currentTemp = resp.main.temp;
                console.log( 'name=',cityName, 'temp=',currentTemp);

                //create the html markup for new pokemon char to be displayed
                var markup = `
                <h2>${cityName}</h2>
                <p>
                    Current Temperature: ${currentTemp} F degrees
                </p>
                `;

                //prepend the markup to the existing div
                $( "#results" ).prepend (markup);

                //reset the input form to display placeholder value
                $("#search")[0].reset();
            })
            // Code to run if the request fails; the raw request and
            // status codes are passed to the function
            .fail(function( xhr, status, errorThrown ) {
                // alert( "Sorry, there was a problem!" );
                var markup = `
                <h2>${searchCity}</h2>
                <p>
                    Error: ${ xhr.responseJSON.message }. Please check your spelling, and try again.
                </p>
                `;

                //prepend the markup to the existing div
                $( "#results" ).prepend (markup);

                //reset the input form to display placeholder values
                $("#search")[0].reset();
            })
            // Code to run regardless of success or failure;
/*             .always(function( xhr, status ) {
                alert( "The GET request is complete!" );
            }); */
    });
});


