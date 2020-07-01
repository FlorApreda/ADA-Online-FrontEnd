//Ejercicio 78
/*Crear un documento con el nombre ej78.js
Copiar y pegar el código del ejercicio ej68.js
Modificar el código utilizando la estructura do/while en lugar de while
*/

/*
let numero = 0

while (numero <= 1000) {
	if (numero % 2 === 0) {
		console.log(numero)
	}
	numero++
}
*/

let numero = 0

do {
	if (numero % 2 === 0) {
		console.log(numero)
	}
	numero++
} while (numero <= 1000)
