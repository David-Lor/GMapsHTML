# GMapsHTML

A webpage that implements the Google Maps JavaScript API, for loading a full map with a set of markers defined through the URL (PHP-Like but working from a static web server, like Github).

The markers are set as a CSV string, attached to the URL after the ? mark. Check the "json" branch to see this project made using JSON strings, which result in longer URLs.

[Test](https://enforcerzhukov.github.io/GMapsHTML/GMapCSV.html?)

## Google Maps API Key

A key is required to use the Google Maps Javascript API. On the HTML files of this repository my key is set, but it's limited to only accept requests from my Github domain (https://enforcerzhukov.github.io/*). However, for testing purposes, you can use my hosted page with your own set of markers.

Once you're ready to go, you can register a free API key at: https://developers.google.com/maps/documentation/javascript/get-api-key

Remember to replace the API Key on the HTML file with your own key, and if you want to, restrict API access to your own page/domain.

## URL Length Limit

Keep in mind that some browsers can have trouble with the URL length limit (i.e. [read this](https://stackoverflow.com/questions/15090220/maximum-length-for-url-in-chrome-browser)).

## CSV Format

(GMapCSV.html) A CSV string is attached on the URL itself. First, let's see the pretty-printed CSV (with headers, that won't be used on the final URL):

```csv
latitude,longitude,label,symbol
42.2322022750622,-8.70379224637247,0,0
42.2322022750622,-8.70379224637247,You are here,0
42.2338280858528,-8.70631124156336,Stop 1,0
```

* The first marker is always the center. The second and following markers are simple markers
* The label is a string to describe the marker on the map
* The symbol is the index of the array of symbols defined on codeMap.js

Now, we remove the header and split each line with && (symbols to split both values and lines can be changed on codeCSV.js). The URL looks like this (spaces are represented with %20 but should work with just spaces):

https://enforcerzhukov.github.io/GMapsHTML/GMapCSV.html?42.2322022750622,-8.70379224637247,0,0&&42.2322022750622,-8.70379224637247,You%20are%20here,0&&42.2338280858528,-8.70631124156336,Stop%201,0

## TODO

* Display errors when input variable is wrong (bad CSV string)
* Display error when Google Maps API requests limit is reached
* Change icons and text in map
* Add cards for each marker, if possible
