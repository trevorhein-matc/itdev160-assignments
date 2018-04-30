var terms = [
  {
    category: 'General',
    word: 'Product',
    definition: 'This is an example of a definition that is here to hold space.'
  },

  {
    category: 'Products',
    word: 'Domestic Crops',
    definition: 'Domestic crops are purchase and eaten right in your own country. While there is demand outside of your country as well, most of these products are consumed at home. This can change, for instance, at the whim of fad diets in wealthier countries. Domestic unrest can wreak havoc on their production and sale. Since they are fairly cheap to grow and ubiquitous (all over the place), they are cheap and relatively safe to plant but don’t usually yield a big profit. New technology could make these products more lucrative in time.'
  },

  {
    category: 'Products',
    word: 'Cash Crops',
    definition: 'The demand of cash crops is generally driven by wealthier foreign markets. In this case that includes Europe, China, Russia, and the US. This does however, make them much more susceptible (vulnerable or exposed) to abrupt changes in the market based on the countries perpetually (ongoing with no sign of stopping) political turmoil. They are risky and expensive to plant but they can also be big earners. Private corporations play a big role in this market with fortunes to be made and lost in the blink of an eye.'
  },

  {
    category: 'Products',
    word: 'Livestock',
    definition: 'Livestock are an all-around safe bet when it comes to Caribbean farming. The only problem is that during periods of conflict they make an easy meal for any armed group passing through whether they be the army or a rebel faction. They are a fairly expensive investment but offer a relatively stable income with solid returns.'
  },

  {
    category: 'Products',
    word: 'Illegal Crops',
    definition: 'Illegal Crops are exactly what they sound like. Illegal. This, however, means that corrupt officials and politicians may be willing to look the other way if a persuasive argument can be made if you catch my drift. The price of these illicit goods depends heavily on the government’s attitude towards them. This doesn’t always mean that a crackdown hurts the production end though. They do tend to be more heavily taxed than other crops by the banker. Someone has to launder the extra cash.'
  },

  {
    category: 'Domestic',
    word: 'Immigration',
    definition: 'You country has built the reputation of being safe and prosperous and people from around the region are coming in droves in hopes of better lives. All these new people mean more mouths to feed.'
  },

  {
    category: 'Domestic',
    word: 'Emigration',
    definition: 'Maybe it’s the lack of healthcare and infrastructure, non-existent job prospects, or the paramilitary death squads but people seem to be leaving the country in droves. Even in small towns, their absence is noticeable and having a negative effect on the economy in general.'
  },

  {
    category: 'Domestic',
    word: 'Raise Minimum Wage',
    definition: 'A rising tide raises all boats. Many people that were struggling just to get by now have a bit more disposable income for the finer things in life as well as the staples.'
  },

  {
    category: 'Domestic',
    word: 'Urbanization',
    definition: 'Everybody wants to be where the action is at, the big city. As a result, there are less people living the rural life producing the food. This means less food in general so, anyone still growing the essentials is going to be sought after.'
  },

  {
    category: 'Domestic',
    word: 'Population Boom',
    definition: 'Prosperity and a general feeling of optimism are leading people to think more about starting a family. Big families are becoming the norm. This means a lot more mouths to feed.'
  },

  {
    category: 'Domestic',
    word: 'Land Redistribution',
    definition: 'For too long, the vast majority of land in your country has been owned and farmed by foreigners. The new, democratically elected leader of your country has promised to make this right by buying it back, at a fair price, and giving it back to people like yourself.'
  },

  {
    category: 'Domestic',
    word: 'Industrialization',
    definition: 'New factories have created new ways to produce more crops more efficiently and to sell old products especially more expensive crops.'
  },

  {
    category: 'Domestic',
    word: 'Prohibition',
    definition: 'Prohibition really limits the supply of illicit products. This means that those who do take the risk to supply them are handsomely rewarded. The downside is that without many in this line of work, your chances of getting caught are fairly high. This has also led to an increase of homemade brews with fermented papayas. Because of its illegality and the risks involved, the banker assesses an extra 20% or 1/5 tax on people participating in the illicit trade.'
  },

  {
    category: 'Domestic',
    word: 'Drug War',
    definition: 'The war on drugs brings as much risk as it does opportunity. Because it is now arguably more risky to produce drugs, not as many people are involved in the business. Less product means more demand which could mean more profits but, then again, maybe the reason there aren’t as many growers is that people get caught.'
  },

  {
    category: 'Domestic',
    word: 'New Trend',
    definition: 'Fad diets and celebrity endorsements can have a big impact on demand making obscure fruits and cheeses items worth buying at high end supermarkets.'
  },

  {
    category: 'Domestic',
    word: 'Civil War',
    definition: 'War may be good for some businesses but agriculture is not one of them. Nothing is being exported due to the bombed out, rebel occupied airfield. What is grown for sale at home is ransacked either by rebels or the army. It’s especially hard on livestock which make a quick meal for any troops passing through. The chaos does do good things for the drug trade with no one to monitor anything as trivial as drugs while fighting continues.'
  },

  {
    category: 'Domestic',
    word: 'Political Unrest',
    definition: 'Latin America isn’t known as America’s backyard for nothing. Foreign interventions in Latin 	American politics causes a great deal of unrest with different countries and companies trying to buy elections. This leaves farmers who depend on exports to make a living without consistent trading partners depending on who is in charge at that particular moment.'
  },

  {
    category: 'Domestic',
    word: 'Protests',
    definition: 'Protests are fairly common when the government doesn’t represent the best interests of the people that supposedly elected them. Most of these protesters are the poorer members of society such as truck drivers, 	dock workers, students and even farmers. This makes it difficult to ship anything in or out of the country. Domestic business is also hurt by the fact that people that don’t go to work don’t get paid and can’t buy things.'
  },

  {
    category: 'Domestic',
    word: 'Strikes',
    definition: 'Sometimes people don’t feel like going to work for a buck a day so they quit. But, every once in a while, they all decide their fed up with it and go on strike. This not only leads to them not having any money to buy your goods but could also affect your country’s ability to export goods depending on who is striking.'
  },

  {
    category: 'Domestic',
    word: 'Military Coup',
    definition: 'Manuel Noriega, Fidel Castro, Hugo Chavez, Simon Bolivar… the list goes on of Latin American 	strong 	men who came to power by way of the gun. Military coups are not uncommon in many Latin American countries where many factions with many different interests possess plenty of firearms. Government corruption and injustice on a government’s part has a tendency for opening it up to a military takeover in the name of the people. This usually goes hand-in-hand with a healthy dose of law and order. The only question is, when the military overthrows the government, who will be in charge?'
  },

  {
    category: 'Domestic',
    word: 'Genocide',
    definition: 'When a group of people is being systematically eliminated in your country, business suffers. With genocide and the organized rape and arson of much of your country, your farm lies in ruins. Livestock are eaten and sacrificed and fields are burned to deprive enemies. No matter how you look at it, Genocide is bad for business.'
  },

  {
    category: 'Domestic',
    word: 'High Taxes',
    definition: 'For whatever reason, the government wanted more of what you work so hard for to do who knows 	what with. The taxes really hit luxury industries hard and the banker is sure to take a higher cut than usual on everything grown.'
  },

  {
    category: 'Domestic',
    word: 'High Import Tariffs',
    definition: 'The government of your country wants small, independent businesses like yours to grow. One of the ways that they are encouraging this is by charging a pretty hefty tax on crops and luxury items imported to your country. '
  },

  {
    category: 'Domestic',
    word: 'Low Import Tariffs',
    definition: 'Sometimes, in order to get financial support, small Latin American countries such as yours have 	to give in to other countries’ demands. One of the most common demands they make is that tariffs be lifted to allow free trade which sounds great. However, this also means that huge companies with factory farms can out produce you and undersell you for pennies on the dollar. '
  },

  {
    category: 'Domestic',
    word: 'Inflation',
    definition: 'The government is broke and they decided the only way out was to print more money. The only problem is that with more of it, it becomes worth less. This has a good side and a bad. It benefits countries that import your goods because they cost them less. So, you may sell more luxury goods but the return on them will be 	less.'
  },

  {
    category: 'Domestic',
    word: 'Tax Cuts',
    definition: 'Every once in a while the government decides that people can keep more of their money. This could be due to a surplus on their end or a need to stimulate the economy. Either way, the banker is going to collect less taxes and hopefully once people have more money on hand they will spend it on your goods, maybe even something they don’t need.'
  },

  {
    category: 'Domestic',
    word: 'Corrupt Government',
    definition: 'A corrupt government steals from its people to enhance its own wealth. This theft usually comes in the form of much higher taxes and more control over less reputable sources of income.'
  },

  {
    category: 'Domestic',
    word: 'Monopoly',
    definition: 'A monopoly involves one company owning the entire supply or manufacturing process of a product. When this happens, they can name their price. Unfortunately, your meager farm is not the one with the monopoly and your prices can’t hope to compete with an international company that has more hard cash than the government of your whole country. '
  },

  {
    category: 'Domestic',
    word: 'Government Price Lock',
    definition: 'Your leaders made promises during their political campaigns, one of the most popular was 	enough food for every family. This all sounds great but the government doesn’t want to be the one to help pay for it so they set a maximum price you can sell your domestic goods at which has left you without a profit.'
  },

  {
    category: 'Domestic',
    word: 'Legalization of Drugs',
    definition: 'After many long, bloody years of fighting an unsuccessful war on drugs in your country, the 	government has decided to take a different approach. They argue that by making drugs like coca and marijuana legal, they will reduce the criminal organizations that profit from prohibition. The only problem is now everyone is growing it.'
  },

  {
    category: 'Domestic',
    word: 'Depression',
    definition: 'The economy took a nosedive, no one saw it coming. Now no one has any cash to buy anything but people will still splurge on a way to forget their problems. The government is asking you to grow food at a loss just to make sure people don’t starve.'
  },

  {
    category: 'Domestic',
    word: 'Investment in Infrastructure',
    definition: 'New transportation and cheaper utilities options are good for business. It’s cheaper for you to produce and distribute your goods.'
  },

  {
    category: 'Domestic',
    word: 'Weak Currency',
    definition: 'Your money doesn’t go to far abroad but that could be a good thing. Tourists coming to your country marvel at how cheap everything is relative to their home countries and they are more likely to indulge. This also means that it doesn’t make much sense to buy things that are imported because they almost certainly cost more than domestic products.'
  },

  {
    category: 'Domestic',
    word: 'Strong Currency',
    definition: 'Strong currency makes importing goods from other countries much more tenable and many people have started to favor foreign products over domestic ones as a result. It’s also harder to sell goods abroad because they cost more in foreign markets.'
  },

  {
    category: 'Foreign',
    word: 'New Trend',
    definition: 'Fad diets and celebrity endorsements can have a big impact on demand making obscure fruits and cheeses items worth buying at high end supermarkets.'
  },

  {
    category: 'Foreign',
    word: 'Strong US Dollar',
    definition: 'Everything is so cheap by comparison. The US is willing to pay top dollar for luxury crops because so little of their money buys so much of our products.'
  },

  {
    category: 'Foreign',
    word: 'Embargo',
    definition: 'When a larger, more powerful country cuts off trade to a country, usually for political reasons. This usually involves blocking any goods from coming in or out. This is why a good Cuban cigar is hard to find. '
  },

  {
    category: 'Foreign',
    word: 'NAFTA',
    definition: 'The North American Free Trade Agreement (NAFTA) signed in the early 90’s was meant to 	encourage trade between countries by eliminating pesky barriers like tariffs and fair wage practices. This 	means that large, foreign companies can dictate cost on your goods. This isn’t going to be good for legitimate business. This means that farmers may look into other, less reputable ways of making a living.'
  },

  {
    category: 'Foreign',
    word: 'IMF Loan',
    definition: 'For countries just finishing up with a messy civil war or genocide, a loan from the IMF may seem like a quick fix. The only problem is that it comes at a price. The IMF gains oversight and control of the banking and trade aspects of governments that accept their help. As a result, trade tariffs tend to benefit companies and countries that work with the IMF. '
  },

  {
    category: 'Foreign',
    word: 'Foreign War',
    definition: 'Wars abroad are great for business, so long as they stay abroad. Countries at war have less manpower and more need for basic goods and they will pay high prices to secure their supply lines.'
  },

  {
    category: 'Foreign',
    word: 'Global Depression',
    definition: 'It’s hard out there for everyone. Countries are tightening their belts and spending less on exotic foreign goods in favor of building up their own industries.'
  },

  {
    category: 'Foreign',
    word: 'Human Rights Watch Investigation',
    definition: 'This press really is bad press. Foreign investors get a bit squeamish when doing business in a country where systematic rape is being employed. '
  },

  {
    category: 'Foreign',
    word: 'Foreign Coup',
    definition: 'Mohammad Mosaddegh, Jacobo Arbenz, and Michael Manley are just three examples of 	democratically elected officials that were deposed by the CIA. Every once and a while politician of a small country will decide not to play ball with a superpower like the US, China, or Russia and, depending on the ire this raises, they may be deposed covertly for it. While this may be bad news for legitimate foreign trade, the black market is booming.'
  },

  {
    category: 'Foreign',
    word: 'Trade Sanctions',
    definition: 'It could have been the death threats to entire populations of other countries or the fourth illegal test but, for reasons beyond your control, the government has decided to go and get itself sanctioned. This means that trade going into and out of your country is going to be cut off along with your profits. Hopefully they can turn down the rhetoric soon.'
  },

  {
    category: 'Foreign',
    word: 'CIA Deals',
    definition: 'The CIA has had its shadowy fingerprints on a fair share of shady activities in Latin America ranging from coups against democratically elected leaders to funding secret militias with drug money. Sometimes, they need to raise extra funds to engage in these activities and have even been shown to have aided in the smuggling of drugs into the US for sale.'
  },

  {
    category: 'Foreign',
    word: 'Tourism',
    definition: 'Tourists come to your country looking for an exotic slice of paradise that they couldn’t get at home. Local cuisine and riskier endeavors are usually what peek their interests.'
  },

  {
    category: 'Weather',
    word: 'Drought',
    definition: 'It hasn’t rained in ages. These conditions are hard on cash crops, especially those not native to the island.'
  },

  {
    category: 'Weather',
    word: 'Tropical Storm',
    definition: 'Not a full blown hurricane but pretty darn close. Tons of rain and fierce winds are going to take their toll.'
  },

  {
    category: 'Weather',
    word: 'Plenty of Sun',
    definition: 'Great tropical weather means a great harvest.'
  },

  {
    category: 'Weather',
    word: 'Hurricane',
    definition: 'Not only have your crops been decimated but there isn’t anywhere to sell them anyways and you have no way of getting your goods out of the country with the infrastructure in tatters.'
  },

  {
    category: 'Weather',
    word: 'Earthquake',
    definition: 'Your crops are fine but the country is not. The earthquake has done tons of damage to local infrastructure making it difficult for you to get goods to market.'
  },

  {
    category: 'Weather',
    word: 'Deforestation',
    definition: 'An increased demand for farmland has lead to deforestation that has thrown the entire ecosystem out of wack.'
  },

  {
    category: 'Weather',
    word: 'Sea Level Rise',
    definition: 'It is an undeniable fact that the sea level is rising. The further in the tide oges, the less farmland you have available.'
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
  } else if (newTerm.category == "Domestic")
  {
    document.getElementById("domestic").appendChild(containerEl);
  } else if (newTerm.category == "Foreign")
  {
    document.getElementById("foreign").appendChild(containerEl);
  } else if (newTerm.category == "Weather")
  {
    document.getElementById("weather").appendChild(containerEl);
  }
}

for (var i = 0; i < terms.length; i++){
  var newTerm = new Term(terms[i]);
    writeTerm(newTerm);
}
