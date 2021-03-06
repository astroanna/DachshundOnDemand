let puppyPhoto = document.getElementById('puppyPhoto');

var request = new XMLHttpRequest();

chrome.storage.sync.get('breed', function(data) {
	let dogBreed;
	if (data.breed == 'all breeds') {
		dogBreed = 'https://dog.ceo/api/breeds/image/random';
	}
	else {
		dogBreed = 'https://dog.ceo/api/breed/' + data.breed + '/images/random';
	}
	request.open('GET', dogBreed, true);

	request.onload = function() {
		var data = JSON.parse(this.response);

		if (request.status >= 200 && request.status < 400) {
			puppyPhoto.style.visibility = "hidden";
			puppyPhoto.src = data.message;
			$(function() {
				$("img.scale").imageScale();
			});
			puppyPhoto.style.visibility = "visible";
			
		}
		else {
			console.log('error');
		}
	}

	request.send();
});

