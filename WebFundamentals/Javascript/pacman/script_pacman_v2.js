$(document).ready(function() {
    var world = [
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,2,2,2,2,2,2,0,0,2,2,1],
        [1,2,2,2,0,3,0,0,1,1,2,1],
        [1,2,0,2,0,2,2,2,1,2,2,1],
        [1,2,0,2,2,2,2,2,1,2,2,1],
        [1,1,1,1,1,1,1,1,1,1,1,1]
    ];
    // console.log(world);

    function displayWorld() {
        // console.log('world.length =', world.length);
        var markup = '';
        for( var i = 0; i < world.length; i++) {
            markup = markup + '\n<div class="row">';
            for( var j = 0; j < world[i].length; j++ ) {
                if (world[i][j] == 0) {
                    markup = markup + '\n\t<div class="empty"></div>';
                }
                else if (world[i][j] == 1) {
                    markup = markup + '\n\t<div class="brick"></div>';
                }
                else if (world[i][j] == 2) {
                    markup = markup + '\n\t<div class="coin"></div>';
                }
                else if (world[i][j] == 3) {
                    markup = markup + '\n\t<div class="pacman"></div>';
                }
            }
            markup = markup + '\n</div>';
        }
        // console.log( markup );
        $( "#wrapper" ).append (markup);
    };
displayWorld();

$(document).onkeydown = function( e ) {
    console.log ( e );
}

});