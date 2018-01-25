var newArr =[];
function numbersOnly(arr) {
    console.log("arr=", arr);
    var newi = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == "number") {
            newArr[newi] = arr[i];
            newi++;
        }
    }
}
numbersOnly([1, "apple", -3, "orange", 0.5]);
console.log("newArr=", newArr);

console.log("----BONUS FUNCTION ----")

function numbersOnlySplice(arr) {
    console.log("input arr=", arr);
    for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) !== "number") {
            arr.splice(i, 1);
            i--;
        }
    }
}
var undef;
var arr = [1, "apple", "banana", -3, "orange", 0.5,"false","undefined",10000, undef];
numbersOnlySplice(arr);
console.log("output arr=", arr);
