/* Array: Pop Front -- Given array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop() */

// hmmm... i guess it's implied to return the "popped" value plus the shortened array

function popFront(arr) {
    console.log ("array input:", arr);
/*  irst remind myself what pop() does
    console.log(arr.pop());
    console.log(arr); 
    ok results in last value and then lops off that last values from array
    so ... popFront needs to: 1)save first value; 2)shift every element down 1 pos; and 3)shorten length by 1*/
    val  = arr[0];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    // console.log(val, arr);
    arr.length = arr.length - 1;
    // console.log(val, arr);
    return val;
}

myArr = [99,88,77,66,55,44,33,22,11];
x = popFront(myArr);
console.log("returned value:", x);
console.log ("array output:", myArr);
