
var icons = [
  "https://maps.google.com/mapfiles/kml/shapes/bus.png",
  "https://maps.google.com/mapfiles/kml/paddle/blu-stars.png"
];

function initMap() {
  getCSV();
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(center.lat, center.lon),
    mapTypeId: 'roadmap'
  });

  var features = [];
  for (var i=0; i<markers.length; i++) {
    var marker = markers[i];
    features[i] = {
      position : new google.maps.LatLng(marker.lat, marker.lon),
      label : marker.label,
      iconIndex : marker.icon
    }
  }
  
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
    position : feature.position,
    icon : icons[feature.iconIndex],
    map : map,
    label : feature.label
    });
  });
  
}