# GMapsHTML

A webpage that implements the Google Maps JavaScript API, for loading a full map with a set of markers defined through the URL (PHP-Like but working from a static web server, like Github).

[Test](https://enforcerzhukov.github.io/GMapsHTML/GMapJSON64.html?eyJjZW50ZXIiIDogWzQyLjIzMjIwMjI3NTA2MjIsIC04LjcwMzc5MjI0NjM3MjQ3XSwgIm1hcmtlcnMiIDogW3sicG9zIiA6IFs0Mi4yMzM4MjgwODU4NTI4LCAtOC43MDYzMTEyNDE1NjMzNl0sICJsYWJlbCIgOiAiODU4MCIsICJzeW1ib2wiIDogIm1hcmtlciJ9LCB7InBvcyI6WzQyLjIzMjIwMjI3NTA2MjIsIC04LjcwMzc5MjI0NjM3MjQ3XSwgImxhYmVsIjoiY2VudHJvIiwgInN5bWJvbCI6ImNlbnRlciJ9XX0=)

## Google Maps API Key

A key is required to use the Google Maps Javascript API. On the HTML files of this repository my key is set, but it's limited to only accept requests from my Github domain (https://enforcerzhukov.github.io/*).

Register a free API key at: https://developers.google.com/maps/documentation/javascript/get-api-key

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

```url
https://enforcerzhukov.github.io/GMapsHTML/GMapJSON.html?{"center" : [42.2322022750622, -8.70379224637247], "markers" : [{"pos" : [42.2338280858528, -8.70631124156336], "label" : "8580", "symbol" : "marker"}, {"pos":[42.2322022750622, -8.70379224637247], "label":"centro", "symbol":"center"}]}
```

## JSON Base64

(GMapJSON64.html) This file works the same way as GMapJSON.html, but instead of appending a JSON String to the URL, we attach the string encoded beforehand with base64, in the way HTML webpage + "?base64encoded". The string will get decoded client-side using JavaScript function atob().

In example, the previously shown JSON,  base64-encoded is:

```base64
eyJjZW50ZXIiIDogWzQyLjIzMjIwMjI3NTA2MjIsIC04LjcwMzc5MjI0NjM3MjQ3XSwgIm1hcmtlcnMiIDogW3sicG9zIiA6IFs0Mi4yMzM4MjgwODU4NTI4LCAtOC43MDYzMTEyNDE1NjMzNl0sICJsYWJlbCIgOiAiODU4MCIsICJzeW1ib2wiIDogIm1hcmtlciJ9LCB7InBvcyI6WzQyLjIzMjIwMjI3NTA2MjIsIC04LjcwMzc5MjI0NjM3MjQ3XSwgImxhYmVsIjoiY2VudHJvIiwgInN5bWJvbCI6ImNlbnRlciJ9XX0=
```

So the result URL for JSON-BASE64 is:

```
https://enforcerzhukov.github.io/GMapsHTML/GMapJSON64.html?eyJjZW50ZXIiIDogWzQyLjIzMjIwMjI3NTA2MjIsIC04LjcwMzc5MjI0NjM3MjQ3XSwgIm1hcmtlcnMiIDogW3sicG9zIiA6IFs0Mi4yMzM4MjgwODU4NTI4LCAtOC43MDYzMTEyNDE1NjMzNl0sICJsYWJlbCIgOiAiODU4MCIsICJzeW1ib2wiIDogIm1hcmtlciJ9LCB7InBvcyI6WzQyLjIzMjIwMjI3NTA2MjIsIC04LjcwMzc5MjI0NjM3MjQ3XSwgImxhYmVsIjoiY2VudHJvIiwgInN5bWJvbCI6ImNlbnRlciJ9XX0=
```

## TODO

* Show errors when input variable is wrong (bad JSON string)
* Show error when Google Maps API requests limit is reached
* Unify both JSON and JSON+BASE64 scripts into one
* Support string compression for shorter URLs
