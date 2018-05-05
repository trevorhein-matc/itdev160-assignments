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
    name: 'Domestic',
    cost: 1,
    value: 1,
    amount: 0,
    total: 0,
    yield: 0,
    selector: 'c1'
  },
  {
    name: 'Livestock',
    cost: 1,
    value: 2,
    amount: 0,
    total: 0,
    yield: 0,
    selector: 'c2'
  },
  {
    name: 'Cash',
    cost: 2,
    value: 2,
    amount: 0,
    total: 0,
    yield: 0,
    selector: 'c3'
  },
  {
    name: 'Illegal',
    cost: 3,
    value: 3,
    amount: 0,
    total: 0,
    yield: 0,
    selector: 'c4'
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

function Crop(crops) {
  this.name = crops.name;
  this.cost = crops.cost;
  this.value = crops.value;
  this.amount = crops.amount;
  this.total = crops.cost * crops.amount;
  this.yield = crops.yield;
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

  this.getFormattedYield = function() {
    return this.yield.toLocaleString();
  };
}

var writeCropInfo = function(crop) {
  var selector = crop.selector,
    nameEl = getEl(selector + '-name'),
    costEl = getEl(selector + '-cost'),
    valueEl = getEl(selector + '-value'),
    amountEl = getEl(selector + '-amount'),
    totalEl = getEl(selector + '-total')

    nameEl.textContent = crop.name;
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
  var turnBank = bank;
  var totalInvest = 0;
  for (var t = 0; t < crops.length; t++){
    cropCost = cropCost + crops[t].total;
    landUse = landUse + crops[t].amount;
    laborCostTotal = Math.round(landUse * laborCostPerAcre);
  }

  totalInvest = (cropCost + laborCostTotal);
  savings = turnBank - totalInvest;

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

var yieldCalc = function() {
  var domCropAmount = crops[0].amount;
  var livestockAmount = crops[1].amount;
  var cashCropAmount = crops[2].amount;
  var illegalCropAmount = crops[3].amount;


}


var writeYieldInfo = function(cropYield) {
  var selector = cropYield.selector,
    nameEl = getEl(selector + '-yieldName'),
    amountEl = getEl(selector + '-yieldAmount'),
    totalEl = getEl(selector + '-yieldTotal')

    nameEl.textContent = cropYield.name;
    amountEl.textContent = cropYield.getFormattedAmount();
    totalEl.textContent = cropYield.getFormattedYield();
}

// Writes the crops table to the DOM
var yieldButton = function() {
  for (var i = 0; i < crops.length; i++) {
    var cropYield = new Crop(crops[i]);
    writeCropInfo(cropYield);
  }
}
