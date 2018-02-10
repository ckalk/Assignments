function isLeapYear(year){

    console.log(year);
    var yearIsLeap = false;

    if ((year % 4) == 0) {
        yearIsLeap = true;
    }

    if ((year % 100) == 0) {
        yearIsLeap = false;
    }

    if ((year % 400) == 0) {
        yearIsLeap = true;
    }

    console.log("year = ", year, "and yearIsLeap = ", yearIsLeap);
}

for (var i = 2014; i < 2200; i++) {
    isLeapYear(i);
}
