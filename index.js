
var React = require('react')
var Select = require('react-select')
var countries = require('./countries.json')

var options = [ 
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

var countryOptions = [];
var provinceOptions = {};
console.log("COUNTRIES", countries)

for( index in countries ){
  var country = countries[index]
  countryOptions.push({
    label: country.name,
    value: country.code
  })
  if( country.regions ){
    for( ind in country.regions ){
      var province = country.regions[ind]
      if( !provinceOptions[country.code] ){
        provinceOptions[country.code] = []
      }
      provinceOptions[country.code].push({
        label: province.name,
        value: province.code
      })
    }
  }
}

function updateProvinces(val) {
  if( provinceOptions[val] ){
    renderProvinces(val)
  }
  console.log("val", val)
  console.log("provinces", provinceOptions)
}

var prov = ''

var opts = {}

module.exports = function (topts) {
  opts = topts
  prov = opts.province.el

  if( opts.defaultCss ){
    require('./default.css')
  }

  if( opts.country ){
    var rOpts = {
      name: opts.country.name,
      value: "",
      placeholder: opts.province.label,
      options: countryOptions
    }
    if( opts.country.value ){
      rOpts.value = opts.country.value
    }
    if( opts.province ){
      rOpts.onChange = updateProvinces
    }
    React.render(React.createElement(Select, rOpts), opts.country.el) 
  }

  if( opts.province ){
    renderProvinces(province)
  }
}

function renderProvinces(province){
  if( opts.province ){
    var rOpts = {
      name: opts.province.name,
      value: "",
      placeholder: opts.province.label,
      options: []
    }
    if( provinceOptions[province] ){
      rOpts.options = provinceOptions[province]
    }
    if( opts.province.value ){
      rOpts.value = opts.province.value
    }
    if( opts.province.value ){
      rOpts.value = opts.province.value
    }
    React.render(React.createElement(Select, rOpts), opts.province.el) 
  }
}


