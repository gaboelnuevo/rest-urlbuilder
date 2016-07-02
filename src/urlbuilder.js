'use strict';

// load URI.js
var URI = require('urijs');
// load URITemplate
var URITemplate = require('urijs/src/URITemplate');

export default function urlBuilder (urlTemplate, params, query) {
    function deserializeObject(obj, index) {
        var temp = {}
        for (p in obj) {
            if (typeof obj[p] === 'object') {
                var temp2 = deserializeObject(obj[p], p);
                for (x in temp2) {
                    temp[typeof index !== 'undefined' ? (index + '.' + x) : x] = temp2[x];
                }
            } else {
                temp[typeof index !== 'undefined' ? (index + '.' + p) : p] = obj[p];
            }
        }
        return temp;
    }

    function restifyObj(obj) {
        var temp = {};
        for (x in obj) {
            var prop = x + '.'
            prop = prop.replace('.', '[');
            prop = prop.replace(/.$/, ']');
            prop = prop.replace(/\./g, '][');
            temp[prop] = obj[x];
        }
        return temp;
    }

    var url = URITemplate.expand(urlTemplate, params);
    if (typeof query !== 'undefined') {
        var buildQuery = URI.buildQuery(restifyObj(deserializeObject(query)), true);
        url = url.query(buildQuery);
    }
    return url.readable();
}
