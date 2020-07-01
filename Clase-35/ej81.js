//Ejercicio 81
/* Crear un documento con el nombre ej81.js
Copiar y pegar el código del ejercicio ej71.js
Modificar el código utilizando la estructura do/while en lugar de while
*/

/*
let numero = 1
let tablaDel9 = 0

while (numero <= 9) {
	tablaDel9 = numero * 9
	console.log(tablaDel9)
	numero++
}
*/

let numero = 1
let tablaDel9 = 0

do {
	tablaDel9 = numero * 9
	console.log(tablaDel9)
	numero++
} while (numero <= 9)
