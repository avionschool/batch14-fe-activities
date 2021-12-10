// NAME FORM FUNCTION
nameForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let nameInput = document.getElementById('name-input').value;
	let nameError = document.getElementById('name-error');
	if (nameInput.length === 0) {
		nameError.textContent = 'Please Enter your name';
	} else {
		const capName = capitalizeName(nameInput);
		username.textContent = `${capName}.`;
		username.autocapitalize;
		localStorage.setItem('name', capName);
		init.style.display = 'none';
		loaded.style.display = 'block';
		focusIntro.style.display = 'block';
		focusDiv.style.display = 'none';
		todoBtn.style.display = 'block';
		quoteDiv.style.display = 'block';
	}
});

// Capitalizes first element of the string name
function capitalizeName(name) {
	const cap = name.charAt(0).toUpperCase() + name.slice(1);
	return cap;
}

focusForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let focusInput = document.getElementById('focus-input').value;

	if (focusInput.length === 0) {
	} else {
		focus.innerText = focusInput;
		localStorage.setItem('focus', focusInput);
		focusIntro.style.display = 'none';
		focusDiv.style.display = 'block';
	}
});

username.addEventListener('click', () => {
	localStorage.clear();
	focusDiv.style.display = 'none';
	focusIntro.style.display = 'none';
	loaded.style.display = 'none';
	init.style.display = 'block';
	todoBtn.style.display = 'none';
	quoteDiv.style.display = 'none';
});

focus.addEventListener('click', () => {
	localStorage.removeItem('focus');
	focusDiv.style.display = 'none';
	focusIntro.style.display = 'block';
});

addQuote.addEventListener('click', () => {
	content.style.display = 'none';
	author.style.display = 'none';
	quoteForm.style.display = 'block';
});

quoteForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let contentInput = document.getElementById('content-input').value;
	let authorInput = document.getElementById('author-input').value;
	if (contentInput.length !== 0 && authorInput.length !== 0) {
		content.textContent = `"${contentInput}"`;
		author.textContent = authorInput;
		content.style.display = 'block';
		author.style.display = 'block';
		quoteForm.style.display = 'none';
	}
});

refreshQuote.addEventListener('click', () => {
	getRandomQuote();
});

const getRandomQuote = () => {
	quote = quotesArr[Math.floor(Math.random() * quotesArr.length)];

	content.textContent = `"${quote.text}"`;
	author.textContent = quote.author;
};
