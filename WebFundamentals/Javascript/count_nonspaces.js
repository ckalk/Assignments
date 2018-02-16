/* Count Non-Spaces: Accept a string and return the number of non-space characters found in the string. For example, given "Honey pie, you are driving me crazy" , return 29 (not 35 ).  */

function count_non_spaces(str) {
    console.log(str);
    console.log('length of input string is', str.length);
    var nspc_ctr = 0;
    for (var i = 0; i < str.length; i++) {
        if( str[i] != " ") {
            nspc_ctr++ ;
        }
    }
    return(nspc_ctr);
}

teststr = "Honey pie, you are driving me crazy";
console.log( count_non_spaces(teststr));