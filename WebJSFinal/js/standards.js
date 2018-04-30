var standards = [
  {
    subject: 'Politics',
    standard: 'C.12.5',
    rationale: 'Analyze different theories of how governmental powers might be used to help promote or hinder liberty, equality, and justice, and develop a reasoned conclusion'
  },

  {
    subject: 'Politics',
    standard: 'C.12.12',
    rationale: 'Explain the United States relationship to other nations and its role in international organizations, such as the United Nations, North Atlantic Treaty Organization, World Bank, International Monetary Fund, and North American Free Trade Agreement'
  },

  {
    subject: 'Politics',
    standard: 'C.12.13',
    rationale: 'Describe and evaluate ideas of how society should be organized and political power should be exercised, including the ideas of monarchism, anarchism, socialism, fascism, and communism; compare these ideas to those of representative democracy; and assess how such ideas have worked in practice'
  },

  {
    subject: 'Economics',
    standard: 'D.12.1',
    rationale: 'Explain how decisions about spending and production made by households, businesses, and governments determine the nations levels of income, employment, and prices'
  },

  {
    subject: 'Economics',
    standard: 'D.12.2',
    rationale: 'Use basic economic concepts (such as supply and demand; production, distribution, and consumption; labor, wages, and capital; inflation and deflation; market economy and command economy) to compare and contrast local, regional, and national economies across time and at the present time'
  },

  {
    subject: 'Economics',
    standard: 'D.12.4',
    rationale: 'Explain and evaluate the effects of new technology, global economic interdependence, and competition on the development of national policies and on the lives of individuals and families in the United States and the world'
  },

  {
    subject: 'Economics',
    standard: 'D.12.6',
    rationale: 'Use economic concepts to analyze historical and contemporary questions about economic development in the United States and the world'
  },

  {
    subject: 'Economics',
    standard: 'D.12.7',
    rationale: 'Compare, contrast, and evaluate different types of economies (traditional, command, market, and mixed) and analyze how they have been affected in the past by specific social and political systems and important historical events'
  },

  {
    subject: 'Economics',
    standard: 'D.12.8',
    rationale: 'Explain the basic characteristics of international trade, including absolute and comparative advantage, barriers to trade, exchange rates, and balance of trade'
  },

  {
    subject: 'Economics',
    standard: 'D.12.10',
    rationale: 'Analyze the ways in which supply and demand, competition, prices, incentives, and profits influence what is produced and distributed in a competitive market system'
  },

  {
    subject: 'Economics',
    standard: 'D.12.12',
    rationale: 'Compare and contrast how values and beliefs, such as economic freedom, economic efficiency, equity, full employment, price stability, security, and growth, influence decisions in different economic systems'
  },

  {
    subject: 'Economics',
    standard: 'D.12.13',
    rationale: 'Describe and explain global economic interdependence and competition, using examples to illustrate their influence on national and international policies'
  },

  {
    subject: 'History',
    standard: 'B.12.2',
    rationale: 'Analyze primary and secondary sources related to a historical question to evaluate their relevance, make comparisons, integrate new information with prior knowledge, and come to a reasoned conclusion'
  },

  {
    subject: 'History',
    standard: 'B.12.1',
    rationale: 'Explain different points of view on the same historical event, using data gathered from various sources, such as letters, journals, diaries, newspapers, government documents, and speeches'
  },

  {
    subject: 'History',
    standard: 'B.12.3',
    rationale: 'Recall, select, and analyze significant historical periods and the relationships among them'
  },

  {
    subject: 'History',
    standard: 'B.12.5',
    rationale: 'Gather various types of historical evidence, including visual and quantitative data, to analyze issues of freedom and equality, liberty and order, region and nation, individual and community, law and conscience, diversity and civic duty; form a reasoned conclusion in the light of other possible conclusions; and develop a coherent argument in the light of other possible arguments'
  },

  {
    subject: 'History',
    standard: 'B.12.8',
    rationale: 'Recall, select, and explain the significance of important people, their work, and their ideas in the areas of political and intellectual leadership, inventions, discoveries, and the arts, within each major era of Wisconsin, United States, and world history'
  },

  {
    subject: 'History',
    standard: 'B.12.9',
    rationale: 'Select significant changes caused by technology, industrialization, urbanization, and population growth, and analyze the effects of these changes in the United States and the world'
  },

  {
    subject: 'History',
    standard: 'B.12.13',
    rationale: 'Analyze examples of ongoing change within and across cultures, such as the development of ancient civilizations; the rise of nation-states; and social, economic, and political revolutions'
  },

  {
    subject: 'History',
    standard: 'B.12.16',
    rationale: 'Describe the purpose and effects of treaties, alliances, and international organizations that characterize todays interconnected world'
  },

  {
    subject: 'Geography',
    standard: 'A.12.5',
    rationale: 'Use a variety of geographic information and resources to analyze and illustrate the ways in which the unequal global distribution of natural resources influences trade and shapes economic patterns'
  },

  {
    subject: 'Geography',
    standard: 'A.12.7',
    rationale: 'Collect relevant data to analyze the distribution of products among global markets and the movement of people among regions of the world'
  }
];

function Standard(standards) {
  this.subject = standards.subject;
  this.standard = standards.standard;
  this.rationale = standards.rationale;
}

function writeStandard(newStandard) {
  var standardTextEl = document.createTextNode(newStandard.standard);
  var standardH2El = document.createElement("h2");
  var standardColEl = document.createElement("div");
  var rationaleTextEl = document.createTextNode(newStandard.rationale);
  var rationalePEl = document.createElement("p");
  var rationaleColEl = document.createElement("div");
  var boxEl = document.createElement("div");
  var standardRowEl = document.createElement("div");
  var rationaleRowEl = document.createElement("div");
  var boxColEl = document.createElement("div");
  var containerEl = document.createElement("div");

  containerEl.setAttribute("class", "container");
  boxEl.setAttribute("class", "box");
  standardRowEl.setAttribute("class", "row");
  rationaleRowEl.setAttribute("class", "row");
  boxColEl.setAttribute("class", "col-6 col-");
  standardColEl.setAttribute("class", "col-");
  rationaleColEl.setAttribute("class", "col-");

  standardH2El.appendChild(standardTextEl);
  rationalePEl.appendChild(rationaleTextEl);
  standardColEl.appendChild(standardH2El);
  standardRowEl.appendChild(standardColEl);
  rationaleColEl.appendChild(rationalePEl);
  rationaleRowEl.appendChild(rationaleColEl);
  boxEl.appendChild(standardRowEl);
  boxEl.appendChild(rationaleRowEl);
  boxColEl.appendChild(boxEl);
  containerEl.appendChild(boxColEl);

  if (newStandard.subject == "Politics")
  {
    document.getElementById("politics").appendChild(containerEl);
  } else if (newStandard.subject == "Economics")
  {
    document.getElementById("economics").appendChild(containerEl);
  } else if (newStandard.subject == "History")
  {
    document.getElementById("history").appendChild(containerEl);
  } else if (newStandard.subject == "Geography")
  {
    document.getElementById("geography").appendChild(containerEl);
  }
}

for (var i = 0; i < standards.length; i++) {
  var newStandard = new Standard(standards[i]);
    writeStandard(newStandard);
}
