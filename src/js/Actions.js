module.exports = {
	initActions: function () {
		var keys = Object.values(this);
		keys.forEach((item,index)=> {
			item.ActionsRef = this;
		});
	},
	setSectionDataProp: function(name,value) {
		Store.sectionData[name] = value;
		Store.emitChange();
	},
	setUserDataProp: function(name,value) {
		Store.userData[name] = value;
		Store.emitChange();
	},
	setAppDataProp: function(name,value) {
		Store.appData[name] = value;
		Store.emitChange();
	}
}