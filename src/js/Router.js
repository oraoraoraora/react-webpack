import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';


var AppContainer = require('./components/AppContainer.jsx');
var Home = require('./components/sections/Home.jsx');




module.exports = React.createClass({
	onChangeApp() {
  		this.forceUpdate();
	},
	componentDidMount() {
	    Store.addChangeListener(this.onChangeApp);
	},
	componentWillUnmount() {
	    Store.removeEventListener(this.onChangeApp);
	},
	  

	render() {
		return (
			<Router history={browserHistory} > 
				<Route component={AppContainer}>
					<Route path="/" component={Home} />
				</Route>
			</Router>
		)
	}


});