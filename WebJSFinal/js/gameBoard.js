/*
var years = [];

function Year (id, number) {
  this.id = id;
  this.number = number;
}

function addYearElement (year) {
  var yearEl = document.getElementById('year-list');
  var newYearEl = document.createElement('td');
  var numberEl = document.createTextNode(year.number);

  newYearEl.setAttribute('id', year.id);
  newYearEl.appendChild(numberEl);
  yearEl.appendChild(newYearEl);
}

function addYear (event) {
  var id = 'year-' + years.length;
  var number = 1956 + years.length;

  var year = new Year(id, number);
  years.push(year);

  addYearElement(year);
}

function init () {
  document.getElementById('add-year').onclick = addYear;
}

init ();
*/

var bank = 25;
var totalInvest = 0;

var crops = [
  {
    name: 'Plantain',
    type: 'Domestic',
    cost: 1,
    value: 1,
    amount: 0,
    total: 0,
    selector: 'c1'
  },
  {
    name: 'Bananas',
    type: 'Domestic',
    cost: 1,
    value: 2,
    amount: 0,
    total: 0,
    selector: 'c2'
  },
  {
    name: 'Pineapples',
    type: 'Domestic',
    cost: 2,
    value: 2,
    amount: 0,
    total: 0,
    selector: 'c3'
  },
  {
    name: 'Sugar',
    type: 'Cash',
    cost: 3,
    value: 3,
    amount: 0,
    total: 0,
    selector: 'c4'
  },
  {
    name: 'Coffee',
    type: 'Cash',
    cost: 3,
    value: 4,
    amount: 0,
    total: 0,
    selector: 'c5'
  },
  {
    name: 'Cotton',
    type: 'Cash',
    cost: 4,
    value: 4,
    amount: 0,
    total: 0,
    selector: 'c6'
  },
  {
    name: 'Tobacco',
    type: 'Cash',
    cost: 4,
    value: 5,
    amount: 0,
    total: 0,
    selector: 'c7'
  },
  {
    name: 'Goats',
    type: 'Livestock',
    cost: 2,
    value: 3,
    amount: 0,
    total: 0,
    selector: 'c8'
  },
  {
    name: 'Cattle',
    type: 'Livestock',
    cost: 5,
    value: 6,
    amount: 0,
    total: 0,
    selector: 'c9'
  },
  {
    name: 'Marijuana',
    type: 'Illegal',
    cost: 1,
    value: 3,
    amount: 0,
    total: 0,
    selector: 'c10'
  },
  {
    name: 'Coca',
    type: 'Illegal',
    cost: 4,
    value: 6,
    amount: 0,
    total: 0,
    selector: 'c11'
  },
  {
    name: 'Opium',
    type: 'Illegal',
    cost: 3,
    value: 6,
    amount: 0,
    total: 0,
    selector: 'c12'
  }
];

var getEl = function (id) {
  return document.getElementById(id);
}

function plantainPurchaseBtn() {
  crops[0].amount ++;
  getEl("c1-amount").innerHTML = crops[0].amount;
  crops[0].total = crops[0].cost * crops[0].amount;
  getEl("c1-total").innerHTML = crops[0].total;
  writeCropTotalCost(crops);
  return true
}

function plantainSellBtn() {
  if (crops[0].amount > 0) {
    crops[0].amount --;
    getEl("c1-amount").innerHTML = crops[0].amount;
    crops[0].total = crops[0].cost * crops[0].amount;
    getEl("c1-total").innerHTML = crops[0].total;
    writeCropTotalCost(crops);
    return true
  }
}

function bananasPurchaseBtn() {
  crops[1].amount ++;
  getEl("c2-amount").innerHTML = crops[1].amount;
  crops[1].total = crops[1].cost * crops[1].amount;
  getEl("c2-total").innerHTML = crops[1].total;
  writeCropTotalCost(crops);
  return true
}

function bananasSellBtn() {
  if (crops[1].amount > 0) {
    crops[1].amount --;
    getEl("c2-amount").innerHTML = crops[1].amount;
    crops[1].total = crops[1].cost * crops[1].amount;
    getEl("c2-total").innerHTML = crops[1].total;
    writeCropTotalCost(crops);
    return true
  }
}

function pineapplesPurchaseBtn() {
  crops[2].amount ++;
  getEl("c3-amount").innerHTML = crops[2].amount;
  crops[2].total = crops[2].cost * crops[2].amount;
  getEl("c3-total").innerHTML = crops[2].total;
  writeCropTotalCost(crops);
  return true
}

function pineapplesSellBtn() {
  if (crops[2].amount > 0) {
    crops[2].amount --;
    getEl("c3-amount").innerHTML = crops[2].amount;
    crops[2].total = crops[2].cost * crops[2].amount;
    getEl("c3-total").innerHTML = crops[2].total;
    writeCropTotalCost(crops);
    return true
  }
}

function sugarPurchaseBtn() {
  crops[3].amount ++;
  getEl("c4-amount").innerHTML = crops[3].amount;
  crops[3].total = crops[3].cost * crops[3].amount;
  getEl("c4-total").innerHTML = crops[3].total;
  writeCropTotalCost(crops);
  return true
}

function sugarSellBtn() {
  if (crops[3].amount > 0) {
    crops[3].amount --;
    getEl("c4-amount").innerHTML = crops[3].amount;
    crops[3].total = crops[3].cost * crops[3].amount;
    getEl("c4-total").innerHTML = crops[3].total;
    writeCropTotalCost(crops);
    return true
  }
}

function coffeePurchaseBtn() {
  crops[4].amount ++;
  getEl("c5-amount").innerHTML = crops[4].amount;
  crops[4].total = crops[4].cost * crops[4].amount;
  getEl("c5-total").innerHTML = crops[4].total;
  writeCropTotalCost(crops);
  return true
}

function coffeeSellBtn() {
  if (crops[4].amount > 0) {
    crops[4].amount --;
    getEl("c5-amount").innerHTML = crops[4].amount;
    crops[4].total = crops[4].cost * crops[4].amount;
    getEl("c5-total").innerHTML = crops[4].total;
    writeCropTotalCost(crops);
    return true
  }
}

function cottonPurchaseBtn() {
  crops[5].amount ++;
  getEl("c6-amount").innerHTML = crops[5].amount;
  crops[5].total = crops[5].cost * crops[5].amount;
  getEl("c6-total").innerHTML = crops[5].total;
  writeCropTotalCost(crops);
  return true
}

function cottonSellBtn() {
  if (crops[5].amount > 0) {
    crops[5].amount --;
    getEl("c6-amount").innerHTML = crops[5].amount;
    crops[5].total = crops[5].cost * crops[5].amount;
    getEl("c6-total").innerHTML = crops[5].total;
    writeCropTotalCost(crops);
    return true
  }
}

function tobaccoPurchaseBtn() {
  crops[6].amount ++;
  getEl("c7-amount").innerHTML = crops[6].amount;
  crops[6].total = crops[6].cost * crops[6].amount;
  getEl("c7-total").innerHTML = crops[6].total;
  writeCropTotalCost(crops);
  return true
}

function tobaccoSellBtn() {
  if (crops[6].amount > 0) {
    crops[6].amount --;
    getEl("c7-amount").innerHTML = crops[6].amount;
    crops[6].total = crops[6].cost * crops[6].amount;
    getEl("c7-total").innerHTML = crops[6].total;
    writeCropTotalCost(crops);
    return true
  }
}
function goatsPurchaseBtn() {
  crops[7].amount ++;
  getEl("c8-amount").innerHTML = crops[7].amount;
  crops[7].total = crops[7].cost * crops[7].amount;
  getEl("c8-total").innerHTML = crops[7].total;
  writeCropTotalCost(crops);
  return true
}

function goatsSellBtn() {
  if (crops[7].amount > 0) {
    crops[7].amount --;
    getEl("c8-amount").innerHTML = crops[7].amount;
    crops[7].total = crops[7].cost * crops[7].amount;
    getEl("c8-total").innerHTML = crops[7].total;
    writeCropTotalCost(crops);
    return true
  }
}

function cattlePurchaseBtn() {
  crops[8].amount ++;
  getEl("c9-amount").innerHTML = crops[8].amount;
  crops[8].total = crops[8].cost * crops[8].amount;
  getEl("c9-total").innerHTML = crops[8].total;
  writeCropTotalCost(crops);
  return true
}

function cattleSellBtn() {
  if (crops[8].amount > 0) {
    crops[8].amount --;
    getEl("c9-amount").innerHTML = crops[8].amount;
    crops[8].total = crops[8].cost * crops[8].amount;
    getEl("c9-total").innerHTML = crops[8].total;
    writeCropTotalCost(crops);
    return true
  }
}

function marijuanaPurchaseBtn() {
  crops[9].amount ++;
  getEl("c10-amount").innerHTML = crops[9].amount;
  crops[9].total = crops[9].cost * crops[9].amount;
  getEl("c10-total").innerHTML = crops[9].total;
  writeCropTotalCost(crops);
  return true
}

function marijuanaSellBtn() {
  if (crops[9].amount > 0) {
    crops[9].amount --;
    getEl("c10-amount").innerHTML = crops[9].amount;
    crops[9].total = crops[9].cost * crops[9].amount;
    getEl("c10-total").innerHTML = crops[9].total;
    writeCropTotalCost(crops);
    return true
  }
}

function cocaPurchaseBtn() {
  crops[10].amount ++;
  getEl("c11-amount").innerHTML = crops[10].amount;
  crops[10].total = crops[10].cost * crops[10].amount;
  getEl("c11-total").innerHTML = crops[10].total;
  writeCropTotalCost(crops);
  return true
}

function cocaSellBtn() {
  if (crops[10].amount > 0) {
    crops[10].amount --;
    getEl("c11-amount").innerHTML = crops[10].amount;
    crops[10].total = crops[10].cost * crops[10].amount;
    getEl("c11-total").innerHTML = crops[10].total;
    writeCropTotalCost(crops);
    return true
  }
}

function opiumPurchaseBtn() {
  crops[11].amount ++;
  getEl("c12-amount").innerHTML = crops[11].amount;
  crops[11].total = crops[11].cost * crops[11].amount;
  getEl("c12-total").innerHTML = crops[11].total;
  writeCropTotalCost(crops);
  return true
}

function opiumSellBtn() {
  if (crops[11].amount > 0) {
    crops[11].amount --;
    getEl("c12-amount").innerHTML = crops[11].amount;
    crops[11].total = crops[11].cost * crops[11].amount;
    getEl("c12-total").innerHTML = crops[11].total;
    writeCropTotalCost(crops);
    return true
  }
}

function Crop(crops) {
  this.name = crops.name;
  this.type = crops.type;
  this.cost = crops.cost;
  this.value = crops.value;
  this.amount = crops.amount;
  this.total = crops.cost * crops.amount;
  this.selector = crops.selector;

  this.getFormattedCost = function() {
    return this.cost.toLocaleString();
  };

  this.getFormattedValue = function() {
    return this.value.toLocaleString();
  };

  this.getFormattedAmount = function() {
    return this.amount.toLocaleString();
  };

  this.getFormattedTotal = function() {
    return this.total.toLocaleString();
  };
}

var writeCropInfo = function(crop) {

  var selector = crop.selector,
    nameEl = getEl(selector + '-name'),
    typeEl = getEl(selector + '-type'),
    costEl = getEl(selector + '-cost'),
    valueEl = getEl(selector + '-value'),
    amountEl = getEl(selector + '-amount'),
    totalEl = getEl(selector + '-total')

    nameEl.textContent = crop.name;
    typeEl.textContent = crop.type;
    costEl.textContent = crop.getFormattedCost();
    valueEl.textContent = crop.getFormattedValue();
    amountEl.textContent = crop.getFormattedAmount();
    totalEl.textContent = crop.getFormattedTotal();
}

// Writes the crops table to the DOM
for (var i = 0; i < crops.length; i++) {
  var crop = new Crop(crops[i]);
  writeCropInfo(crop);
}

var writeCropTotalCost = function(crops) {
  var cropCost = 0;
  var landUse = 0;
  var laborCostPerAcre = 0.25;
  var laborCostTotal = 0;
  var savings = 0;
  var bank = 25;
  var totalInvest = 0;
  for (var t = 0; t < crops.length; t++){
    cropCost = cropCost + crops[t].total;
    landUse = landUse + crops[t].amount;
    laborCostTotal = Math.round(landUse * laborCostPerAcre);
  }

  totalInvest = (cropCost + laborCostTotal);
  savings = bank - totalInvest;

  cropCostEl = getEl('cropTotalCost'),
  landUseEl = getEl('landUse'),
  laborCostTotalEl = getEl('laborCost'),
  bankEl = getEl('bank'),
  investEl = getEl('invested')

  cropCostEl.innerHTML = cropCost;
  landUseEl.innerHTML = landUse;
  laborCostTotalEl.innerHTML = laborCostTotal;
  bankEl.innerHTML = savings;
  investEl.innerHTML = totalInvest;
}

/*
var writeBankTotals = function(crops) {
  totalInvest = (cropCost + landUse + laborCostTotal);
  bank
}
*/
