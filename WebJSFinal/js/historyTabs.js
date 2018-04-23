var getEl = function (id) {
  return document.getElementById(id);
}

function overviewDisplay() {
  var headerEl = getEl("main-nav-header");
  var overview = getEl("overview-div");
  var argentina = getEl("argentina-div");
  if (overview.style.display === "block") {
      overview.style.display = "none";
  } else {
    if (argentina.style.display ==="block"){
      argentina.style.display = "none";
    }
      overview.style.display = "block";
      headerEl.textContent = "Overview";
  }
  closeNav();
}

function argentinaDisplay() {
  var headerEl = getEl("main-nav-header");
  var argentina = getEl("argentina-div");
  var overview = getEl("overview-div");
  if (argentina.style.display === "block") {
      argentina.style.display = "none";
  } else {
    if (overview.style.display ==="block"){
      overview.style.display = "none";
    }
      argentina.style.display = "block";
      headerEl.textContent = "Argentina";
  }
  closeNav();
}
