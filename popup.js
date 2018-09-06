console.log('hi!');

let puppyPhoto = document.getElementById('puppyPhoto');

var request = new XMLHttpRequest();

request.open('GET', 'https://dog.ceo/api/breed/dachshund/images/random', true);

request.onload = function() {
	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		puppyPhoto.src = data.message;
	}
	else {
		console.log('error');
	}
}

request.send();
