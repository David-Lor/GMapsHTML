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
        "label" : "You are here",
        "symbol" : "center"
        }
    ]
}
```

Then, we just have to access to the HTML webpage + "?json", like this:

```url
https://enforcerzhukov.github.io/GMapsHTML/GMapJSON.html?{"center" : [42.2322022750622, -8.70379224637247], "markers" : [{"pos" : [42.2338280858528, -8.70631124156336], "label" : "Stop 1", "symbol" : "marker"}, {"pos":[42.2322022750622, -8.70379224637247], "label":"You are here", "symbol":"center"}]}
```

## JSON Base64

(GMapJSON64.html) This file works the same way as GMapJSON.html, but instead of appending a JSON String to the URL, we attach the string encoded beforehand with base64, in the way HTML webpage + "?base64encoded". The string will get decoded client-side using JavaScript function atob().

We will take this JSON string as source (is the same as the one shown before, but all in one line):

```json
{"center" : [42.2322022750622, -8.70379224637247], "markers" : [{"pos" : [42.2338280858528, -8.70631124156336], "label" : "Stop 1", "symbol" : "marker"}, {"pos":[42.2322022750622, -8.70379224637247], "label":"You are here", "symbol":"center"}]}
```

The Base64 result of encoding the string is:

```base64
eyJjZW50ZXIiIDogWzQyLjIzMjIwMjI3NTA2MjIsIC04LjcwMzc5MjI0NjM3MjQ3XSwgIm1hcmtlcnMiIDogW3sicG9zIiA6IFs0Mi4yMzM4MjgwODU4NTI4LCAtOC43MDYzMTEyNDE1NjMzNl0sICJsYWJlbCIgOiAiU3RvcCAxIiwgInN5bWJvbCIgOiAibWFya2VyIn0sIHsicG9zIjpbNDIuMjMyMjAyMjc1MDYyMiwgLTguNzAzNzkyMjQ2MzcyNDddLCAibGFiZWwiOiJZb3UgYXJlIGhlcmUiLCAic3ltYm9sIjoiY2VudGVyIn1dfQ==
```

So the URL for JSON-BASE64 is:

```url
https://enforcerzhukov.github.io/GMapsHTML/GMapJSON64.html?eyJjZW50ZXIiIDogWzQyLjIzMjIwMjI3NTA2MjIsIC04LjcwMzc5MjI0NjM3MjQ3XSwgIm1hcmtlcnMiIDogW3sicG9zIiA6IFs0Mi4yMzM4MjgwODU4NTI4LCAtOC43MDYzMTEyNDE1NjMzNl0sICJsYWJlbCIgOiAiU3RvcCAxIiwgInN5bWJvbCIgOiAibWFya2VyIn0sIHsicG9zIjpbNDIuMjMyMjAyMjc1MDYyMiwgLTguNzAzNzkyMjQ2MzcyNDddLCAibGFiZWwiOiJZb3UgYXJlIGhlcmUiLCAic3ltYm9sIjoiY2VudGVyIn1dfQ==
```

## JSON Base64 + LZ Compression

(GMapJSON64LZ.html) This file works like GMapJSON64.html, but using the [lz-string](http://pieroxy.net/blog/pages/lz-string/index.html) library to compress the JSON string with LZ compression. This library can compress and Base64Encode a string directly, and decode it returning the string as well. The encoding must be done when generating the URL, so [take a look at the different libraries available to compress with LZ](http://pieroxy.net/blog/pages/lz-string/index.html).

On this case, we encode the same JSON string we were using, but with LZ compression the Base64 encoded string is shorter (328 vs 252 characters with LZ compression):

```base64+lz
N4IgxgpgdgLhBOIAEAuJBtALAJgHTYGZtsAGYgdgFYSA2YgGiQFoAOXckg8gTmMxq7ZM5ALqMQAWwCG8ANYIAzsjTpQABwD2S1Bhz4CBFthYkWlM8cat2tAgEY7Qu5QEEaYpCAA2UgEYQvZU8AZRgNNSQ7EHEFAE8JXw1AnUkZeUQAX0Z1LRAULDxCYjJsKloGZjYOLl4hAXIhUXEff0CUEABNDQBXJBkIJAALBAhozziEpLzwaDhMkQygA=
```

The URL for JSON-BASE64+LZ is:

```url
https://enforcerzhukov.github.io/GMapsHTML/GMapJSON64LZ.html?N4IgxgpgdgLhBOIAEAuJBtALAJgHTYGZtsAGYgdgFYSA2YgGiQFoAOXckg8gTmMxq7ZM5ALqMQAWwCG8ANYIAzsjTpQABwD2S1Bhz4CBFthYkWlM8cat2tAgEY7Qu5QEEaYpCAA2UgEYQvZU8AZRgNNSQ7EHEFAE8JXw1AnUkZeUQAX0Z1LRAULDxCYjJsKloGZjYOLl4hAXIhUXEff0CUEABNDQBXJBkIJAALBAhozziEpLzwaDhMkQygA=
```

## TODO

* Show errors when input variable is wrong (bad JSON string)
* Show error when Google Maps API requests limit is reached
* Unify both JSON and JSON+BASE64 scripts into one
* Support string compression for shorter URLs
* Change icons and text in map
* Add cards for each marker, if possible
