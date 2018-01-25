function fancyarray(arr, sym, reversed) {
    if (reversed) {
        //if reversed=true, then print out array arr in reverse (descending index) order
        for (var i = arr.length-1; i >=0; i--) {
            console.log(i+sym+arr[i]);
        }
    }
    else {
        //otherwise, print out array  arr in ascending index order
        for (var i = 0; i < arr.length; i++) {
            console.log(i+sym+arr[i]);
        }
    }
}

fancyarray(["James", "Jill", "Jane", "Jack"],"-->");
fancyarray([10,100, 10000,100000, 1000000, 10000000],"::");
fancyarray(["James", "Jill", "Jane", "Jack"],"=>", true);
fancyarray([10,100, 10000,100000, 1000000, 10000000],"----", true);
