
var React = require('react')
var Select = require('react-select')

var options = [ 
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange(val) {
    console.log("Selected: " + val);
}


module.exports = function (el, opts) {
React.render(React.createElement(Select, {
  name: "form-field-name",
  value: "one",
  options: options,
  onChange: logChange,
}), el) 
}
