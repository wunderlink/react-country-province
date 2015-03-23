
var React = require('react')
var ReactCR = require('..')


  React.render(
    (
      <div>
        <h1>ReactPivot</h1>

        <p>
          ReactPivot is a data-grid component with pivot-table-like functionality
          for data display, filtering, and exploration.
        </p>

        <div id="countryHolder">
        </div>
        <div id="provinceHolder">
        </div>
      </div>
    ),
    document.body,

    function(){
    console.log( 'QS', document.querySelector('.selectHolder') )
opts = {
  country:{
    name:'countrySelect',
    label:'Country',
    value:'',
    twoLetterValues:true,
    el:document.getElementById("countryHolder")
    },
  province:{
    name:'provinceSelect',
    label:'State/Province',
    value:'',
    twoLetterValues:false,
    el:document.getElementById("provinceHolder")
    },
  defaultCss: true
}

ReactCR(opts)
    }
  )


/*
var calculations = [
  {
    title: 'Count',
    value: 'count',
    className: 'alignRight'
  },
  {
    title: 'Total Clicks',
    value: 'clicksTotal',
    className: 'alignRight'
  }
]


  React.render(
    (
      <div>
        <h1>ReactPivot</h1>

        <p>
          ReactPivot is a data-grid component with pivot-table-like functionality
          for data display, filtering, and exploration.
        </p>

        <ReactPivot rows={data}
                    dimensions={dimensions}
                    calculations={calculations}
                    reduce={reduce}
                    activeDimensions={['Transaction Type']} />
      </div>
    ),

    document.body
  )
*/
