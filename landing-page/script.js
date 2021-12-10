let button = document.createElement('button');
button.innerHTML = 'test';
let heroTitle = document.querySelector('.hero-title');

heroTitle.appendChild(button);

button.className += 'btn';

button.addEventListener('click', () => {
	console.log('clicked');
});
