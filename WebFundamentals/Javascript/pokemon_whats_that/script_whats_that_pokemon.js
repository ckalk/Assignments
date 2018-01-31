$(document).ready(function() {

    for(var indx = 1; indx <= 151; indx++) {
        console.log('indx = ', indx);
        var baseURL = "https://pokeapi.co/api/v2/pokemon/";
        var data;
        console.log("url=", baseURL + indx);
        $.get( baseURL + indx, function(data){
            var pokeID = data.id;            
            var pokeName = data.name;
            var imageURI = data.sprites.front_default;

            //create the html markup for new pokemon char to be displayed
            var markup = `
                <div class="pokemon-char">
                    <h3>${pokeID}: ${pokeName}</h3>
                    <img id=${pokeID} src=${imageURI} alt="${imageURI}">
                </div>
            `;

            //append the markup for the new card to the existing div that contains card
            $( "#character-set" ).append (markup);

        }, "json")
    };
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
