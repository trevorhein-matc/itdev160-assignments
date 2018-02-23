// Greeting changes based on time of day

// Grabs the current date and time
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 17){
  greeting = 'Good evening ';
}
else if (hourNow > 12) {
  greeting = 'Good afternoon ';
}
else if (hourNow > 0) {
  greeting = 'Good morning ';
}
else {
  greeting = 'Welcome ';
}

document.write('<h1>' + greeting + '</h2>');

// JS sample Code
document.write('<h4 style="color: white;">Copyright&copy; 2018</h4>');

document.getElementByID("test").innerHTML = "This is a test.";

document.getElementsByTagName('h1').innerHTML.style.color = 'blue';
