
var React = require('react')
var ReactCR = require('..')
//var ReactCR = require('../lib/index.jsx')


  React.render(
    (
      <div>
        <h1>React Country/Region Select</h1>

        <p>
          Making country / region selection suck less.
        </p>

        <div id="countryHolder">
        </div>
        <div id="provinceHolder">
        </div>
      </div>
    ),
    document.body,

    function(){

      opts = {
        countryDefault: 'US',
        country:{
          name:'countrySelect',
          label:'Country',
          value:'US',
          twoLetterValues:true,
          el:document.getElementById("countryHolder")
          },
        province:{
          name:'provinceSelect',
          label:'State/Province',
          value:'CA',
          twoLetterValues:true,
          el:document.getElementById("provinceHolder")
          },
        defaultCss: true
      }

      rcp = new ReactCR(opts)
/*
      opts = {
        country:true,
        countryName:'countrySelect',
        countryLabel:'Country',
        countryValue:'US',
        countryEl:document.getElementById("countryHolder"),
        province:true,
        provinceName:'provinceSelect',
        provinceLabel:'State/Province',
        provinceValue:'CA',
        provinceEl:document.getElementById("provinceHolder"),
        defaultCss: true
      }

      React.render(React.createElement(ReactCR, opts))
*/
    }
  )

/*
  React.render(
    (
      <div>
        <h1>React Country/Region Select</h1>

        <p>
          Making country / region selection suck less.
        </p>

        <ReactCR
              countryValue='US'
              provinceValue='CA' />
      </div>
    ),

    document.body
  )
*/
