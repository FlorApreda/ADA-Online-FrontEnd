//Ejercicio 70
/*Crear un documento con el nombre ej70.js
Mostrar en consola la suma parcial de todos los números impares 
que van desde 0 hasta 1000 utilizando la estructura while. */

let numero = 0

while (numero <= 1000) {
	if (numero % 2 !== 0) {
		console.log(numero)
	}
	numero++
}
