var getEl = function (id) {
  return document.getElementById(id);
}

function openStats(evt, construct) {
    // Declared variables
    var i, tabcontent, tablinks;
    var headerEl = getEl("main-nav-header");

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    sideNavLinks = document.getElementsByClassName("sideNavLink");
    for (i = 0; i < sideNavLinks.length; i++) {
        sideNavLinks[i].className = sideNavLinks[i].className.replace(" active", "");
    }

    tabID = document.getElementById(construct);

    // Show the current tab, and add an "active" class to the button that opened the tab
    tabID.style.display = "block";
    evt.currentTarget.className += " active";
}

getEl("defaultOpen").click();
