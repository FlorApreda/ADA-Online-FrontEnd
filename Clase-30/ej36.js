/* Ejercicio 36
Crear un documento con el nombre ej36.js
Declarar las siguientes variables numero1 y numero2
Asignar a numero1 el valor 10
Asignar a numero2 el valor 20
Mostrar en consola los siguientes mensajes:
La variable numero1 y numero2 tienen el mismo valor: true/false
La variables numero1 y numero2 son distintas: true/false */

let numero1 = 10
let numero2 = 20

console.log(
	'La variable numero1 y numero2 tienen el mismo valor:' +
		' ' +
		(numero1 == numero2)
)

console.log(
	'La variables numero1 y numero2 son distintas:' + ' ' + (numero1 != numero2)
)
