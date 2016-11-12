var Root = require("./Root.js");


import '../scss/style.scss';
if (__DEV__) {
	window.Actions = require('./Actions.js');
	window.Store = require('./Store.js');
	window.Utils = require('./Utils.js');
}
Actions.initActions();

Store.init(  function() {
	ReactDOM.render(<Root />, document.getElementById('app-container'));
});

