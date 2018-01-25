
function telltime(hour, minute, period)   {
     console.log(hour, minute, period);
     var afteralmost = "just after";
     var ampm = "morning";
     var newhour = hour;
     if (minute >= 30) {
         afteralmost = "almost";
         newhour = hour + 1;
     }
     if (period == "PM") {
         ampm = "evening";
     }
    console.log("It's",afteralmost,newhour,"in the",ampm); 
 }
 telltime(8,50,"AM");
 telltime(7,15,"PM");