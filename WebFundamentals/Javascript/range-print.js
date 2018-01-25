function printRange(start, end, skip) {
    console.log("parameters input", start, end, skip)
    if (skip === undefined) {
        skip = 1;
    }
    if (end === undefined) {
        end = start;
        start = 0;
    }    
    console.log("start, end, skip =", start, end, skip)
    for(var i = start; i < end; i +=skip) {
        console.log(i);
    }
}

printRange(2, 10, 2);
printRange(2, 10);
printRange(-5, 10, 2);
printRange(-5, 10);
printRange(5);
