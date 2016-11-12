module.exports = {
	xhrGet(url,options,callback) {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", url , true);
		xhr.send();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				let response = JSON.parse(xhr.responseText);
				if (response) { callback(response) }
			}
		}

	}

}