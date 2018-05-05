var mymap = L.map('mapid').setView([-4.010695, -71.497656], 3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.pirates',
    accessToken: 'pk.eyJ1IjoidHJlaGVpbmd1eSIsImEiOiJjamZjcXNtZmQyM3RlM3VtemloN3hnZWdlIn0.tNjmCotRY5nY7dlal1X-jA'
}).addTo(mymap);

var blueIcon = new L.Icon({
	iconUrl: '../images/marker-icon-blue.png',
	shadowUrl: '../images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var redIcon = new L.Icon({
	iconUrl: '../images/marker-icon-red.png',
	shadowUrl: '../images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var greenIcon = new L.Icon({
	iconUrl: '../images/marker-icon-green.png',
	shadowUrl: '../images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var orangeIcon = new L.Icon({
	iconUrl: '../images/marker-icon-orange.png',
	shadowUrl: '../images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var yellowIcon = new L.Icon({
	iconUrl: '../images/marker-icon-yellow.png',
	shadowUrl: '../images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var violetIcon = new L.Icon({
	iconUrl: '../images/marker-icon-violet.png',
	shadowUrl: '../images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var blackIcon = new L.Icon({
	iconUrl: '../images/marker-icon-black.png',
	shadowUrl: '../images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

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



var argentina = L.marker([-34.603684, -58.381559], {
	icon: blackIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var bolivia = L.marker([-16.489689, -68.119294], {
	icon: blackIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var brazil = L.marker([-23.550520, -46.633309], {
	icon: greenIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var chile = L.marker([-33.448890, -70.669265], {
	icon: redIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var colombia = L.marker([4.710989, -74.072092], {
	icon: redIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var costaRica = L.marker([9.928069, -84.090725], {
	icon: greenIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var cuba = L.marker([23.113592, -82.366596], {
	icon: redIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var dominicanRepublic = L.marker([18.765850, -69.040668], {
	icon: greenIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var ecuador = L.marker([-0.180653, -78.467838], {
	icon: greenIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var elSalvador = L.marker([13.692940, -89.218191], {
	icon: redIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var guatemala = L.marker([14.634915, -90.506882], {
	icon: redIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var haiti = L.marker([18.594395, -72.307433], {
	icon: greenIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var honduras = L.marker([14.072275, -87.192136], {
	icon: redIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var jamaica = L.marker([18.476223, -77.89389], {
	icon: greenIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var mexico = L.marker([19.432608, -99.133208], {
	icon: redIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var nicaragua = L.marker([12.114993, -86.236174], {
	icon: redIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var panama = L.marker([8.537981, -80.782127], {
	icon: greenIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var paraguay = L.marker([-25.263740, -57.575926], {
	icon: blackIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var peru = L.marker([-12.046373, -77.042754], {
	icon: blackIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var puertoRico = L.marker([18.465539, -66.105735], {
	icon: blackIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var uruguay = L.marker([-34.901113, -56.164531], {
	icon: blackIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});
var venezuela = L.marker([10.480594, -66.903606], {
	icon: blackIcon
}).addTo(mymap).on('click', function () {
  sidebar.toggle();
});

var allCountries = L.layerGroup([argentina, bolivia, brazil, chile, colombia, costaRica, cuba, dominicanRepublic, ecuador, elSalvador, guatemala, haiti, honduras, jamaica, mexico, nicaragua, panama, paraguay, peru, puertoRico, uruguay, venezuela]);

var economic = L.layerGroup([brazil, costaRica, dominicanRepublic, ecuador, haiti, jamaica, panama]);

var political = L.layerGroup([argentina, bolivia, paraguay, peru, puertoRico, uruguay, venezuela]);

var military = L.layerGroup([colombia, chile, cuba, elSalvador, guatemala, honduras, mexico, nicaragua]);

var overlayMaps = {
    "All": allCountries,
    "Economic": economic,
    "Political": political,
    "Military": military
};

L.control.layers(overlayMaps, null).addTo(mymap)

cuba.bindPopup("<b>Hello world!</b><br>I am a popup.");

// Adding sidenav with functions

L.Control.Sidebar = L.Control.extend({

    includes: L.Mixin.Events,

    options: {
        closeButton: true,
        position: 'left',
        autoPan: true,
    },

    initialize: function (placeholder, options) {
        L.setOptions(this, options);

        // Find content container
        var content = this._contentContainer = L.DomUtil.get(placeholder);

        // Remove the content container from its original parent
        content.parentNode.removeChild(content);

        var l = 'leaflet-';

        // Create sidebar container
        var container = this._container =
            L.DomUtil.create('div', l + 'sidebar ' + this.options.position);

        // Style and attach content container
        L.DomUtil.addClass(content, l + 'control');
        container.appendChild(content);

        // Create close button and attach it if configured
        if (this.options.closeButton) {
            var close = this._closeButton =
                L.DomUtil.create('a', 'close', container);
            close.innerHTML = '&times;';
        }
    },

    addTo: function (mymap) {
        var container = this._container;
        var content = this._contentContainer;

        // Attach event to close button
        if (this.options.closeButton) {
            var close = this._closeButton;

            L.DomEvent.on(close, 'click', this.hide, this);
        }

        L.DomEvent
            .on(container, 'transitionend',
                this._handleTransitionEvent, this)
            .on(container, 'webkitTransitionEnd',
                this._handleTransitionEvent, this);

        // Attach sidebar container to controls container
        var controlContainer = mymap._controlContainer;
        controlContainer.insertBefore(container, controlContainer.firstChild);

        this._map = mymap;

        // Make sure we don't drag the map when we interact with the content
        var stop = L.DomEvent.stopPropagation;
        var fakeStop = L.DomEvent._fakeStop || stop;
        L.DomEvent
            .on(content, 'contextmenu', stop)
            .on(content, 'click', fakeStop)
            .on(content, 'mousedown', stop)
            .on(content, 'touchstart', stop)
            .on(content, 'dblclick', fakeStop)
            .on(content, 'mousewheel', stop)
            .on(content, 'MozMousePixelScroll', stop);

        return this;
    },

    removeFrom: function (mymap) {
        //if the control is visible, hide it before removing it.
        this.hide();

        var container = this._container;
        var content = this._contentContainer;

        // Remove sidebar container from controls container
        var controlContainer = mymap._controlContainer;
        controlContainer.removeChild(container);

        //disassociate the map object
        this._map = null;

        // Unregister events to prevent memory leak
        var stop = L.DomEvent.stopPropagation;
        var fakeStop = L.DomEvent._fakeStop || stop;
        L.DomEvent
            .off(content, 'contextmenu', stop)
            .off(content, 'click', fakeStop)
            .off(content, 'mousedown', stop)
            .off(content, 'touchstart', stop)
            .off(content, 'dblclick', fakeStop)
            .off(content, 'mousewheel', stop)
            .off(content, 'MozMousePixelScroll', stop);

        L.DomEvent
            .off(container, 'transitionend',
                this._handleTransitionEvent, this)
            .off(container, 'webkitTransitionEnd',
                this._handleTransitionEvent, this);

        if (this._closeButton && this._close) {
            var close = this._closeButton;

            L.DomEvent.off(close, 'click', this.hide, this);
        }

        return this;
    },

    isVisible: function () {
        return L.DomUtil.hasClass(this._container, 'visible');
    },

    show: function () {
        if (!this.isVisible()) {
            L.DomUtil.addClass(this._container, 'visible');
            if (this.options.autoPan) {
                this._map.panBy([-this.getOffset() / 2, 0], {
                    duration: 0.5
                });
            }
            this.fire('show');
        }
    },

    hide: function (e) {
        if (this.isVisible()) {
            L.DomUtil.removeClass(this._container, 'visible');
            if (this.options.autoPan) {
                this._map.panBy([this.getOffset() / 2, 0], {
                    duration: 0.5
                });
            }
            this.fire('hide');
        }
        if(e) {
            L.DomEvent.stopPropagation(e);
        }
    },

    toggle: function () {
        if (this.isVisible()) {
            this.hide();
        } else {
            this.show();
        }
    },

    getContainer: function () {
        return this._contentContainer;
    },

    getCloseButton: function () {
        return this._closeButton;
    },

    setContent: function (content) {
        var container = this.getContainer();

        if (typeof content === 'string') {
            container.innerHTML = content;
        } else {
            // clean current content
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            container.appendChild(content);
        }

        return this;
    },

    getOffset: function () {
        if (this.options.position === 'right') {
            return -this._container.offsetWidth;
        } else {
            return this._container.offsetWidth;
        }
    },

    _handleTransitionEvent: function (e) {
        if (e.propertyName == 'left' || e.propertyName == 'right')
            this.fire(this.isVisible() ? 'shown' : 'hidden');
    }
});

L.control.sidebar = function (placeholder, options) {
    return new L.Control.Sidebar(placeholder, options);
};

var sidebar = L.control.sidebar('sidebar', {
    closeButton: true,
    position: 'left'
});

mymap.addControl(sidebar);

setTimeout(function () {
    sidebar.show();
}, 500);

mymap.on('click', function () {
    sidebar.hide();
})
