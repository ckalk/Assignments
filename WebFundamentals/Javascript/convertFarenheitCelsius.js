/* Fahrenheit to Celsius 
Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
 */
console.log("----------  Convert Fahrenheit to Celsius   -----------");
function convertFahrenheitCelsius(degrees,degreesType) {
    // Fahrenheit = (9/5 * Celsius) + 32
    // Celsius = (Fahrenheit -32) * 5/9
    fDegrees = degrees;
    cDegrees = degrees;
    if (degreesType == "F") {
        cDegrees = (fDegrees - 32) * 5/9;
    }
    else if (degreesType == "C") {
        fDegrees = (cDegrees * 9/5) + 32;
    }
    else {
        console.log("Error: degreesType must be C or F")
        fDegrees = "**undefined**";
        cDegrees = "**undefined**";
    }
    console.log("Degrees Fahrenheit "+fDegrees, "is equivalent to", "degrees Celsius "+cDegrees);
    return (fDegrees, cDegrees);
}

console.log("----call function with 42 C----");
convertFahrenheitCelsius(42, "C");

console.log("----call function with 95 F----");
convertFahrenheitCelsius(95, "F");

console.log("----call function with error in degrees type----");
convertFahrenheitCelsius(95, "G");


// Optional Exercise
console.log("----------  Check If Fahrenheit to Celsius Ever Equate -----------");

var fDegrees;
var cDegrees;
for (var cel = 200; cel > -200; cel--) {
    convertFahrenheitCelsius(cel, "C");
    if (fDegrees == cDegrees) {
        console.log(" ***** Farenheit and Celsius Equate at "+cel+" degrees *****");
        break;
    }
};
