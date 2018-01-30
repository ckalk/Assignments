
$(document).ready(function() {

    for(var indx = 1; indx <81; indx++) {

        var baseURL = "https://pokeapi.co/api/v2/pokemon/";
        var data;

        $.getJSON( baseURL + indx, function(data){
            var pokeID = data.id;            
            var pokeName = data.name;
            var imageURI = data.sprites.front_default;

            //create the html markup for new pokemon char to be displayed
            var markup = `
                <div class="pokemon-char">
                    <h3>${pokeID}: ${pokeName}</h3>
                    <img src=${imageURI} alt="${imageURI}">
                </div>
            `;

            //append the markup for the new card to the existing div that contains card
            $( "#character-set" ).append (markup);

        })
    };
})
