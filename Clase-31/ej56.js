//Ejercicio 56
/*Crear un documento con el nombre ej56.js
Copiar el código del ej53.md
Refactorizar el código y utilizar operador ternario en lugar de if/else*/

/*

if (numero % 2 == 0) {
	console.log('El número es par')
} else {
	console.log('El número no es par')
}*/

let numero = 11
let mensaje = numero % 2 == 0 ? 'El número es par' : 'El número no es par'
console.log(mensaje)
