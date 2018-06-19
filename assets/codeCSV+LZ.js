
const DELIMITER_VALUES = ',';
const DELIMITER_LINES = '$$';

var center;
var markers = [];

function getCSV() {
  var urlSplit = window.location.href.split("?");
  if (urlSplit.length < 2) {
    document.write("<h1>No JSON given in URL!</h1>")
    return;
  }
  
  var b64lz = urlSplit[1];
  var csv = decodeURI(LZString.decodeFromBase64(b64lz));
  var lines = csv.split(DELIMITER_LINES)
  var first = true;
  
  lines.forEach(line => {
    var vals = line.split(DELIMITER_VALUES);
    var marker = {
      "lat" : vals[0],
      "lon" : vals[1],
      "label" : vals[2],
      "icon" : vals[3]
    };
    
    if (!first) {
      markers.push(marker);
    } else {
      center = marker;
      first = false;
    }
  
  });
}
