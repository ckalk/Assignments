$(document).ready(function() {

    $( "#new-card" ).submit(function( eAddCard ) {
        // keep default action of form action from being triggered
        eAddCard.preventDefault();

        //create the html markup for new card to be displayed using data from form fields
        //within this html, set the text of the two p fields whose display will be toggled when clicked
        var markup = `
            <div class="one-card">
                <h3>
                    ${$('input[name="firstname"]').val()} 
                    ${$('input[name="lastname"]').val()}
                </h3>
                <p class="p-msg">
                    Click for description!
                </p>
                <p class="p-descr">
                    ${ $('textarea[form="new-card"]').val() }
                </p>
            </div>
        `;
        //append the markup for the new card to the existing div that contains card
        $( "#display-cards").append (markup);

        //set <p class="p-descr"> initially to display="none"
        $(".p-descr:last").hide();

        //reset the input form to display placeholder values
        $("#new-card")[0].reset();
    })

    $(document).on("click", ".one-card", function() {
        //attach a click event listener to all the dynamically created cards 
        // and when clicked, execute function to toggle display of both p elements (.p-msg and .p-descr) between hide and show of the card that was clicked

        $(this).find("p").toggle();
    })

}) 

