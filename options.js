let dropdown = document.getElementById('dropdown');
let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
	chrome.storage.sync.set({breed: dropdown.options[dropdown.selectedIndex].text}, function() {
		console.log('breed is' + dropdown.options[dropdown.selectedIndex].text);
	});
});

