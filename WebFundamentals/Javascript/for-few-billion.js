function doublingdays(amt, days) {
    console.log("--Starting amount:",amt," Number of days of doubling:",days);
    var reward = amt;
    for (var i = 2; i <= days; i++) {
        reward = 2*reward;
    }
    return(reward);
}

for (var days =1; days < 100; days++){
    console.log("Reward =",doublingdays(0.01,days));
}

