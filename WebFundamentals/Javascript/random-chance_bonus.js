var quarters;
function gamblerOutcome(InitialNumQuarters, minLeave, maxLeave) {
    console.log("Gambler has", InitialNumQuarters,"quarters; will quit if down to",minLeave, "will also quit if up to", maxLeave);
    quarters = InitialNumQuarters;
    var win;
    var play;
    //play the slots while you still have minLeave or more quarters
    while (quarters > minLeave) {
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
            if(quarters >= maxLeave) {
                return(quarters); //quit if you have at least maxLeave quarters
            }
        }
        console.log("didn't win; play again?")
    }
    //if you quit because you're down to minLeave quarters, report that
    console.log("quit while loop bc down to quarters=", quarters);
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
gamblerOutcome(300, 50, 375);
console.log("------------------START GAMBLER-----------------")
gamblerOutcome(200, 0, 210);
console.log("------------------START GAMBLER-----------------")
gamblerOutcome(200, 50, 300);