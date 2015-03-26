
var jf = require("jsonfile")
var fs = require("fs")

var provinceFile = './provinces.json'
var countryFile = './countries.json'
var crDir = './vendor/countries-and-provinces-states-regions'
var countrySource = require(crDir+'/countries.json')

var countries = []
var provinces = {}
for( i in countrySource ){
  var country = countrySource[i]
  countries.push(country)
	var name = country.name.toLowerCase().replace(" ", "-") + ".json"
	if( fs.existsSync( crDir+'/countries/'+name ) ){
		var curC = require(crDir+'/countries/'+name)
		provinces[country.code] = curC
	}
}

jf.writeFileSync(countryFile, countries)
jf.writeFileSync(provinceFile, provinces)
