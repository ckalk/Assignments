/* String: Is Palindrome -- Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar" , return true . Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!" , return false .
Second: now do ignore white space (spaces, tabs, returns), capitalization and punctuation.  */

function isPalindrome(str) {
    console.log(str, str.length);
    var palindrome = true;
    for (var i = 0; i < str.length/2; i++) {
        // console.log('i=', i, 'str[i]=', str[i]); 
        // console.log('str.length-i-1=', str.length-i-1, 'str[str.length-i-1]=', str[str.length-i-1]);
        if( str[i] != str[str.length-i-1]) {
            palindrome = false;
            break;
        }
    }
    return(palindrome);
}

function isPalindrome2(str) {
    // now do ignore white space (spaces, tabs, returns), capitalization and punctuation.
    console.log(str, str.length);
    var palindrome = true;
    var i = 0;
    var j = str.length-1;
    // remove capitalization variation
    str = str.toLowerCase();

    while ( i < str.length/2 ) {
        // console.log('before check i=', i, 'str[i]=', str[i]); 
        // console.log('before check j=', j, 'str[j]=', str[j]);
        //check to see if a non-number or non-letter character; if yes, skip it
        if( !((str[i] >=0 && str[i] <=9) || (str[i]>="a" && str[i]<="z")) )  {
            console.log('i check: determined not 0-9 or a=z');
            i++ ;
            continue;
        }
        if( !((str[j] >=0 && str[j] <=9) || (str[j]>="a" && str[j]<="z")) )  {
            console.log('j check: determined not 0-9 or a=z');
            j-- ;
            continue;
        }
        // console.log('after check i=', i, 'str[i]=', str[i]); 
        // console.log('after check j=', j, 'str[j]=', str[j]);

        if( str[i] != str[j]) {
            palindrome = false;
            break;
        }
        i++;
        j--;
    }
    return(palindrome);
}

var teststr = "a x a";
console.log(isPalindrome(teststr));
teststr = "racecar";
console.log(isPalindrome(teststr));
teststr = "Dud";
console.log(isPalindrome(teststr));
teststr = "oho!";
console.log(isPalindrome(teststr));
teststr = "toot";
console.log(isPalindrome(teststr));
console.log('\n **** now do ignore white space (spaces, tabs, returns), capitalization and punctuation***')
var teststr = "a x a";
console.log(isPalindrome2(teststr));
teststr = "oho!";
console.log(isPalindrome2(teststr));
teststr = "Dud";
console.log(isPalindrome2(teststr));
teststr = "Duel";
console.log(isPalindrome2(teststr));