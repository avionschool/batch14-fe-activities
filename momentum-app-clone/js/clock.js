function showTime() {
	let today = new Date(),
		hour = today.getHours(),
		minute = today.getMinutes();

	let amPm = hour >= 12 ? 'pm' : 'am';

	hour = hour % 12 || 12;
	if (minute < 10) {
		minute = '0' + minute;
	}
	time.innerText = `${hour}:${minute}${amPm}`;

	setTimeout(showTime, 1000);
}

function setBg() {
	let hour = new Date().getHours();
	let app = document.querySelector('.app');
	if (hour < 12) {
		app.style.background = 'url(../assets/morning.jpg)';
		app.style.backgroundSize = 'cover';
		app.style.backgroundAttachment = 'fixed';
		app.style.backgroundPosition = 'center center';
		greeting.textContent = 'Good Morning, ';
	} else if (hour < 18) {
		app.style.background = 'url(../assets/afternoon.jpg)';
		app.style.backgroundSize = 'cover';
		app.style.backgroundAttachment = 'fixed';
		app.style.backgroundPosition = 'center center';
		greeting.textContent = 'Good Afternoon, ';
	} else {
		app.style.background = 'url(../assets/night.jpg)';
		app.style.backgroundSize = 'cover';
		app.style.backgroundAttachment = 'fixed';
		app.style.backgroundPosition = 'center center';
		greeting.textContent = 'Good Evening, ';
	}
}

showTime();
setBg();
