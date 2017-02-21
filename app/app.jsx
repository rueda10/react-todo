var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");


// Load foundation
require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css")
$(document).foundation();

// App css
require("style-loader!css-loader!sass-loader!applicationStyles")

ReactDOM.render(
  <p>Boilerplate 3 Project</p>,
  document.querySelector("#app")
);
