/* First Plus Length 
Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false ).  */
function firstpluslength(arr) {
    var sum = arr[0];
    sum = sum + arr.length;
    console.log(sum, arr);
    return sum;
}
firstpluslength([10,2,4,7,3,8,9]);
firstpluslength(["what",2,4,7,3,8,9]);
firstpluslength([false,2,4,7,3,8,9]);
