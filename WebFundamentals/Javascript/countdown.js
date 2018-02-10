/* Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?  */

function countdown(num) {
    var arr=[];
    if (num >= 0) {
        var tmp=num;
        for (var i = 0; i <= num; i++) {
            arr[i] = tmp;
            tmp--;
        }
        console.log("num=", num," arr=", arr);
    }
    else {
        console.log("num=", num," num must be >= 0");
    }
    return(arr);
}
countdown(5);
countdown(1);
countdown(-5);
countdown(10);