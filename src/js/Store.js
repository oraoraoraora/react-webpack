var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var data;
module.exports = assign({}, EventEmitter.prototype, {
	init: function (callback) {
		this.appData = {
      isGood: "Good"
    }; 
		this.userData = {};
		this.sectionData = {};
		callback();
	},
	getAppState: function() {
    	return data;
  	},
  	emitChange: function() {
    	this.emit('change');
  	},
  	addChangeListener: function(callback) {
    	this.on('change', callback);
 	},
  	removeChangeListener: function(callback) {
   		this.removeListener('change', callback);
 	}
});