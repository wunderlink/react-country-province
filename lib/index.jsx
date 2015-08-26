

var React = require('react')
var Select = require('react-select')
var countries = require('../fixtures/countries.json')
var provinces = require('../fixtures/provinces.json')


var ReactCountryProvince = module.exports = React.createClass({

  propTypes: {
    country: React.PropTypes.bool,
    countryName: React.PropTypes.string,
    countryValue: React.PropTypes.string,
    countryLabel: React.PropTypes.string,
    countryMulti: React.PropTypes.bool,
    countryBringToTop: React.PropTypes.array,
    province: React.PropTypes.bool,
    provinceName: React.PropTypes.string,
    provinceValue: React.PropTypes.string,
    provinceLabel: React.PropTypes.string,
    provinceMulti: React.PropTypes.bool,
    defaultCss: React.PropTypes.bool,
    onCountryChange: React.PropTypes.func,
    onProvinceChange: React.PropTypes.func
  },

  getInitialState : function() {
    var country = null
    var province = null
    if (this.props.countryValue) {
      country = this.props.countryValue
    }
    if (this.props.provinceValue) {
      province = this.props.provinceValue
    }
    return {
      countryValue: country,
      provinceValue: province
    }
  },

  getDefaultProps : function() {
    return {
      country: true,
      countryName: 'reactCountry',
      countryLabel: 'Country',
      countryMulti: false,
      countryBringToTop: ['US', 'GB', 'AU'],
      province: true,
      provinceName: 'reactProvince',
      provinceLabel: 'State/Province',
      provinceMulti: true,
      defaultCss: true
    }
  },

  componentWillUpdate : function() {
    this.cp = getOptions(this.props.countryBringToTop)
  },

  componentWillReceiveProps : function (nextProps) {
    this.setState({
      countryValue:nextProps.countryValue,
      provinceValue:nextProps.provinceValue
    })
  },

  componentWillMount : function() {
    this.cp = getOptions(this.props.countryBringToTop)
  },

  _updateCountry : function(newCountry) {
    if (!newCountry) {
      newCountry = null
    }
    this.setState({countryValue:newCountry, provinceValue:null})
    if (this.props.onCountryChange) {
      this.props.onCountryChange(newCountry)
    }
  },

  _updateProvince : function(newProvince) {
    if (!newProvince) {
      newProvince = null
    }
    this.setState({provinceValue:newProvince})
    if (this.props.onProvinceChange) {
      this.props.onProvinceChange(newProvince)
    }
  },

  render : function() {
    if (this.props.defaultCss) {
      require('./default.css')
    }

    var country, province;
    if (this.props.country) {
      country = <Select
                  name={this.props.countryName}
                  placeholder={this.props.countryLabel}
                  options={this.cp.countryOptions}
                  value={this.state.countryValue}
                  multi={this.props.countryMulti}
                  onChange={this._updateCountry} />
    }

    if (this.props.province) {
      var pOptions = []
      if (this.state.countryValue) {
        pOptions = this.cp.provinceOptions[this.state.countryValue]
      }
      province = <Select
                  name={this.props.provinceName}
                  placeholder={this.props.provinceLabel}
                  options={pOptions}
                  value={this.state.provinceValue}
                  multi={this.props.provinceMulti}
                  onChange={this._updateProvince} />
    }

    var html =
      <div>
        {country}
        {province}
      </div>
    return html
  }

})


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

