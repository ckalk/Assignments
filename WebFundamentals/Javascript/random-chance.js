var quarters;
function gamblerOutcome(InitialNumQuarters) {
    quarters = InitialNumQuarters;
    var win;
    var play;
    //play the slots while you still have quarters
    while (quarters > 0) {
        quarters = quarters - 1;//pay one quarter to play
        win = false;
        console.log("quarters before play:", quarters);
        //determine if you won (1 in 100 chance)
        play = Math.random()*100;
        if (play <= 1) {
            win = true;
        }
        console.log("play, win:", play, win);
        //if you won, determine your payout
        if (win) {
            quarters = quarters + slotMachinePayout();
            console.log("quarters after win:", quarters);
            return(quarters); //quit if you win
        }
        console.log("didn't win; play again?")
    }
    //if you run out of quarters, report that
    console.log("ended while loop, ran out of quarters; quarters=", quarters);
    return(quarters);
}

function slotMachinePayout() {
// determine payout (50-100 quarters, equally likely)
    payout = Math.random()*50 + 50;
    payout = Math.floor(payout);
    console.log("payout =",payout);
    return(payout);
}

console.log("------------------START GAMBLER-----------------")
gamblerOutcome(200);
console.log("------------------START GAMBLER-----------------")
gamblerOutcome(100);
console.log("------------------START GAMBLER-----------------")
gamblerOutcome(50);