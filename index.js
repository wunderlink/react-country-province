
var React = require('react')
var Select = require('react-select')
var countries = require('./countries.json')

var countryOptions = [];
var provinceOptions = {};

var bringToTop = ['US', 'GB', 'AU'];

for( index in countries ){
  var country = countries[index]

  var c = {
    label: country.name,
    value: country.code
  }
  if( bringToTop.indexOf(country.code) > -1 ){
    countryOptions.unshift(c)
  } else {
    countryOptions.push(c)
  }
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

var opts = {}

module.exports = function (topts) {
  opts = topts

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
      rOpts.onChange = renderProvinces
    }
    React.render(React.createElement(Select, rOpts), opts.country.el) 
  }

  if( opts.province ){
    renderProvinces(opts.country.value)
  }
}

function renderProvinces(country){
  if( opts.province ){
    var rOpts = {
      name: opts.province.name,
      placeholder: opts.province.label,
      options: []
    }
    if( provinceOptions[country] ){
      rOpts.options = provinceOptions[country]
    }
    if( opts.province.value && provinceOptions[country] ){
      key = 'label'
      if( opts.province.twoLetterValues ){
        key = 'value'
      }
      for( index in provinceOptions[country] ){
        if( provinceOptions[country][index][key] == opts.province.value ){
          rOpts.value = opts.province.value
          break
        }
      }
    }
    React.render(React.createElement(Select, rOpts), opts.province.el) 
  }
}


