var section = document.getElementsByClassName("timelineAccordion");
var i;

for (i = 0; i < section.length; i++) {
  section[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var timelineSection = this.nextElementSibling;
    if (timelineSection.style.maxHeight){
      timelineSection.style.maxHeight = null;
    } else {
      timelineSection.style.maxHeight = timelineSection.scrollHeight + "px";
    }
  });
}
