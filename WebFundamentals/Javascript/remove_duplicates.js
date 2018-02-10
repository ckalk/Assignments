/* Array: Remove Duplicates -- Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods. */

function removeAt(arr, indx)  {
    /* save value to be returned */
    var val = arr[indx];

    for (var i = indx; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    // console.log(val, arr);
    arr.length = arr.length - 1;
    // console.log(val, arr);
    return val;
}

function removeDuplicates(arr) {

    for (var i = 1; i < arr.length; i++) {
        // console.log("i=", i, "arr.length=", arr.length, "arr=", arr);
        if( arr[i] == arr[i-1] ) {
            removeAt (arr, i);
            i = i-1;
        }
    }
}

sorted_array1 = [ 33, 44, 55,55, 55,  66 ]
console.log( "testcase array:", sorted_array1);
removeDuplicates(sorted_array1);
console.log("de-duped:", sorted_array1);

sorted_array2 = [ 33,33,  44, 55,55, 55,  66, 66 ]
console.log( "testcase array:", sorted_array2);
removeDuplicates(sorted_array2);
console.log("de-duped:", sorted_array2);


/* Second: solve this without using any nested loops.  --> which means don't use my function removeAt*/

console.log("\n", " ***** APPROACH 2: WITHOUT USING NESTED LOOPS ****")

function removeDuplicatesV2(arr) {
    var uniqueIndices = [];
    uniqueIndices[0] = 0;
    for (var i = 1; i < arr.length; i++) {

        // create array of indices of the unique values
        if( arr[i] !== arr[i-1] ) {
            uniqueIndices.push(i);
            // console.log (i, arr[i], arr[i-1], uniqueIndices, uniqueIndices.length);
        }
    }
    console.log (uniqueIndices);
    // loop uniqueIndices and set arr only to its uniques
    for ( var u = 0; u < uniqueIndices.length; u++) {
        arr[u] = arr[uniqueIndices[u]];
    }
    // set length of arr to its new length (number of unique values)
    arr.length = uniqueIndices.length;
}

sorted_array1 = [ 33, 44, 55,55, 55,  66 ]
console.log( "testcase array:", sorted_array1);
removeDuplicatesV2(sorted_array1);
console.log("de-duped:", sorted_array1);

sorted_array1 = [ 33,33,  44, 55,55, 55,  66, 66 ]
console.log( "testcase array:", sorted_array1);
removeDuplicatesV2(sorted_array1);
console.log("de-duped:", sorted_array1);