function sumOdds(lowNum, highNum){
    var lowOdd = lowNum;
    if(lowNum % 2 == 0) {
        lowOdd++;
    }

    console.log("lowNum= ", lowNum, " lowOdd= ", lowOdd);
    var sum = 0;
    for(var i = lowOdd; i<highNum; i+=2){
        sum+=i;
    }

    console.log("sum using for loop: ",sum);
    return sum;
}
sumOdds(-4, 6);
sumOdds(-300000, 300000);
