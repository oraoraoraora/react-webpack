import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';


var AppContainer = require('./components/AppContainer.jsx');
var Home = require('./components/sections/Home.jsx');





module.exports =  <Route component={AppContainer}>
				  	<Route path="/" component={Home} />
				  </Route>

