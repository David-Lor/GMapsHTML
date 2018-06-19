# GMapsHTML

A webpage that implements the Google Maps JavaScript API, for loading a full map with a set of markers defined through the URL (PHP-Like but working from a static web server, like Github).

The markers are set as a CSV string, attached to the URL after the ? mark. Check the "json" branch to see this project made using JSON strings, which result in longer URLs.

[Test](https://enforcerzhukov.github.io/GMapsHTML/GMapCSV.html?42.2322022750622,-8.70379224637247,0,0$$42.2322022750622,-8.70379224637247,You%20are%20here,0$$42.2338280858528,-8.70631124156336,Stop%201,0)

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
42.2338280858528,-8.70631124156336,Stop 1,1

```

* The first marker is always the center. The second and following markers are simple markers
* The label is a string to describe the marker on the map
* The symbol is the index of the array of symbols defined on codeMap.js

Now, we remove the header and split each line with $$ (symbols to split both values and lines can be changed on codeCSV.js). In one single line, the CSV string looks like this:

```
42.2322022750622,-8.70379224637247,0,0$$42.2322022750622,-8.70379224637247,You%20are%20here,0$$42.2338280858528,-8.70631124156336,Stop%201,1
```

So, finally, the URL looks like this (spaces are represented with %20 but should work with just spaces):

https://enforcerzhukov.github.io/GMapsHTML/GMapCSV.html?42.2322022750622,-8.70379224637247,0,0$$42.2322022750622,-8.70379224637247,You%20are%20here,0$$42.2338280858528,-8.70631124156336,Stop%201,1

Now, let's try another example with more locations. First, the pretty-printed CSV:

```csv
latitude,longitude,label,symbol
42.2322022750622,-8.70379224637247,0,0
42.2322022750622,-8.70379224637247,You are here,0
42.2320281879469,-8.70820377625742,Stop 1,1
42.2312737858673,-8.70014564481647,Stop 2,1
42.2313792020047,-8.69987621275715,Stop 3,1
42.2322537917903,-8.70720857463104,Stop 4,1
42.230108907829,-8.70723003230316,Stop 5,1
42.2322585141846,-8.70577062094617,Stop 6,1
42.2320420427629,-8.70361680710721,Stop 7,1
42.2324789583539,-8.70198870623517,Stop 8,1
42.2331740458066,-8.70238030875134,Stop 9,1
42.2327484139652,-8.70253965476252,Stop 10,1
42.2323869903522,-8.70561078408457,Stop 11,1
42.2301345036251,-8.70699265630455,Stop 12,1
42.2315840973352,-8.7069685208686,Stop 13,1
42.2338280858528,-8.70631124156336,Stop 14,1
42.2336812237455,-8.70670213621358,Stop 15,1
```

The CSV string is the following (again, spaces replaced with %20):

```
42.2322022750622,-8.70379224637247,0,0$$42.2322022750622,-8.70379224637247,You%20are%20here,0$$42.2320281879469,-8.70820377625742,Stop%201,1$$42.2312737858673,-8.70014564481647,Stop%202,1$$42.2313792020047,-8.69987621275715,Stop%203,1$$42.2322537917903,-8.70720857463104,Stop%204,1$$42.230108907829,-8.70723003230316,Stop%205,1$$42.2322585141846,-8.70577062094617,Stop%206,1$$42.2320420427629,-8.70361680710721,Stop%207,1$$42.2324789583539,-8.70198870623517,Stop%208,1$$42.2331740458066,-8.70238030875134,Stop%209,1$$42.2327484139652,-8.70253965476252,Stop%2010,1$$42.2323869903522,-8.70561078408457,Stop%2011,1$$42.2301345036251,-8.70699265630455,Stop%2012,1$$42.2315840973352,-8.7069685208686,Stop%2013,1$$42.2338280858528,-8.70631124156336,Stop%2014,1$$42.2336812237455,-8.70670213621358,Stop%2015,1
```

And finally the URL looks like this:

https://enforcerzhukov.github.io/GMapsHTML/GMapCSV.html?42.2322022750622,-8.70379224637247,0,0$$42.2322022750622,-8.70379224637247,You%20are%20here,0$$42.2320281879469,-8.70820377625742,Stop%201,1$$42.2312737858673,-8.70014564481647,Stop%202,1$$42.2313792020047,-8.69987621275715,Stop%203,1$$42.2322537917903,-8.70720857463104,Stop%204,1$$42.230108907829,-8.70723003230316,Stop%205,1$$42.2322585141846,-8.70577062094617,Stop%206,1$$42.2320420427629,-8.70361680710721,Stop%207,1$$42.2324789583539,-8.70198870623517,Stop%208,1$$42.2331740458066,-8.70238030875134,Stop%209,1$$42.2327484139652,-8.70253965476252,Stop%2010,1$$42.2323869903522,-8.70561078408457,Stop%2011,1$$42.2301345036251,-8.70699265630455,Stop%2012,1$$42.2315840973352,-8.7069685208686,Stop%2013,1$$42.2338280858528,-8.70631124156336,Stop%2014,1$$42.2336812237455,-8.70670213621358,Stop%2015,1

## TODO

* Display errors when input variable is wrong (bad CSV string)
* Display error when Google Maps API requests limit is reached
* Change icons and text in map
* Add cards for each marker, if possible
