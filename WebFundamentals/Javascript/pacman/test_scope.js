var p1 = 1;
var p2= 2;
var p3 = 3;

function test_scope(p1, p2, p3) {
    p1 = p1 + 10;
    p2 = 2 * p2;
    console.log('during', p1, p2, p3);
    return p1, p2, p3;
}

console.log('before', p1, p2, p3);
test_scope(p1, p2, p3);
console.log('after', p1, p2, p3);