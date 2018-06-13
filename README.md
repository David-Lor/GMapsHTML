# GMapsHTML

A webpage that implements the Google Maps JavaScript API, for loading a full map with a set of markers defined through the URL (PHP-Like but working from a static web server, like Github).

## JSON Format

(GMapJSON.html) A JSON string is attached on the URL itself. First, let's see the pretty-printed JSON:

```json
{
        "center" : [42.2322022750622, -8.70379224637247],
        "markers" : [
            {
            "pos" : [42.2338280858528, -8.70631124156336],
            "label" : "Stop 1",
            "symbol" : "marker"
            },
            {
            "pos" : [42.2322022750622, -8.70379224637247],
            "label" : "Centro",
            "symbol" : "center"
            }
        ]
    }
```

Then, we just have to access to the HTML webpage + "?json", like this:

https://enforcerzhukov.github.io/GMapsHTML/GMapJSON.html?{"center" : [42.2322022750622, -8.70379224637247], "markers" : [{"pos" : [42.2338280858528, -8.70631124156336], "label" : "8580", "symbol" : "marker"}, {"pos":[42.2322022750622, -8.70379224637247], "label":"centro", "symbol":"center"}]}

## JSON Base64

(GMapJSON64.html) This file works the same way as GMapJSON.html, but instead of appending a JSON String to the URL, we attach the string previously encoded with base64, in the way HTML webpage + "?base64encoded". The string will get decoded using JavaScript function atob().
