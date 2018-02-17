/* String: Reverse -- Implement reverseString(str) that, given string, returns that string with characters reversed. Given "creature" , return "erutaerc" . Tempting as it seems, do not use the built-in reverse() !  */
function reverseString(str) {
    console.log('input string is ', str);
    var tmparr = [];
        tmparr = str.split("");
    tmparr = reverseArr(tmparr);
    str = tmparr.join("");
return(str);
}

function reverseArr(arr) {
    for (var i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
return(arr);
}

var teststrg = " Pl ayTha tF u nkyM usi c ";
console.log(reverseString(teststrg));
var teststrg = "abcdefghijklmnopqrstuvwxyz";
console.log(reverseString(teststrg));
