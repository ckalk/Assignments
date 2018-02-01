/* Make two functions that call eachother (they can do other things as well such as incrementing...). declare a variable named 'count' outside of the two.  Now use both your functions to make count 10 */

var count = 0;
console.log('starting calls to f1 and f2 with count=', count);
count = f1(count);
console.log('after initial call to f1, count=', count);

function f1(cnt1) {
    console.log('f1 has been called with count=', cnt1);
    if (cnt1<11) {
        cnt1 +=1;
        f2(cnt1);
        return f2(cnt1); 
    }
    else {
        return cnt1;
    }
}

function f2(cnt2) {
    console.log('f2 has been called with count=', cnt2);
    if(cnt2 < 11) {
        cnt2 +=2;
        f1(cnt2);
        return f1(cnt2);
    }
    else {
        return cnt2;
    }
}