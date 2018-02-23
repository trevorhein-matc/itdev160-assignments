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

document.getElementById('springGreeting').innerHTML = springCheck;
