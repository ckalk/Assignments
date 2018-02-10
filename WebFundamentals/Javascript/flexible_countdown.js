function flexibleCountdown(lowNum, highNum, mult){

    var highNumMult = highNum;
    if(highNumMult % mult !== 0) {
        highNumMult = Math.trunc(lowNum/mult) * mult;
    }

    console.log("highNum= ", highNum, " highNumMult= ", highNumMult, "lowNum= ", lowNum, "mult= ",mult);
    
    for(var i = highNumMult; i>=lowNum; i-=mult){
        console.log(i);
    }
}

flexibleCountdown(2,9,3);
flexibleCountdown(-5,36,3);
flexibleCountdown(2,36,2);
flexibleCountdown(0,36,3);
flexibleCountdown(-11,102,3);