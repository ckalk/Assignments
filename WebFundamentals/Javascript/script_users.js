$(document).ready(
    function() {
        $('form').submit( 
            function() {
                $('tbody').append('<tr><td>' + 
                $('input[name="firstname"]').val() + 
                '</td><td>'+ 
                $('input[name="lastname"]').val() + 
                '</td><td>' + 
                $('input[name="email"]').val() + 
                '</td><td>' + $
                ('input[name="contact"]').val() + '</td></tr>');
                document.getElementById("addUser").reset();
                return false;
             }
        )
    }
)
