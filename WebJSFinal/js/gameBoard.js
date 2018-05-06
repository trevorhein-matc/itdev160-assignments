var bank = 25;
var totalInvest = 0;

var crops = [
  {
    name: 'Domestic',
    cost: 1,
    value: 2,
    amount: 0,
    total: 0,
    yield: 0,
    domValue: 0,
    foreignValue: 0,
    selector: 'c1'
  },
  {
    name: 'Livestock',
    cost: 2,
    value: 4,
    amount: 0,
    total: 0,
    yield: 0,
    domValue: 0,
    foreignValue: 0,
    selector: 'c2'
  },
  {
    name: 'Cash',
    cost: 3,
    value: 5,
    amount: 0,
    total: 0,
    yield: 0,
    domValue: 0,
    foreignValue: 0,
    selector: 'c3'
  },
  {
    name: 'Illegal',
    cost: 2,
    value: 5,
    amount: 0,
    total: 0,
    yield: 0,
    domValue: 0,
    foreignValue: 0,
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
  this.domValue = crops.domValue;
  this.foreignValue = crops.foreignValue;
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

  this.getFormattedDomValue = function() {
    return this.domValue.toLocaleString();
  }

  this.getFormattedForeignValue = function() {
    return this.foreignValue.toLocaleString();
  }
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

// Yield Calc

var yieldCalc = function() {
  var domCropAmount = crops[0].amount;
  var livestockAmount = crops[1].amount;
  var cashCropAmount = crops[2].amount;
  var illegalCropAmount = crops[3].amount;

  var weatherConditionEl = getEl('weatherCondition')
  var weatherText = "Test Weather";

  var weatherPicker = Math.floor(Math.random() * 3) + 1;
  var weatherSwitch = Math.floor(Math.random() * 2) + 1;

  if (weatherPicker == 1)
  {
    switch (weatherSwitch)
    {
      case 1:
        weatherText = "A lot of rain";
        crops[0].yield = Math.ceil(domCropAmount * 1.75);
        crops[1].yield = Math.ceil((livestockAmount * 1.25));
        crops[2].yield = Math.floor((cashCropAmount * .75));
        crops[3].yield = Math.ceil((illegalCropAmount * 1.25));
        break;
      case 2:
        weatherText = "Pretty dry";
        crops[0].yield = Math.floor(domCropAmount * .75);
        crops[1].yield = livestockAmount;
        crops[2].yield = Math.ceil((cashCropAmount * 1.25));
        crops[3].yield = Math.ceil((illegalCropAmount * 1.25));
        break;
    }
  }
  else if (weatherPicker == 2)
  {
    switch (weatherSwitch) {
      case 1:
        weatherText = "Plenty of sun";
        crops[0].yield = (domCropAmount * 3);
        crops[1].yield = Math.ceil(livestockAmount * 1.75);
        crops[2].yield = Math.ceil((cashCropAmount * 2.25));
        crops[3].yield = (illegalCropAmount * 2);
        break;
      case 2:
        weatherText = "Ideal conditions";
        crops[0].yield = Math.ceil(domCropAmount * 3.5);
        crops[1].yield = (livestockAmount * 2);
        crops[2].yield = Math.ceil((cashCropAmount * 2.5));
        crops[3].yield = Math.ceil((illegalCropAmount * 2.25));
        break;
    }
  }
  else
  {
    switch (weatherSwitch)
    {
      case 1:
        weatherText = "Hurricane";
        crops[0].yield = Math.floor(domCropAmount * .75);
        crops[1].yield = Math.floor((livestockAmount * .5));
        crops[2].yield = Math.floor((cashCropAmount * .25));
        crops[3].yield = Math.ceil((illegalCropAmount * 1.25));
        break;
      case 2:
        weatherText = "Earthquake";
        if (crops[1].amount <= 10)
        {
          crops[0].yield = (domCropAmount * 1);
          crops[1].yield = Math.ceil((livestockAmount * .75));
          crops[2].yield = Math.floor((cashCropAmount * .75));
          crops[3].yield = Math.ceil((illegalCropAmount * 1.25));
        }
        else {
          weatherText = "Mudslide";
          crops[0].yield = Math.floor(domCropAmount * .25);
          crops[1].yield = Math.floor((livestockAmount * .5));
          crops[2].yield = Math.floor((cashCropAmount * .25));
          crops[3].yield = Math.floor((illegalCropAmount * .5));
        }
        break;
    }
  }
  weatherConditionEl.innerHTML = weatherText;
}

var writeYieldInfo = function(crops) {
  var selector = crops.selector,
    nameEl = getEl(selector + '-yieldName'),
    amountEl = getEl(selector + '-yieldAmount'),
    totalEl = getEl(selector + '-yieldTotal')

    nameEl.textContent = crops.name;
    amountEl.textContent = crops.getFormattedAmount();
    totalEl.textContent = crops.getFormattedYield();
}

// Writes the yield table to the DOM
var yieldButton = function() {
  for (var i = 0; i < crops.length; i++) {
    var crop = new Crop(crops[i]);
    writeYieldInfo(crop);
  }
}

// Dom crop calc effects

var domEffectCalc = function() {
  var domCropYield = crops[0].yield;
  var livestockYield = crops[1].yield;
  var cashCropYield = crops[2].yield;
  var illegalCropYield = crops[3].yield;

  var domCropBaseValue = crops[0].value;
  var livestockBaseValue = crops[1].value;
  var cashCropBaseValue = crops[2].value;
  var illegalCropBaseValue = crops[3].value;

  var domEconConditionEl = getEl('domEconCondition');
  var domEconConditionText = "Test DomEconCondition";

  var domEconPicker = Math.floor(Math.random() * 2) + 1;
  var goodDomEconSwitch = Math.floor(Math.random() * 11) + 1;
  var badDomEconSwitch = Math.floor(Math.random() * 16) + 1;

  if (domEconPicker == 1) {
    switch (goodDomEconSwitch) {
      case 1:
        domEconConditionText = "Land Redistribution";
        crops[0].domValue = Math.ceil((domCropYield * domCropBaseValue)* 1.75);
        crops[1].domValue = ((livestockYield * livestockBaseValue) * 2);
        crops[2].domValue = Math.ceil((cashCropYield * cashCropBaseValue) * 1.25);
        crops[3].domValue = Math.floor((illegalCropYield * illegalCropBaseValue) * .5);
        break;
      case 2:
        domEconConditionText = "Public Works Projects";
        crops[0].domValue = Math.ceil((domCropYield * domCropBaseValue) * 1.25);
        crops[1].domValue = Math.ceil((livestockYield * livestockBaseValue) * 1.5);
        crops[2].domValue = Math.ceil((cashCropYield * cashCropBaseValue) * 1.25);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.5);
        break;
      case 3:
        domEconConditionText = "Federal Infrastructure Investment";
        crops[0].domValue = Math.ceil((domCropYield * domCropBaseValue) * 1.5);
        crops[1].domValue = Math.ceil((livestockYield * livestockBaseValue) * .75);
        crops[2].domValue = Math.ceil((cashCropYield * cashCropBaseValue) * 1.25);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * .5);
        break;
      case 4:
        domEconConditionText = "Industrialization";
        crops[0].domValue = Math.ceil((domCropYield * domCropBaseValue) * .75);
        crops[1].domValue = (livestockYield * livestockBaseValue);
        crops[2].domValue = Math.ceil((cashCropYield * cashCropBaseValue) * 1.5);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.25);
        break;
      case 5:
        domEconConditionText = "Prohibition";
        crops[0].domValue = Math.ceil((domCropYield * domCropBaseValue) * 1.25);
        crops[1].domValue = (livestockYield * livestockBaseValue);
        crops[2].domValue = Math.ceil((cashCropYield * cashCropBaseValue) * 1.25);
        crops[3].domValue = ((illegalCropYield * illegalCropBaseValue) * 2);
        break;
      case 6:
        domEconConditionText = "New Trend";
        crops[0].domValue = Math.ceil((domCropYield * domCropBaseValue) * 1.5);
        crops[1].domValue = Math.ceil((livestockYield * livestockBaseValue) * 1.5);
        crops[2].domValue = Math.ceil((cashCropYield * cashCropBaseValue) * 1.75);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.25);
        break;
      case 7:
        domEconConditionText = "High Import Tariffs";
        crops[0].domValue = Math.ceil((domCropYield * domCropBaseValue) * 1.75);
        crops[1].domValue = (livestockYield * livestockBaseValue) * 2;
        crops[2].domValue = (cashCropYield * cashCropBaseValue) * 2;
        crops[3].domValue = (illegalCropYield * illegalCropBaseValue);
        break;
      case 8:
        domEconConditionText = "Open Borders";
        crops[0].domValue = Math.floor((domCropYield * domCropBaseValue) * .75);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .5);
        crops[2].domValue = ((cashCropYield * cashCropBaseValue) * 2);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.5);
        break;
      case 9:
        domEconConditionText = "Tax Cuts";
        crops[0].domValue = Math.ceil((domCropYield * domCropBaseValue) * 1.25);
        crops[1].domValue = Math.ceil((livestockYield * livestockBaseValue) * 1.75);
        crops[2].domValue = ((cashCropYield * cashCropBaseValue) * 2);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.25);
        break;
      case 10:
        domEconConditionText = "Drug Legalization";
        crops[0].domValue = Math.ceil((domCropYield * domCropBaseValue) * 1.25);
        crops[1].domValue = Math.ceil((livestockYield * livestockBaseValue) * 1.25);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .75);
        crops[3].domValue = Math.floor((illegalCropYield * illegalCropBaseValue) * .5);
        break;
      case 11:
        domEconConditionText = "Buy Local";
        crops[0].domValue = Math.ceil((domCropYield * domCropBaseValue) * 1.75);
        crops[1].domValue = Math.ceil((livestockYield * livestockBaseValue) * 1.75);
        crops[2].domValue = Math.ceil((cashCropYield * cashCropBaseValue) * 1.25);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.25);
        break;
    }
  } else {
    switch (badDomEconSwitch) {
      case 1:
        domEconConditionText = "Drug War";
        crops[0].domValue = (domCropYield * domCropBaseValue);
        crops[1].domValue = (livestockYield * livestockBaseValue);
        crops[2].domValue = Math.ceil((cashCropYield * cashCropBaseValue) * 1.25);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.5);
        break;
      case 2:
        domEconConditionText = "Civil War";
        crops[0].domValue = Math.floor((domCropYield * domCropBaseValue) * .75);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .5);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .25);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.75);
        break;
      case 3:
        domEconConditionText = "Political Unrest";
        crops[0].domValuel = (domCropYield * domCropBaseValue);
        crops[1].domValue = (livestockYield * livestockBaseValue);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .75);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.5);
        break;
      case 4:
        domEconConditionText = "Protests";
        crops[0].domValue = (domCropYield * domCropBaseValue);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .75);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .5);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.25);
        break;
      case 5:
        domEconConditionText = "Strikes";
        crops[0].domValue = Math.floor((domCropYield * domCropBaseValue) * .5);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .25);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .25);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.25);
        break;
      case 6:
        domEconConditionText = "Military Coup";
        crops[0].domValue = Math.floor((domCropYield * domCropBaseValue) * .75);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .75);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .75);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.25);
        break;
      case 7:
        domEconConditionText = "Genocide";
        crops[0].domValue = Math.floor((domCropYield * domCropBaseValue) * .5);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .25);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .25);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.5);
        break;
      case 8:
        domEconConditionText = "High Taxes";
        crops[0].domValue = (domCropYield * domCropBaseValue);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .75);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .5);
        crops[3].domValue = (illegalCropYield * illegalCropBaseValue);
        break;
      case 9:
        domEconConditionText = "Low Import Tariffs";
        crops[0].domValue = Math.floor((domCropYield * domCropBaseValue) * .75);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .5);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .75);
        crops[3].domValue = (illegalCropYield * illegalCropBaseValue);
        break;
      case 10:
        domEconConditionText = "Inflation";
        crops[0].domValue = Math.floor((domCropYield * domCropBaseValue) * .75);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .5);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .5);
        crops[3].domValue = (illegalCropYield * illegalCropBaseValue);
        break;
      case 11:
        domEconConditionText = "Government Corruption";
        crops[0].domValue = (domCropYield * domCropBaseValue);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .75);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .75);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.25);
        break;
      case 12:
        domEconConditionText = "Monopoly";
        crops[0].domValue = Math.floor((domCropYield * domCropBaseValue) * .5);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .5);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .5);
        crops[3].domValue = (illegalCropYield * illegalCropBaseValue);
        break;
      case 13:
        domEconConditionText = "Government Price Lock";
        crops[0].domValue = Math.ceil((domCropYield * domCropBaseValue) * 1.25);
        crops[1].domValue = (livestockYield * livestockBaseValue);
        crops[2].domValue = (cashCropYield * cashCropBaseValue);
        crops[3].domValue = (illegalCropYield * illegalCropBaseValue);
        break;
      case 14:
        domEconConditionText = "Depression";
        crops[0].domValue = Math.floor((domCropYield * domCropBaseValue) * .75);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .5);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .25);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.25);
        break;
      case 15:
        domEconConditionText = "Paramilitary Forces";
        crops[0].domValue = (domCropYield * domCropBaseValue);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .75);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .75);
        crops[3].domValue = Math.floor((illegalCropYield * illegalCropBaseValue) * .75);
        break;
      case 16:
        domEconConditionText = "Guerrilla Warfare";
        crops[0].domValue = (domCropYield * domCropBaseValue);
        crops[1].domValue = Math.floor((livestockYield * livestockBaseValue) * .5);
        crops[2].domValue = Math.floor((cashCropYield * cashCropBaseValue) * .25);
        crops[3].domValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.75);
        break;
    }
  }
  domEconConditionEl.innerHTML = domEconConditionText;
}

// Foreign Crop Effects

var foreignEffectCalc = function() {
  var domCropYield = crops[0].yield;
  var livestockYield = crops[1].yield;
  var cashCropYield = crops[2].yield;
  var illegalCropYield = crops[3].yield;

  var domCropBaseValue = crops[0].value;
  var livestockBaseValue = crops[1].value;
  var cashCropBaseValue = crops[2].value;
  var illegalCropBaseValue = crops[3].value;

  var foreignEconConditionEl = getEl('foreignEconCondition');
  var foreignEconConditionText = "Test foreignEconCondition";

  var foreignEconPicker = Math.floor(Math.random() * 2) + 1;
  var goodForeignEconSwitch = Math.floor(Math.random() * 7) + 1;
  var badForeignEconSwitch = Math.floor(Math.random() * 9) + 1;

  if (foreignEconPicker == 1) {
    switch (goodForeignEconSwitch) {
      case 1:
        foreignEconConditionText = "New Trend";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * 1.5);
        crops[1].foreignValue = Math.ceil((livestockYield * livestockBaseValue) * 1.25);
        crops[2].foreignValue = Math.ceil((cashCropYield * cashCropBaseValue) * 1.25);
        crops[3].foreignValue = Math.ceil((illegalCropYield * illegalCropBaseValue) * 1.75);
        break;
      case 2:
        foreignEconConditionText = "Foreign War";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * 1.5);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * 1.5);
        crops[2].foreignValue = Math.floor((cashCropYield * cashCropBaseValue) * .5);
        crops[3].foreignValue = Math.floor((illegalCropYield * illegalCropBaseValue) * 1.25);
        break;
      case 3:
        foreignEconConditionText = "Tourism";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * 1.75);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * 1.25);
        crops[2].foreignValue = ((cashCropYield * cashCropBaseValue) * 2);
        crops[3].foreignValue = Math.floor((illegalCropYield * illegalCropBaseValue) * 1.75);
        break;
      case 4:
        foreignEconConditionText = "CIA Deal";
        crops[0].foreignValue = (domCropYield * domCropBaseValue);
        crops[1].foreignValue = (livestockYield * livestockBaseValue);
        crops[2].foreignValue = (cashCropYield * cashCropBaseValue);
        crops[3].foreignValue = ((illegalCropYield * illegalCropBaseValue) * 2);
        break;
      case 5:
        foreignEconConditionText = "Globalization";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * 1.5);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * 1.25);
        crops[2].foreignValue = Math.floor((cashCropYield * cashCropBaseValue) * 1.25);
        crops[3].foreignValue = Math.floor((illegalCropYield * illegalCropBaseValue) * 1.25);
        break;
      case 6:
        foreignEconConditionText = "Colonial Reparations";
        crops[0].foreignValue = ((domCropYield * domCropBaseValue) * 2);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * 1.5);
        crops[2].foreignValue = Math.floor((cashCropYield * cashCropBaseValue) * 1.5);
        crops[3].foreignValue = Math.floor((illegalCropYield * illegalCropBaseValue) * 1.25);
        break;
      case 7:
        foreignEconConditionText = "Exclusive Trade Agreement";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * 1.5);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * 1.5);
        crops[2].foreignValue = Math.floor((cashCropYield * cashCropBaseValue) * 1.5);
        crops[3].foreignValue = (illegalCropYield * illegalCropBaseValue);
        break;
    }
  } else {
    switch (badForeignEconSwitch) {
      case 1:
        foreignEconConditionText = "Embargo";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * 1.5);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * 1.25);
        crops[2].foreignValue = Math.floor((cashCropYield * cashCropBaseValue) * .25);
        crops[3].foreignValue = Math.floor((illegalCropYield * illegalCropBaseValue) * .25);
        break;
      case 2:
        foreignEconConditionText = "NAFTA";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * .75);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * .5);
        crops[2].foreignValue = Math.floor((cashCropYield * cashCropBaseValue) * 1.25);
        crops[3].foreignValue = (illegalCropYield * illegalCropBaseValue);
        break;
      case 3:
        foreignEconConditionText = "IMF Loan";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * .75);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * .5);
        crops[2].foreignValue = Math.floor((cashCropYield * cashCropBaseValue) * .75);
        crops[3].foreignValue = (illegalCropYield * illegalCropBaseValue);
        break;
      case 4:
        foreignEconConditionText = "Global Depression";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * .75);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * .5);
        crops[2].foreignValue = Math.floor((cashCropYield * cashCropBaseValue) * .25);
        crops[3].foreignValue = Math.floor((illegalCropYield * illegalCropBaseValue) * 1.5);
        break;
      case 5:
        foreignEconConditionText = "Sustainably Sourced";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * 1.25);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * 1.5);
        crops[2].foreignValue = Math.floor((cashCropYield * cashCropBaseValue) * 1.25);
        crops[3].foreignValue = (illegalCropYield * illegalCropBaseValue);
        break;
      case 6:
        foreignEconConditionText = "Foreign Private Investment";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * .75);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * .75);
        crops[2].foreignValue = Math.floor((cashCropYield * cashCropBaseValue) * .5);
        crops[3].foreignValue = (illegalCropYield * illegalCropBaseValue);
        break;
      case 7:
        foreignEconConditionText = "Foreign Sponsored Coup";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * .75);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * .5);
        crops[2].foreignValue = Math.floor((cashCropYield * cashCropBaseValue) * .25);
        crops[3].foreignValue = Math.floor((illegalCropYield * illegalCropBaseValue) * 1.25);
        break;
      case 8:
        foreignEconConditionText = "Trade Sanctions";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * .75);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * .75);
        crops[2].foreignValue = Math.floor((cashCropYield * cashCropBaseValue) * .25);
        crops[3].foreignValue = (illegalCropYield * illegalCropBaseValue);
        break;
      case 9:
        foreignEconConditionText = "Foreign Subsidies";
        crops[0].foreignValue = Math.ceil((domCropYield * domCropBaseValue) * .5);
        crops[1].foreignValue = Math.floor((livestockYield * livestockBaseValue) * .5);
        crops[2].foreignValue = Math.floor((cashCropYield * cashCropBaseValue) * .75);
        crops[3].foreignValue = (illegalCropYield * illegalCropBaseValue);
        break;
    }
  }
  foreignEconConditionEl.innerHTML = foreignEconConditionText;
}

var foreignEffectCalc = function() {
  var foreignEconConditionEl = getEl('foreignEconCondition');
  var foreignEconConditionText = "Test foreignEconCondition";
}

var writeEffectCalc = function(crops) {
  var selector = crops.selector,
    domesticEconValueEl = getEl(selector + '-domValue'),
    foreignEconValueEl = getEl(selector + '-foreignValue')

    domesticEconValueEl.textContent = crops.getFormattedDomValue();
    foreignEconValueEl.textContent = crops.getFormattedForeignValue();
}

var EffectCalcButton = function () {
  for (var i = 0; i < crops.length; i++) {
    var crop = new Crop(crops[i]);
    writeEffectCalc(crop);
  }
}


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
