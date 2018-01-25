//Given an array, print the max, min and average values for that array. 
console.log("----------  Print Max, Min, Average Array Values   -----------");
function printMaxMinAverageArrayVals(arr) {
    var max = arr[0];
    var min = arr[0];
    var avg = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
        if(min > arr[i]) {
            min = arr[i];
        }
        avg = avg + arr[i];
    }
    avg = avg/arr.length;
    console.log("min=",min, "max=",max, "avg=",avg);
}

var arr = [2,6,34,6,16,22,38,44,52];
printMaxMinAverageArrayVals(arr);

//Given an array of numbers, replace any negative values with the string 'Dojo'
console.log("----------  Swap String for Array Negative Values    -----------");
function swapStringForArrayNegativeVals(arr) {
    console.log("arr before swap:", arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    console.log("arr after swap:", arr);
}
var arr = [2,6,-34,6,16,-22,38,44,-52];
swapStringForArrayNegativeVals(arr);

//Print all odd integers from 1 to 255.
console.log("----------  Print Odds 1-255    -----------");
function printOdds1To255() {
    for (var i=1; i < 256; i+=2) {
        console.log(i);
    }
}
printOdds1To255();

//Iterate through a given array, printing each value. 
console.log("----------  Print Array Values      -----------");
function printArrayVals(arr) {
    for (var i=0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
var arr = [893,321,645,7565,21,432,657]
printArrayVals(arr);