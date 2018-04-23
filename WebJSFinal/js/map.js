var mymap = L.map('mapid').setView([-4.010695, -71.497656], 3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.pirates',
    accessToken: 'pk.eyJ1IjoidHJlaGVpbmd1eSIsImEiOiJjamZjcXNtZmQyM3RlM3VtemloN3hnZWdlIn0.tNjmCotRY5nY7dlal1X-jA'
}).addTo(mymap);

/*
var popup = L.popup()
    .setLatLng([18.23, -72.56])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
*/

var argentina = L.circle([-34.603684, -58.381559], {color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var bolivia = L.circle([-16.489689, -68.119294], {color: 'blue', fillColor: 'blue', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var brazil = L.circle([-23.550520, -46.633309], {color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var chile = L.circle([-33.448890, -70.669265], {color: 'red', fillColor: 'red', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var colombia = L.circle([4.710989, -74.072092], {color: 'red', fillColor: 'red', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var costaRica = L.circle([9.928069, -84.090725], {color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var cuba = L.circle([23.113592, -82.366596], {color: 'red', fillColor: 'red', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var dominicanRepublic = L.circle([18.765850, -69.040668], {color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var ecuador = L.circle([-0.180653, -78.467838], {color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var elSalvador = L.circle([13.692940, -89.218191], {color: 'red', fillColor: 'red', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var guatemala = L.circle([14.634915, -90.506882], {color: 'red', fillColor: 'red', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var haiti = L.circle([18.594395, -72.307433], {color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var honduras = L.circle([14.072275, -87.192136], {color: 'red', fillColor: 'red', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var jamaica = L.circle([18.476223, -77.89389], {color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var mexico = L.circle([19.432608, -99.133208], {color: 'red', fillColor: 'red', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var nicaragua = L.circle([12.114993, -86.236174], {color: 'red', fillColor: 'red', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var panama = L.circle([8.537981, -80.782127], {color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var paraguay = L.circle([-25.263740, -57.575926], {color: 'blue', fillColor: 'blue', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var peru = L.circle([-12.046373, -77.042754], {color: 'red', fillColor: 'red', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var puertoRico = L.circle([18.465539, -66.105735], {color: 'red', fillColor: 'red', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var uruguay = L.circle([-34.901113, -56.164531], {color: 'red', fillColor: 'red', fillOpacity: 0.5, radius: 100000}).addTo(mymap);
var venezuela = L.circle([10.480594, -66.903606], {color: 'blue', fillColor: 'blue', fillOpacity: 0.5, radius: 100000}).addTo(mymap);

var allCountries = L.layerGroup([argentina, bolivia, brazil, chile, colombia, costaRica, cuba, dominicanRepublic, ecuador, elSalvador, guatemala, haiti, honduras, jamaica, mexico, nicaragua, panama, paraguay, peru, puertoRico, uruguay, venezuela]);

var economic = L.layerGroup([argentina, brazil, costaRica, dominicanRepublic, ecuador, haiti, jamaica, panama]);

var political = L.layerGroup([bolivia, guatemala, jamaica, mexico, panama, paraguay, peru, puertoRico, uruguay, venezuela]);

var military = L.layerGroup([colombia, chile, cuba, elSalvador, guatemala, honduras, mexico, nicaragua]);

var overlayMaps = {
    "All": allCountries,
    "Economic": economic,
    "Political": political,
    "Military": military
};

L.control.layers(overlayMaps, null).addTo(mymap)

//cuba.bindPopup("<b>Hello world!</b><br>I am a popup.");
