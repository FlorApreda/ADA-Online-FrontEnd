/* Ejercicio 35
Crear un documento con el nombre ej35.js
Declar la variable number numeroDeCliente y asignar el valor 143245
Declar la variable numeroDeClienteIngresado y asignar el valor '143245'
Mostrar en consola si el dato ingresado y el número de cliente son iguales (comparación por valor)
Utilizar el siguiente mensaje: El número ingresado por el cliente es correcto: true o false
Mostrar en consola si el dato ingresado y el número de cliente son iguales (comparación por valor y tipo de dato)
Utilizar el siguiente mensaje: El cliente ingresó un número de cliente válido: true o false */

let numeroDeCliente = 143245
let numeroDeClienteIngresado = '143245'

console.log(
	'El número ingresado por el cliente es correcto:' +
		' ' +
		(numeroDeCliente == numeroDeClienteIngresado)
)
console.log(
	'El cliente ingresó un número de cliente válido:' +
		' ' +
		(numeroDeCliente === numeroDeClienteIngresado)
)
