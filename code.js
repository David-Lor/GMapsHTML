
/*  JSON FORMAT IN URL:
    {
        "center" : [latitude, longitude],
        "markers" : [
            {
            "pos" : [latitude, longitude],
            "label" : label text,
            "symbol" : symbol/icon
            }, ...
        ]
    }
*/

var map;
var mapdata;
var url = window.location.href;
var urlSplit = url.split("?");

if (urlSplit.length < 2) {
  document.write("<h1>No JSON given in URL!</h1>")
} else {
  var jsonString = decodeURI(urlSplit[1]);
  mapdata = JSON.parse(jsonString);
}

var map;
var mapdata;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(mapdata.center[0], mapdata.center[1]),
    mapTypeId: 'roadmap'
  });
  

  var icons = {
    marker : {
      icon : "http://maps.google.com/mapfiles/kml/shapes/bus.png"
    },
    center : {
        icon : "http://maps.google.com/mapfiles/kml/paddle/blu-stars.png"
    }
  };

  var features = [];

  for (var i=0; i<mapdata.markers.length; i++) {
    var marker = mapdata.markers[i];
    features[i] = {
      position : new google.maps.LatLng(marker.pos[0], marker.pos[1]),
      label : marker.label,
      type : marker.symbol
    }
  }

  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position : feature.position,
      icon : icons[feature.type].icon,
      map : map,
      label : feature.label
    });
  });
}