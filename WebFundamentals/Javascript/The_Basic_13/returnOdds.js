//return aaray of odd integers between 1 and 255
console.log("----------  Return Odds Array 1-255   -----------");
function returnOddsArray1To255() {
    var indx = 0;
    for (var i = 1; i < 256; i=i+2) {
        arrOdds[indx] = i;
        indx++;
    }
    return(arrOdds);
}
var arrOdds = [];
returnOddsArray1To255();
console.log(arrOdds);