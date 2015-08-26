
var React = require('react')
//var ReactCR = require('..')
var ReactCR = require('../lib/index.jsx')


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

      React.createElement(ReactCR, opts)
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
