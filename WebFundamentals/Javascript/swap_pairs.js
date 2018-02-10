/* Array: Swap Pairs -- Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4] , return [2,1,4,3] . For example, change input ["Brendan",true,42] to [true,"Brendan",42] . As with all array challenges, do this without using any built-in array methods.  */
function swapPairs(arr) {
    for (var i = 0; i < arr.length-1; i+=2) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}

test_arr1 = [33,44,55,66];
console.log( "testcase array:", test_arr1);
swapPairs(test_arr1);
console.log("swapPairs:", test_arr1);
test_arr1 = ["Brendan",true,42];
console.log( "testcase array:", test_arr1);
swapPairs(test_arr1);
console.log("swapPairs:", test_arr1);