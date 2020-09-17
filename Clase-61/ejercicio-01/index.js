//01
/**
 * Crear un input de tipo checkbox.
 * Escribir una funcion "toggleChecked" que
 * cambie el estado de clickeado a sin
 * clickear o viceversa.
 */

const toggleChecked = () => {
	const form = document.querySelector('#check')
	form.checked = !form.checked
}
