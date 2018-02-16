/* Remove Blanks: Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string " Pl ayTha tF u nkyM usi c " , return "PlayThatFunkyMusic" */

function remove_blanks(str) {
    console.log(str);
    var tmparr = [];
    tmparr = str.split(" ")
    console.log(tmparr);
    str = tmparr.join('')
    
    return(str);
}
teststrg = " Pl ayTha tF u nkyM usi c ";
console.log(remove_blanks(teststrg));