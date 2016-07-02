# rest-urlbuilder

Lib Usage
==========

```javascript
ulrBuilder(template, params, query);
```

Examples
==========

```javascript
ulrBuilder("http://example.org/api/people/{id}", {
    id: 101
});

// http://example.org/people/101

ulrBuilder("http://example.org/api/cars", {}, {filter: { where: {carClass:'fullsize'} }});

// http://example.org/api/cars?filter[where][carClass]=fullsize
```


