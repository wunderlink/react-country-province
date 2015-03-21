
var React = require('react')
var Select = require('react-select')
var countries = require('./countries.json')

var options = [ 
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

var countryOptions = [];
var regionOptions = {};

for( country in countries ){
  countryOptions.push({
    label: country.name,
    value: country.code
  })
  if( country.regions ){
    for( region in country.regions ){
      regionOptions[region.name] = []
      regionOptions[region.name].push({
        label: region.name,
        value: region.code
      })
    }
  }
}

function logChange(val) {
    console.log("Selected: " + val);
}


module.exports = function (el, opts) {
  if( opts.defaultCss ){
    require('./default.css')
  }
  React.render(React.createElement(Select, {
    name: "form-field-name",
    value: "one",
    options: options,
    onChange: logChange,
  }), el) 
}
