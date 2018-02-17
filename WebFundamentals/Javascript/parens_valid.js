/* Parens Valid: Create a function that, given an input string str , returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s" , return true . Given "N(0(p)3" , return false : not every parenthesis is closed. Given "N(0)t ) 0(k" , return false , because the underlined ")" is premature: there is nothing open for it to close.  */

function parens_valid(str) {
    console.log(str);
    var valid = true;
    var numopen = 0;
    for (var i = 0; i < str.length; i++) {
        console.log(i, str[i]);
        if( str[i] == "(" ) {
            numopen++ ;
            console.log ('increased numopen to', numopen);
        }
        else if(str[i] == ")") {
            numopen-- ;
            console.log ('decreased numopen to', numopen);
        }
        if( numopen < 0 ) {
            break;
        }
    }
    if (numopen != 0) {
        valid = false;
    }
    console.log('final numopen =', numopen);
    return (valid);
}

var teststr = "N(0)t ) 0(k";
console.log(parens_valid(teststr));
var teststr = "(JKJK(a)(b(isd)) iippo(23)io)";
console.log(parens_valid(teststr));