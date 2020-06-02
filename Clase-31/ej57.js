//Ejercicio 57
/*Crear un documento con el nombre ej57.js
Copiar el código del ej54.md
Refactorizar el código y utilizar operador ternario en lugar de if/else*/

/*let user = 'ada2020'
let password = '12345'

if (user === 'ada2019' && password === '12345') {
	console.log('El usuario está autenticado y puede ver el contenido del sitio')
} else {
	console.log(
		'Error, no se pudo autenticar al usuario, puede intentarlo más tarde'
	)
}
*/

let user = 'ada2020'
let password = '12345'

let mensaje =
	user === 'ada2019' && password === '12345'
		? 'El usuario está autenticado y puede ver el contenido del sitio'
		: 'Error, no se pudo autenticar al usuario, puede intentarlo más tarde'

console.log(mensaje)
