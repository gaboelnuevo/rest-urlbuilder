# rest-urlbuilder

Lib Usage
==========

ulrBuilder(template, params, query);

Examples
==========

ulrBuilder("http://example.org/api/people/{id}", {
    id: 101
});

// http://example.org/people/101

ulrBuilder("http://example.org/api/cars", {}, {filter: { where: {carClass:'fullsize'} }});

// http://example.org/api/cars?filter[where][carClass]=fullsize


