// Nav icon onclick
function navMenu() {
    var x = document.getElementById("Topnav");
    var topper = document.getElementById("Topmain");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }

    if (topper.className === "margin-buffer") {
        topper.className -= "margin-buffer";
    } else {
        topper.className = "margin-buffer";
    }
}
