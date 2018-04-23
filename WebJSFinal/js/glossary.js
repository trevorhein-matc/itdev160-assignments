var terms = [
  {
    category: 'General',
    word: 'Product',
    definition: 'This is an example of a definition that is here to hold space.'
  },

  {
    category: 'Products',
    word: 'Domestic',
    definition: 'This is an example of a definition that is here to hold space.'
  },

  {
    category: 'Taxes',
    word: 'Corporate',
    definition: 'This is an example of a definition that is here to hold space.'
  },

  {
    category: 'Regulation',
    word: 'Pollution',
    definition: 'This is an example of a definition that is here to hold space.'
  },

  {
    category: 'Stability',
    word: 'Coup',
    definition: 'This is an example of a definition that is here to hold space.'
  },

  {
    category: 'Foreign',
    word: 'Investment',
    definition: 'This is an example of a definition that is here to hold space.'
  },

  {
    category: 'Labor',
    word: 'Strike',
    definition: 'This is an example of a definition that is here to hold space.'
  },

  {
    category: 'Infrastructure',
    word: 'Refrigeration',
    definition: 'This is an example of a definition that is here to hold space.'
  }
];

function Term(terms) {
  this.category = terms.category;
  this.word = terms.word;
  this.definition = terms.definition;
}

function writeTerm(newTerm) {
  var wordTextEl = document.createTextNode(newTerm.word);
  var wordH2El = document.createElement("h2");
  var wordColEl = document.createElement("div");
  var definitionTextEl = document.createTextNode(newTerm.definition);
  var definitionPEl = document.createElement("p");
  var definitionColEl = document.createElement("div");
  var boxEl = document.createElement("div");
  var wordRowEl = document.createElement("div");
  var definitionRowEl = document.createElement("div");
  var boxColEl = document.createElement("div");
  var containerEl = document.createElement("div");

  containerEl.setAttribute("class", "container");
  boxEl.setAttribute("class", "box");
  wordRowEl.setAttribute("class", "row");
  definitionRowEl.setAttribute("class", "row");
  boxColEl.setAttribute("class", "col-6 col-");
  wordColEl.setAttribute("class", "col-");
  definitionColEl.setAttribute("class", "col-");

  wordH2El.appendChild(wordTextEl);
  definitionPEl.appendChild(definitionTextEl);
  wordColEl.appendChild(wordH2El);
  wordRowEl.appendChild(wordColEl);
  definitionColEl.appendChild(definitionPEl);
  definitionRowEl.appendChild(definitionColEl);
  boxEl.appendChild(wordRowEl);
  boxEl.appendChild(definitionRowEl);
  boxColEl.appendChild(boxEl);
  containerEl.appendChild(boxColEl);

  if (newTerm.category == "General")
  {
    document.getElementById("general").appendChild(containerEl);
  } else if (newTerm.category == "Products")
  {
    document.getElementById("products").appendChild(containerEl);
  } else if (newTerm.category == "Taxes")
  {
    document.getElementById("taxes").appendChild(containerEl);
  } else if (newTerm.category == "Regulation")
  {
    document.getElementById("regulation").appendChild(containerEl);
  } else if (newTerm.category == "Stability")
  {
    document.getElementById("stability").appendChild(containerEl);
  } else if (newTerm.category == "Foreign")
  {
    document.getElementById("foreign").appendChild(containerEl);
  } else if (newTerm.category == "Labor")
  {
    document.getElementById("labor").appendChild(containerEl);
  } else if (newTerm.category == "Infrastructure")
  {
    document.getElementById("infrastructure").appendChild(containerEl);
  }
}

for (var i = 0; i < terms.length; i++){
  var newTerm = new Term(terms[i]);
    writeTerm(newTerm);
}
