
var React = require('react')
var ReactCR = require('../index.js')


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

