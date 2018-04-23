var getEl = function (id) {
  return document.getElementById(id);
}

function overviewDisplay() {
  var headerEl = getEl("main-nav-header");
  var x = getEl("overview-div");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
      headerEl.textContent = "Overview";
  }
}
