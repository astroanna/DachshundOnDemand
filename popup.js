let puppyPhoto = document.getElementById('puppyPhoto');

var request = new XMLHttpRequest();

chrome.storage.sync.get('breed', function(data) {
	var dogBreed = 'https://dog.ceo/api/breed/' + data.breed + '/images/random';
	request.open('GET', dogBreed, true);

request.onload = function() {
	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		puppyPhoto.src = data.message;
		$(function() {
			$("img.scale").imageScale();
		});
	}
	else {
		console.log('error');
	}
}

request.send();

});

