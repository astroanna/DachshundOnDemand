let dropdown = document.getElementById('dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'all breeds';
dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

var request = new XMLHttpRequest();

request.open('GET', 'https://dog.ceo/api/breeds/list/all', true);

request.onload = function() {
	if (request.status >= 200 && request.status < 400) {
		var data = JSON.parse(this.response);
		let option;
		for (x in data.message) {
			option = document.createElement('option');
			option.text = x;
			option.value = x;
			dropdown.add(option);
		}
	}
}

request.onerror = function() {
	console.error('An error occurred fetching the JSON');
};

request.send();

let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
	chrome.storage.sync.set({breed: dropdown.options[dropdown.selectedIndex].text}, function() {
		console.log('breed is ' + dropdown.options[dropdown.selectedIndex].text);
	});
});
