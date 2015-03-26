
var React = require('react')
var Select = require('react-select')
var countries = require('./countries.json')
var provinces = require('./provinces.json')


reactCountryProvince = function(topts){
  this.opts = topts
  this.countries = countries
  this.provinces = provinces

  if( !this.opts.bringToTop ){
    this.opts.bringToTop = ['US', 'GB', 'AU'];
  }

  cp = getOptions(this.opts.bringToTop)
  this.countryOptions = cp.countryOptions
  this.provinceOptions = cp.provinceOptions

  if( opts.defaultCss ){
    require('./default.css')
  }
  if( opts.country ){
    var rOpts = {
      name: this.opts.country.name,
      placeholder: this.opts.country.label,
      options: this.countryOptions
    }
    if( this.opts.country.value ){
      rOpts.value = this.opts.country.value
    }
    self = this
    if( this.opts.province ){
      rOpts.onChange = function(val){
        self.renderProvinces(val)
      }
    }
    React.render(React.createElement(Select, rOpts), this.opts.country.el) 
  }

  if( this.opts.province ){
    this.renderProvinces(this.opts.country.value)
  }
}


getOptions = function( bringToTop ){
  var countryOptions = []
  var provinceOptions = {}
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
    if( provinces[country.code] ){
      for( ind in provinces[country.code] ){
        var province = provinces[country.code][ind]
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
  return {countryOptions:countryOptions, provinceOptions:provinceOptions}
}

reactCountryProvince.prototype.renderProvinces = function(country){
  var rOpts = {
    name: this.opts.province.name,
    placeholder: this.opts.province.label,
    options: []
  }
  if( this.provinceOptions[country] ){
    rOpts.options = this.provinceOptions[country]
  }
  if( this.opts.province.value && this.provinceOptions[country] ){
    key = 'label'
    if( this.opts.province.twoLetterValues ){
      key = 'value'
    }
    for( index in this.provinceOptions[country] ){
      if( this.provinceOptions[country][index][key] == this.opts.province.value ){
        rOpts.value = this.opts.province.value
        break
      }
    }
  }
  React.render(React.createElement(Select, rOpts), this.opts.province.el) 
}

module.exports = reactCountryProvince
