
module.exports = React.createClass({
	onClick() {
		Actions.setAppDataProp("isGood", "Here")
	},
	render() {
		return (
			<div>
				<div>Home is {Store.appData.isGood}</div>
				<button onClick={this.onClick}>Check Store work</button>
			</div>
		)
	}
});