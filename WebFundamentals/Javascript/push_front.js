/* Array: Push Front -- Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods */

function pushFront (arr, value) {
    
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr [i-1];
    }
    arr[0] = value;
    return arr;
}

test_arr1 = [33,44,55,66];
val1 = 22;
console.log( "testcase array and value:", test_arr1, val1);
pushFront(test_arr1, val1);
console.log("after pushFront:", test_arr1);
