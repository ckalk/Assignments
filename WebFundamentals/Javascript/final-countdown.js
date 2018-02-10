
function finalCountdown(param1, param2, param3, param4){
    console.log(" -------  parameters: ", param1, param2, param3, param4), "------";
    console.log("Multiples of ",param1," within the range of {",param2,", ",param3,"} but excluding ",param4)

    if(param2 <= param3){
        var param2Adj;
        param2Adj = Math.trunc(param2/param1) * param1;
        if(param2Adj > 0 && param2 % param1 != 0){
            param2Adj = param2Adj + param1;
        }
        else if(param2Adj==0) {
            param2Adj=param1;
        }

        var index = param2Adj;
        while(index <= param3) {
            if(index!=param4){
                console.log(index);
            }
            index+=param1;
        }
    }
    else {
        console.log("param2 must be less than or equal to param3");
    }
}

finalCountdown(3,5,17,9);
finalCountdown(3,-5,17,9);
finalCountdown(2,4,17,8);
finalCountdown(2,-5,27,-2);
finalCountdown(2,17,5,9);
finalCountdown(6,5,37,18);
