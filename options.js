// Display the current selected breed
let currentBreed = document.getElementById('currentBreed');
chrome.storage.sync.get('breed', function(data) {
	currentBreed.innerHTML = "Current Breed: " + data.breed;
});

// Create the breed dropdown
// 	Using a Dog API query, retrieve a list of all breeds and sub-breeds
// 	and use the returned json to construct the dropdown.
// 	This is incase a new breed is added to the database.
let dropdown = document.getElementById('dropdown');
dropdown.length = 0;

// Leave all breeds as the default option
let defaultOption = document.createElement('option');
defaultOption.text = 'all breeds';
dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

// Submit the API request and construct the dropdown
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

// Submit button
// 	If the button is pressed, set the breed to the dropdown selection
// 	and display the new current selected breed.
let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
	chrome.storage.sync.set({breed: dropdown.options[dropdown.selectedIndex].text}, function() {
		currentBreed.innerHTML = "Current Breed: " + dropdown.options[dropdown.selectedIndex].text;
	});
});
