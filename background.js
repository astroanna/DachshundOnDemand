chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({breed: 'dachshund'}, function() {
		console.log('The breed is dachshund');
	});
});
