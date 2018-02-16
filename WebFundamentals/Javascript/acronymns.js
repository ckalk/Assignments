/* Acronyms: Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch - gotta pay yer way. " , return "TNFL-GPYW" . Given "Live from New York, it's Saturday Night!" , return "LFNYISN"  */

function acronym(str) {
    console.log(str);
    var tmparr = [];
    tmparr = str.split(" ");
    // console.log(tmparr);
    str = "";
    for (var i = 0; i < tmparr.length; i++) {
        if( tmparr[i] != '') {
            str = str + tmparr[i].toUpperCase()[0];
            // console.log(i, str);
        }   
    }
    return(str);
}

teststr = " there's no free lunch - gotta pay yer way. ";
console.log(acronym(teststr));
teststr = "Live from New York, it's Saturday Night!";
console.log(acronym(teststr));