/* Integer to Roman Numerals: Given a positive integer that is less than 4000, return a string containing that divisorue in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.  */



function convertToRoman(num) {
    console.log('input number to be converted to roman numerals:', num);
    var roman = [];
    roman[0] = {rmnumeral:"M", divisor:1000};
    roman[1] = {rmnumeral:"CM", divisor:900};
    roman[2] = {rmnumeral:"D", divisor:500};
    roman[3] = {rmnumeral:"CD", divisor:400};
    roman[4] = {rmnumeral:"C", divisor:100};
    roman[5] = {rmnumeral:"IC", divisor:99};
    roman[6] = {rmnumeral:"XC", divisor:90};
    roman[7] = {rmnumeral:"L", divisor:50};
    roman[8] = {rmnumeral:"IL", divisor:49};
    roman[9] = {rmnumeral:"XL", divisor:40};
    roman[10] = {rmnumeral:"X", divisor:10};
    roman[11] = {rmnumeral:"IX", divisor:9};
    roman[12] = {rmnumeral:"V", divisor:5};
    roman[13] = {rmnumeral:"IV", divisor:4};
    roman[14] = {rmnumeral:"I", divisor:1}; 
    var tmpstr = '';
    var mult = 0;
    var str = '';
    for (var i = 0; i < roman.length; i++) {
        // console.log(i, roman[i], num);
        if (num >= roman[i].divisor) {
            // how many times can it be divided by divisor?
            mult = Math.trunc(num/roman[i].divisor);
            // console.log('mult = ', mult);
            // add mult rmnumerals to str
            str = str + roman[i].rmnumeral.repeat(mult);
            // console.log('str=', str);
            // calculate remainder after mult*divisor
            num = num - mult*roman[i].divisor;
            // console.log('num remainder=', num);
        }
    }
    return(str);
}

// I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. 
// Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV. 
var testnum = 4;
console.log(convertToRoman(testnum));
var testnum = 49;
console.log(convertToRoman(testnum));
var testnum = 349;
console.log(convertToRoman(testnum));
var testnum = 444;
console.log(convertToRoman(testnum));
var testnum = 1349;
console.log(convertToRoman(testnum));