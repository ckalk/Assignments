$(document).ready(function() {

    var indx = 1;
    var baseURL = "https://pokeapi.co/api/v2/pokemon/";
    var resp;
    var count = 1;
    
    
    var run(poke_num) {
        console.log('indx = ', poke_num);

        // Using the core $.ajax() method
        $.ajax({
        
            // The URL for the request
            url: baseURL + poke_num,
        
            // The data to send (will be converted to a query string)
            // data: {},
        
            // Whether this is a POST or GET request
            type: "GET",

            // Run SYNCHRONOUSLY so characters are displayed in order
            async: false, 
        
            // The type of data we expect back
            dataType : "json",
        })
        // Code to run if the request succeeds (is done);
        // The response is passed to the function
        .done(function( resp ) {
            var pokeID = resp.id;            
            var pokeName = resp.name;
            var imageURI = resp.sprites.front_default;
            //create the html markup for new pokemon char to be displayed
            var markup = `
                <div class="pokemon-char">
                    <h3>${pokeID}: ${pokeName}</h3>
                    <img id=${pokeID} src=${imageURI} alt="${imageURI}">
                </div>
            `;
            //append the markup for the new card to the existing div that contains card
            $( "#character-set" ).append (markup);
            if (poke_num < 10) {
                run(poke_num + 1);
            }
        })
        // Code to run if the request fails; the raw request and
        // status codes are passed to the function
        .fail(function( xhr, status, errorThrown ) {
            alert( "Sorry, there was a problem!" );
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.dir( xhr );
        })
        // Code to run regardless of success or failure;
            .always(function( xhr, status ) {
            indx++;;
        })
    }

    fun(count);

    //attach a click event listener to all the img tags
    $(document).on('click', 'img', function(){
        var clickedID =  $( this ).attr("id");
        console.log( clickedID );
        $.get( baseURL + clickedID, function(data2){
            var clickedPokeID = data2.id;            
            var clickedPokeName = data2.name;
            var clickedImageURI = data2.sprites.front_default;
            var clickedPokeHeight = data2.height;
            var clickedPokeWeight = data2.weight;
            var clickedPokeTypes = data2.types;

            //create the html markup for new pokemon char to be displayed
            var markup1 = `
                <h2>${clickedPokeName}</h2>
                <img id=${clickedPokeID} src=${clickedImageURI} alt="${clickedImageURI}">
                <h3>Types</h3>
                <ul>
                `;
            //replace the markup in pokedex with this first part of html
            $( "#pokedex" ).html (markup1);
            //now create the types list items, and append to html
            for(var i = 0; i < clickedPokeTypes.length; i++) {
                $( "#pokedex" ).append (`
                    <li>  
                    ${clickedPokeTypes[i].type.name}
                    </li>
                    ` 
                );
            }
            //append the markup in pokedex with this last part of html
            var markup3 = `
                </ul>
                <h3>Height</h3>
                <p>${clickedPokeHeight}</p>
                <h3>Weight</h3>
                <p>${clickedPokeWeight}</p> 
            `;
            $( "#pokedex" ).append (markup3);

        }, "json")       

    });

})
