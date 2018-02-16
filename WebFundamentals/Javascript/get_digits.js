/* String: Get Digits: Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0" , the function should return the number 1357924680 */

function get_digits(str) {
var tmparr = [];
tmparr = str.split("");
console.log(str, tmparr);
str  = "";
for (var i = 0; i < tmparr.length; i++) {
    console.log(i, tmparr[i]);

    if (tmparr[i] >= '0' && tmparr[i] <= "9") {
        str = str + tmparr[i];
        console.log(i, str);
    }
}
// hmm ... how do i convert a js str to a number? (in order to lose the leading zero) -- Number(str)
var int = Number(str);
return(int);
}

teststr = "0s1a3y5w7h9a2t4?6!8?0";
// should return the number 1357924680
console.log(get_digits(teststr));