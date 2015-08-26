# React-Country-Province #

React-Country-Province is a component that handles country & province selection. Change the country and the province options get updated.

Country and province list originated from [here](https://github.com/astockwell/countries-and-provinces-states-regions.git)

Parameters:
* country: React.PropTypes.bool,
* countryName: React.PropTypes.string,
* countryValue: React.PropTypes.string,
* countryLabel: React.PropTypes.string,
* countryMulti: React.PropTypes.bool,
* countryBringToTop: React.PropTypes.array,
* province: React.PropTypes.bool,
* provinceName: React.PropTypes.string,
* provinceValue: React.PropTypes.string,
* provinceLabel: React.PropTypes.string,
* provinceMulti: React.PropTypes.bool,
* defaultCss: React.PropTypes.bool,
* onCountryChange: React.PropTypes.func,
* onProvinceChange: React.PropTypes.func


## Example ##

```js
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
```


