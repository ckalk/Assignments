//print 1-255
console.log("----------  Print 1-255  -----------");
function printTo255() {
    for(var i=1; i < 256; i++) {
    console.log(i);
    }
}
printTo255();

//print ints and sum 0-255
console.log("----------  Print Ints and Sum 0-255  -----------");
function printIntsAndSum() {
    var sum = 0;
    for(var i = 0; i < 256; i++) {
        sum = sum + i;
        console.log("i=",i, "sum so far=", sum);
    }
}
printIntsAndSum();

//print max of arr
console.log("----------  Print Max of Array  -----------");
function printMaxOfArray(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(max <= arr[i]) {
            max = arr[i];
        }
    }
    console.log("max of arr =", max);
}
var arr = [35,77,23,89,44,12,31,275,25,17,89];
printMaxOfArray(arr);

//return aaray of odd integers between 1 and 255
console.log("----------  Return Odds Array 1-255   -----------");
function returnOddsArray1To255() {
    var indx = 0;
    for (var i = 1; i < 256; i=i+2) {
        arrOdds[indx] = i;
        indx++;
    }
    return(arrOdds);
}
var arrOdds = [];
returnOddsArray1To255();
console.log(arrOdds);

//given an array, count and print number of values > y
console.log("----------  Return Array Count Greater than Y   -----------");
function returnArrayCountGreaterThanY(arr, y) {
    var cnt = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > y) {
            cnt++;
        }
    }
    console.log("number of arr values greater than",y,"=",cnt);
}
var arr = [35,77,23,9,44,2,31,275,25,17,89];
returnArrayCountGreaterThanY(arr,10);
