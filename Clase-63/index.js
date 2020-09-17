const addTodo = () => {
	const tarea = document.querySelector('input').value
	const span = document.createElement('span')
	const li = document.createElement('li')
	const checkbox = document.createElement('input')
	checkbox.type = 'checkbox'
	checkbox.addEventListener('click', tachar)
	const deletebutton = document.createElement('button')
	deletebutton.type = 'button'
	deletebutton.innerText = 'eliminar'
	deletebutton.addEventListener('click', deleteTodo)
	if (tarea === '') throw new Error('No ingresaste ninguna tarea')
	span.innerText = tarea

	document.querySelector('input').value = ''
	li.appendChild(deletebutton)
	li.appendChild(checkbox)
	li.appendChild(span)

	document.querySelector('ul').appendChild(li)
}

const load = () => {
	const button = document.querySelector('button')
	button.addEventListener('click', addTodo)
}

const deleteTodo = (event) => {
	const deletebutton = event.target
	deletebutton.parentElement.remove()
}

const tachar = (event) => {
	const checkbox = event.target
	if (checkbox.checked) {
		checkbox.parentElement.style.textDecoration = 'line-through'
	} else {
		checkbox.parentElement.style.textDecoration = 'none'
	}
}
