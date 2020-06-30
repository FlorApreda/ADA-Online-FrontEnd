//Ejercicio 68
/*Crear un documento con el nombre ej68.js
Mostrar en consola los números pares del 0 al 1000 utilizando la estructura while */

let numero = 0

while (numero <= 1000) {
	if (numero % 2 === 0) {
		console.log(numero)
	}
	numero++
}
