import { Router, Route, browserHistory  } from 'react-router';

var Routes = require("./Routes.js");

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
			<Router history={browserHistory} routes={Routes} /> 
		)
	}
});