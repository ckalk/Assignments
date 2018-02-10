/* Math Help: Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction). */ 

// If y = mx + b, then ... x = (y-b)/m and when y = 0, this becomes x = -b/m

function xIntercept(m,b) {
    x = -b/m;
    console.log( "for y = ",m,"* x + ",b,", the X intercept is:", x);
    return x;
}

// print x-intercept for y = 5x + 2
xIntercept(5,2);
// print x-intercept for y = -3x + 6
xIntercept(-3,6);