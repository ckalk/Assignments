//Analyze an array’s values and print the average.
console.log("----------  Print Average of Array    -----------");
function printAverageOfArray(arr) {
    var avg = arr[0];
    for (i = 1; i < arr.length; i++) {
        avg += arr[i];
    }
    avg = avg/arr.length;
    console.log("average=", avg);
}
var arr = [2,6,34,6,16,22,38,44,52];
printAverageOfArray(arr);

//Square each value in a given array, returning that same array with changed values.  
console.log("----------  Square Array Values     -----------");
function squareArrayVals(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*arr[i];
    }
    return(arr);
}
var arr = [2,6,34,6,16,22,38,44,52];
squareArrayVals(arr);
console.log(arr);

//Return the given array, after setting any negative values to zero. 
console.log("----------  Zero Out Array Negative Numbers   -----------");
function zeroOutArrayNegativeVals(arr) {
    for (i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return(arr);
}
var arr = [2,6,-34,6,16,-22,38,-44,52];
zeroOutArrayNegativeVals(arr);
console.log(arr);
 
//Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array. 
console.log("----------  Shift Array Values Left   -----------");
function shiftArrayValsLeft(arr)  {
    for (i = 0; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    return(arr);
}
var arr = [2,6,34,6,16,22,38,44,52];
shiftArrayValsLeft(arr);
console.log("shifted arr:", arr);