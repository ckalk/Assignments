/* Remove Even-Length Strings: Build a standalone function to remove strings of even lengths from a given array. For array containing ["Nope!","Its","Kris","starting","with","K!"," (instead","of","Chris","with","C)","."] , change that same array to ["Nope!","Its","Chris","."] */
function remove_even_length_strings(arr) {
    console.log(arr);
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i], arr[i].length);
        if (arr[i].length % 2 > 0 ) { 
        //if not even then keep array element
            arr[j] = arr[i];
            j++ ;
        }
    }
    arr.length = j;
    return(arr);
}

testarr = ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."];
console.log( remove_even_length_strings(testarr) );
