/* Array: Insert At -- Given array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val)  */

function insertAt(arr, indx, val)  {
    for (var i = arr.length; i > 0; i--) {
        if (i == indx) {
            break;
        }
        arr[i] = arr [i-1];
    }
    arr[indx] = val;
    return arr;
}

test_arr1 = [33,44,55,66];
val1 = 22;
pos1 = 0;
console.log( "testcase array, value, position:", test_arr1, val1, pos1);
insertAt(test_arr1, pos1, val1);
console.log("after pushFront:", test_arr1);

pos1 = 2;
console.log( "\n","testcase array, value, position:", test_arr1, val1, pos1);
insertAt(test_arr1, pos1, val1);
console.log("after pushFront:", test_arr1);