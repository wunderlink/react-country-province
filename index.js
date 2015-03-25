
var React = require('react')
var Select = require('react-select')
var countries = require('./countries.json')

var countryOptions = [];
var provinceOptions = {};

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
}

var prov = ''

var opts = {}

module.exports = function (topts) {
  opts = topts
  prov = opts.province.el

  console.log("provinces", topts)
  if( opts.defaultCss ){
    require('./default.css')
  }

  if( opts.country ){
    var rOpts = {
      name: opts.country.name,
      placeholder: opts.country.label,
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
    renderProvinces(opts.province.value)
  }
}

function renderProvinces(province){
  if( opts.province ){
    var rOpts = {
      name: opts.province.name,
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


