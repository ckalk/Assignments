/* Poor Kenny 
Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome. 
What Really Happened? 
Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday() . In this new function test for each disaster independently , instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none . Maybe Kenny will survive! */

function whatHappensToday() {
    var random = Math.random()*100;
    var event;
    // assume only one of these events occur
    if (random <=10) {
        event = "volcano";
    }
    else if (random <=25) {
        event = "tsunami";
    }
    else if (random <=45) {
        event = "earthquake";
    }
    else if (random <=70) {
        event = "blizzard";
    }
    else {
        event = "meteor";
    }
    console.log("Today there was a " + event);
}

for (var i = 1; i <201; i++) {
    console.log("Day " + i);
    whatHappensToday();
}


// What Really Happened? assume events independent

function whatReallyHappensToday() {
    var random = Math.random()*100;
    var event = "";
    // assume only one of these events occur
    if (random <=10) {
        event = event+"volcano ";
    }
    var random = Math.random()*100;
    if (random <=15) {
        event = event+"tsunami ";
    }
    var random = Math.random()*100;
    if (random <=20) {
        event = event+"earthquake ";
    }
    var random = Math.random()*100;
    if (random <=25) {
        event = event+"blizzard ";
    }
    var random = Math.random()*100;
    if (random <=30) {
        event = event+"meteor ";
    }
    console.log("What really happened today was " + event);
}

for (var i = 1; i <201; i++) {
    console.log("Day " + i);
    whatReallyHappensToday();
}