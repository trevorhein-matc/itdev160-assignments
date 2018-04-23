var standards = [
  {
    subject: 'Politics',
    standard: 'A.12.1',
    rationale: 'This is an example of rationale space holder.'
  },

  {
    subject: 'Economics',
    standard: 'E.12.3',
    rationale: 'This is another place holder.'
  },

  {
    subject: 'History',
    standard: 'H.12.2',
    rationale: 'This is another place holder.'
  }
];

function Standard(standards) {
  this.subject = standards.subject;
  this.standard = standards.standard;
  this.rationale = standards.rationale;
}

function writeStandard(newStandard) {
  var subjectTextEl = document.createTextNode(newStandard.subject);
  var subjectH2El = document.createElement("h2");
  var standardTextEl = document.createTextNode(newStandard.standard);
  var standardH3El = document.createElement("h3");
  var rationaleTextEl = document.createTextNode(newStandard.rationale);
  var rationalePEl = document.createElement("p");
  var boxEl = document.createElement("div");
  var col3El = document.createElement("div");
  var col6El = document.createElement("div");
  var col9El = document.createElement("div");
  var rowEl = document.createElement("div");
  var subjectRowEl = document.createElement("div");
  var standardRowEl = document.createElement("div");
  var containerEl = document.createElement("div");

  containerEl.setAttribute("class", "container");
  boxEl.setAttribute("class", "box");
  rowEl.setAttribute("class", "row");
  subjectRowEl.setAttribute("class", "row");
  standardRowEl.setAttribute("class", "row");
  col3El.setAttribute("class", "col-3 col-");
  col6El.setAttribute("class", "col-6 col-");
  col9El.setAttribute("class", "col-9 col-");

  subjectH2El.appendChild(subjectTextEl);
  subjectRowEl.appendChild(subjectH2El);
  standardH3El.appendChild(standardTextEl);
  standardRowEl.appendChild(standardH3El);
  rationalePEl.appendChild(rationaleTextEl);
  col9El.appendChild(rationalePEl);
  col3El.appendChild(subjectRowEl);
  col3El.appendChild(standardRowEl);
  rowEl.appendChild(col3El);
  rowEl.appendChild(col9El);
  containerEl.appendChild(rowEl);
  boxEl.appendChild(containerEl);
  col6El.appendChild(boxEl);

  if (newStandard.subject == "Politics")
  {
    document.getElementById("politics").appendChild(col6El);
  } else if (newStandard.subject == "Economics")
  {
    document.getElementById("economics").appendChild(col6El);
  } else if (newStandard.subject == "History")
  {
    document.getElementById("history").appendChild(col6El);
  }
}

for (var i = 0; i < standards.length; i++) {
  var newStandard = new Standard(standards[i]);
    writeStandard(newStandard);
}
