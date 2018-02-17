/* Remove Shorter Strings: Given a string array and value (length), remove any strings shorter than length from the array.  */

function remove_shorter_strings (strarr, val) {
    console.log(strarr, val);
    var j = 0;
    for (var i = 0; i < strarr.length; i++) {
        if (strarr[i].length >= val) {
            strarr[j] = strarr[i];
            j++ ;
        }
    }
    strarr.length = j;
    return(strarr);
}

var testarr = ['daughter', 'son', 'aunt', 'uncle', 'mother', 'mom', 'brother', ' uncle'];
var length = 4;
console.log(remove_shorter_strings(testarr, length));
