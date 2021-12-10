const todoInput = document.getElementById('todo-input');
const todoForm = document.getElementById('todoForm');
const todoList = document.querySelector('.todo-list');
const deleteAllBtn = document.querySelector('.delete');

let todoItems = [];

todoForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let input = todoInput.value;

	if (input.length !== 0) {
		newTodo = new Todo(input);

		todoItems.push(newTodo);

		newTodo = null;
		todoInput.value = '';

		displayTodos();
	}
});

function Todo(description) {
	this.description = description;
	this.completed = false;

	const completeTodo = () => {
		this.completed = true;
	};
}

const buildTodo = (todo, index) => {
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	const todoText = document.createElement('span');
	todoText.textContent = todo.description;
	todoText.id = index;
	todoDiv.appendChild(todoText);

	const buttonDiv = document.createElement('div');
	const completedBtn = document.createElement('button');
	completedBtn.classList.add('complete-btn');
	completedBtn.innerHTML = '<i class="fas fa-check"></i>';
	buttonDiv.appendChild(completedBtn);

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete-button');
	deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
	buttonDiv.appendChild(deleteBtn);

	completedBtn.addEventListener('click', (e) => {
		e.preventDefault();
		todoText.classList.toggle('complete');
	});

	deleteBtn.addEventListener('click', (e) => {
		e.preventDefault();
		todoItems.splice(todoText.id, 1);
		displayTodos();
	});

	todoDiv.appendChild(buttonDiv);
	return todoDiv;
};

const buildTodos = (todos) => {
	const todolist = todos.map((todo, index) => buildTodo(todo, index));

	return todolist;
};

const displayTodos = () => {
	todoList.innerHTML = '';
	const todos = buildTodos(todoItems);

	if (todoItems.length > 0) {
		deleteAllBtn.classList.add('active');
	} else {
		deleteAllBtn.classList.remove('active');
	}
	todos.map((todo) => {
		todoList.appendChild(todo);
	});
};

displayTodos();

deleteAllBtn.addEventListener('click', (e) => {
	e.preventDefault();
	todoItems = [];
	displayTodos();
});
