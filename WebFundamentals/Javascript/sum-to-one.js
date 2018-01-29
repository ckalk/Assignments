function sumToOne(n) {
    var sum = 0;
    while(n > 9) {
        // make sure we grab the ones digit before truncation
        sum += Math.trunc(n / Math.pow(10, 0)) % 10;
        while(n / 10 >= 1) {
            n = Math.trunc(n / 10);
            sum += Math.trunc(n / Math.pow(10, 0)) % 10;
        }
        console.log('sum', sum);
        n = sum;
        sum = 0;
    }
    console.log('n', n);
    return n;
}