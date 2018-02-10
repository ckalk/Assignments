/* Array: Remove At -- Given array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop() . Think of popFront(arr) as equivalent to removeAt(arr,0)*/ 

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

test_arr1 = [33,44,55,66];
pos1 = 0;
console.log( "testcase array, position:", test_arr1, pos1);
x = removeAt(test_arr1, pos1);
console.log("value returned: ", x);
console.log("after removeAt:", test_arr1);

pos1 = 2;
console.log( "\n","testcase array, position:", test_arr1, pos1);
x = removeAt(test_arr1, pos1);
console.log("value returned: ", x);
console.log("after removeAt:", test_arr1);