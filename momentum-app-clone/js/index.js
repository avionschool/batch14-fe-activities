const time = document.getElementById('time'),
	greeting = document.getElementById('greeting'),
	username = document.getElementById('name'),
	focus = document.getElementById('focus'),
	content = document.getElementById('content'),
	author = document.getElementById('author');

const todoBtn = document.querySelector('.todo-button');
const modal = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
const init = document.querySelector('.init');
const quoteDiv = document.querySelector('.quote');
const focusDiv = document.querySelector('.focusDiv');
const focusIntro = document.querySelector('.focusIntro');
const bottomBar = document.querySelector('.bottom-bar');
const loaded = document.querySelector('.loaded');

const center = document.querySelector('.center');
const centerBelow = document.querySelector('.center-below');
const nameForm = document.getElementById('nameForm');

const focusForm = document.getElementById('focusForm');
const container = document.querySelector('.container');
const quoteForm = document.getElementById('quoteForm');
const addQuote = document.getElementById('add-quote');
const refreshQuote = document.getElementById('refresh-quote');
let quotesArr;
let quote;

// PAGE LOAD
window.addEventListener('load', (event) => {
	let storedName = localStorage.getItem('name');
	let storedFocus = localStorage.getItem('focus');
	console.log(storedFocus);
	getQuote();
	if (!storedName) {
		loaded.style.display = 'none';
		focusDiv.style.display = 'none';
		focusIntro.style.display = 'none';
		container.style.display = 'none';
		todoBtn.style.display = 'none';
		quoteDiv.style.display = 'none';
	} else {
		username.textContent = `${storedName}.`;
		init.style.display = 'none';
		loaded.style.display = 'block';
		container.style.display = 'none';
		loaded.classList.toggle('show');
		todoBtn.style.display = 'block';
		quoteDiv.style.display = 'block';
		console.log(storedFocus);
		if (storedFocus === null) {
			focusIntro.style.display = 'block';
			focusDiv.style.display = 'none';
		} else {
			focus.innerText = storedFocus;
			console.log(focus);
			focusDiv.style.display = 'block';
			focusIntro.style.display = 'none';
		}
	}
});

const getQuote = () => {
	fetch('https://type.fit/api/quotes')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			quotesArr = data;
			quote = quotesArr[Math.floor(Math.random() * quotesArr.length)];

			content.textContent = `"${quote.text}"`;
			author.textContent = quote.author;
		});
};

quoteDiv.addEventListener('mouseenter', () => {
	if (quoteForm.style.display == 'block') {
		author.style.display = 'none';
	}
	author.style.display = 'block';
	container.style.display = 'flex';
});

quoteDiv.addEventListener('mouseleave', () => {
	author.style.display = 'none';
	container.style.display = 'none';
});

todoBtn.addEventListener('click', () => {
	modal.classList.add('modal-active');
});

modalClose.addEventListener('click', () => {
	modal.classList.remove('modal-active');
});
