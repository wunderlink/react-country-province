
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

function updateRegions(val) {
    console.log("Selected: " + val);
}

opts = {
  country:{
    name:'country',
    values:'code',
    el:'code'
    },
  region:{
    name:'region',
    values:'label'
    }
  }


module.exports = function (opts) {
  if( opts.defaultCss ){
    require('./default.css')
  }

  if( opts.country ){
    var rOpts = {
      name: opts.country.name
      value: "",
      options: countryOptions
    }
    if( opts.country.value ){
      rOpts.value = opts.country.value
    }
    if( opts.region ){
      rOpts.onChange = updateRegions()
    }
    React.render(React.createElement(Select, rOpts), opts.country.el) 
  }

  if( opts.region ){
  }

}
