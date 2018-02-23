// Greeting changes based on time of day

// Grabs the current date and time
var today = new Date();

// Spring Greeting
var springCheck
var firstDayOfSpring = new Date();
firstDayOfSpring.setFullYear(2018, 2, 20);

//If it isn't spring yet use message 1, if after the 1st day of spring, use message 2
if (firstDayOfSpring > today) {
  springCheck = "Get a head start on spring!";
} else {
  springCheck = "It's not too late. Get these babies in the ground!"
}
// Adds springGreeting to the DOM
document.getElementById('springGreeting').innerHTML = springCheck;

// p = _PriceCalc vars
function studentPriceCalc(p) {
  var studentTotal
  studentTotal = ((p - (p * .15)).toFixed(2))
  return ('Student Price: $' + studentTotal);
}

// x = _PriceCalc vars
function originalPrice(x) {
  return ('Price: $' + ((x).toFixed(2)));
}

// Tomato Pricing
var tomPriceCalc = 4.40

// To the DOM
document.getElementById('tom-student-price').innerHTML = studentPriceCalc(tomPriceCalc);
document.getElementById('tom-price').innerHTML = originalPrice(tomPriceCalc);

// Jalapeno Pricing
var jalapenoPriceCalc = 2.25

//To the DOM
document.getElementById('jalapeno-student-price').innerHTML = studentPriceCalc(jalapenoPriceCalc);
document.getElementById('jalapeno-price').innerHTML = originalPrice(jalapenoPriceCalc);

// Onion Pricing
var onionPriceCalc = 3.65

//To the DOM
document.getElementById('onion-student-price').innerHTML = studentPriceCalc(onionPriceCalc);
document.getElementById('onion-price').innerHTML = originalPrice(onionPriceCalc);

// Garlic Pricing
var garlicPriceCalc = 2.84

//To the DOM
document.getElementById('garlic-student-price').innerHTML = studentPriceCalc(garlicPriceCalc);
document.getElementById('garlic-price').innerHTML = originalPrice(garlicPriceCalc);

// Cilantro Pricing
var cilantroPriceCalc = 1.10

//To the DOM
document.getElementById('cilantro-student-price').innerHTML = studentPriceCalc(cilantroPriceCalc);
document.getElementById('cilantro-price').innerHTML = originalPrice(cilantroPriceCalc);
