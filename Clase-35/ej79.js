//Ejercicio 79
/*Crear un documento con el nombre ej79.js
Copiar y pegar el código del ejercicio ej69.js
Modificar el código utilizando la estructura do/while en lugar de while
*/

/*
let numero = 0
let i = 0

while (numero <= 1000) {
	i = i + numero
	numero++
}
*/

let numero = 0
let i = 0

do {
	i = i + numero
	console.log(i)
	numero++
} while (numero <= 1000)
