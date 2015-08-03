(function() {
	
		
	var showNotificationsButton = document.getElementById('showNotifications');
	var allowNotifications = false;
	
	// Notification feature detection
	if (typeof Notification === 'function') {
		checkPermission();
	} else {
		alert('Your browser does not support Web Notifications API.');
		return;
	}

	//showNotificationsButton.addEventListener('click', function(e) {
	//	showNotifications();
	//});
	
	
	function checkPermission() {
		
		Notification.requestPermission(function (status) {
			if (Notification.permission !== status) {
				Notification.permission = status;
			}
			if (Notification.permission === 'granted') {
				//showNotificationsButton.removeAttribute('disabled');
			}
		});
	}
	
	function showNotifications() {
			
		var ms = 3000; // close notification after 3 sec
		
			var en = new Notification('New Message', { 
				body: 'From: Nigerian Prince',
				icon: 'images/msg.png' 
			});

			setTimeout(en.close.bind(en), ms);
	}
})();






