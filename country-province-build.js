
var jf = require("jsonfile")
var fs = require("fs")

var targetFile = './countries.json'
var crDir = './vendor/countries-and-provinces-states-regions'
var countries = require(crDir+'/countries.json')

for( i in countries ){
  var country = countries[i]
	var name = country.name.toLowerCase().replace(" ", "-") + ".json"
	if( fs.existsSync( crDir+'/countries/'+name ) ){
		var curC = require(crDir+'/countries/'+name)
		country.regions = curC
	}
}

jf.writeFileSync(targetFile, countries)
